import { useEffect, useState } from "react";
import rigthArrow from "../../assets/rightArrow.svg";
import favoriteIcon from "../../assets/favorite.svg"
export default function Preview({mainPictureUrl, othersPicturesUrl, mainPicture, othersPictures, sizes, name, description, price}){

const half = Math.floor((Number(price) / 2 * 100)) / 100
    const getTotalQuantity = () => {
        return sizes.reduce((total, item) => total + Number(item.quantity || item.quantities || 0), 0);
    };

    const [activeIndex, setActiveIndex] = useState(0);
    const [filesLength, setFilesLength] = useState(0);
    const [picturesList, setPicturesList] = useState([]);

    useEffect(() => {
        if(mainPicture && othersPictures?.length > 0){
            setActiveIndex(0)
            const files = [];
            files.push(URL.createObjectURL(mainPicture));

            const arrayOfPictures = [];
            for(let i = 0; i < othersPictures.length; i++){
                arrayOfPictures.push(othersPictures[i]);
            }
            
            arrayOfPictures.map((picture) => files.push(URL.createObjectURL(picture)))
            setPicturesList(files)
            setFilesLength(files.length);
        }else if(mainPicture){
            setActiveIndex(0);
            setFilesLength(0);
            const files = [];
            files.push(URL.createObjectURL(mainPicture));
            setPicturesList(files)
        }else if(mainPictureUrl){
            const picturesUrl = [];
            picturesUrl.push(mainPictureUrl);

            for(let i = 0; i < othersPicturesUrl.length; i++){
                picturesUrl.push(othersPicturesUrl[i]);
            }

            setFilesLength(picturesUrl.length);
            setPicturesList(picturesUrl)
        }
    }, [mainPicture, othersPictures, mainPictureUrl, othersPicturesUrl]);

    const nextPicture = () => {
        if(activeIndex === filesLength - 1 || activeIndex === filesLength){
            setActiveIndex(0);
        }else{
            setActiveIndex(activeIndex + 1);
        }
    }
    return(
        <div className="flex justify-between">
            <div className="flex flex-col">
                <div className={`flex items-center justify-center w-[250px] sm:w-[200px] h-[280px] max-h-[300px] ${picturesList.length > 0 ? "" : "bg-[#D9D9D9] hover:bg-[#E4DFDF] rounded-[12px] border-dashed border-2 border-black"} cursor-pointer `}>
                    <h4 className={`${picturesList.length > 0 ? "hidden" : ""} text-2xl font-semibold`}>Foto Principal</h4>
                    <img src={picturesList[activeIndex]}
                    alt="Imagem do produto"
                    className={`${picturesList.length > 0 ? "block w-full h-full rounded-md" : "hidden"}`} />
                </div>

                <div className="flex items-start justify-between mt-2">
                    <div>
                        <h4 className="text-2xl">{name}</h4>
                        <p className="text-gray-500">{description}</p>

                        <h4 className="text-2xl mt-2">R${price}</h4>
                        <p className="text-gray-500">2x de R${half}</p>
                    </div>
                    <img alt="ícone de coração para favoritos"
                    src={favoriteIcon}
                    className="w-[50px] cursor-pointer" />
                </div>
            </div>

            <div className="  ">
                <img  src={rigthArrow}
                alt="ícone de seta para o lado direito"
                onClick={nextPicture}
                className="mt-[100px] w-[50px] hover:scale-110 cursor-pointer"/>
            </div>

            <div className="flex flex-col mr-8">
                <div className="flex flex-col text-xl font-medium text-center">
                    <h4>Tamanhos</h4>
                    <h4>disponíveis</h4>
                    <div className="flex flex-wrap items-center justify-center font-semibold mt-4">
                        {sizes.map((size, length) => (
                            <p key={length}>{size.size}
                                <span className={`${length === sizes.length - 1 ? "hidden" : ""}`}>,</span>
                            </p>
                        ))}
                        
                    </div>
                </div>
                <div className="flex flex-col text-xl font-medium text-center mt-3">
                    <h4>Unidades</h4>
                    <h4>disponíveis</h4>
                    <p className="font-semibold">{getTotalQuantity()}</p>
                </div>

            </div>
        </div>
    )
}