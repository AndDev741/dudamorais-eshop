import { useEffect, useState } from "react";
import favoriteIcon from "../../assets/favorite.svg";
import whatsAppIcon from "../../assets/whatsappIcon.svg";
import rigthArrow from "../../assets/rightArrow.svg";

function ProductBox({mainPicture, othersPictures, name, description, price, sizesAndQuantities}){
    const parcel = Math.floor((Number(price) / 2 * 100)) / 100
    const [openModal, setOpenModal] = useState(false);
    const [sizes, setSizes] = useState([]);
    const [quantities, setQuantities] = useState("");
    const [picturesList, setPicturesList] = useState([]);

    const [activeIndex, setActiveIndex] = useState(0);
    const [filesLength, setFilesLength] = useState(0);

    useEffect(() => {
        const urls = [];

        urls.push(mainPicture);
        if(othersPictures !== null){
            othersPictures.map((picture) => {
                urls.push(picture);
            });
        }

        setPicturesList(urls);
        setFilesLength(urls.length)
    }, [mainPicture, othersPictures]);


    const nextPicture = () => {
        if(activeIndex === filesLength - 1 || activeIndex === filesLength){
            setActiveIndex(0);
        }else{
            setActiveIndex(activeIndex + 1);
        }
    }

    const getSizesAndQuantities = () => {
        let totalQuantity = 0;
        let totalSizes = [];
        if(sizesAndQuantities?.length > 0){
            sizesAndQuantities.map((sizeAndQuantity) => {
                totalSizes.push(sizeAndQuantity.size)
                totalQuantity += sizeAndQuantity.quantity;
            });
            setSizes(totalSizes);
            setQuantities(totalQuantity);
        }
    }


    useEffect(() => {
        getSizesAndQuantities();
    }, [])

    return(
        <div className={`${openModal ? "w-[80vw] border-[1px] border-mainColor rounded-md animate-slideBorder" 
        : "w-[45vw]"} my-3 mx-2`}>

            <div className="flex flex-col">
                <div className="flex items-center">
                    <img onClick={() => setOpenModal(!openModal)}
                    src={picturesList[activeIndex]}
                    alt="foto do produto"
                    className={`${openModal ? "min-w-[50vw]" : "min-w-[45vw]"} max-h-[300px] rounded-t-md cursor-pointer`}/>

                    <div className={`${openModal ? "w-[50%]" : "hidden"}`}>
                        <img  src={rigthArrow}
                        onClick={nextPicture}
                        alt="ícone de seta para o lado direito"
                        
                        className="w-[50px] hover:scale-110 cursor-pointer"/>
                    </div>

                    <div className={`${openModal ? "animate-fadeIn" : "hidden"} text-center w-full`}>
                        <div className="text-lg">
                            <h3>Tamanhos </h3>
                            <h3>Disponíveis</h3>
                            <div className="flex flex-wrap items-center justify-center font-semibold mt-2">
                                {sizes.map((size, length) => (
                                    <p key={length}>{size}
                                        <span className={`${length === sizes.length - 1 ? "hidden" : ""}`}>,</span>
                                    </p>
                                ))}
                            </div>
                        </div>

                        <div className="text-lg mt-2">
                            <h3>Quantidades</h3>
                            <h3>Disponíveis</h3>
                            <p className="font-semibold">{quantities}</p>
                        </div>
                    </div>
                </div>

                <div className={`${openModal ? "" : "border-solid border-[1px] border-mainColor"} flex justify-between  w-[45vw] min-h-[100px] rounded-b-md p-2`}>
                    <div className="">
                        <h2 className="font-medium text-lg leading-tight">{name}</h2>
                        <p className="font-light text-sm leading-tight">{description}</p>
                        <h3 className="text-lg font-medium mt-1">R${price}</h3>
                        <p>2x de ${(parcel)}</p>
                    </div>
                    
                    <div className={`flex flex-col justify-between`}>
                        <img src={favoriteIcon}
                        alt="ícone de coração para favoritos"
                        className="w-[40px] cursor-pointer"/>
                        <img src={whatsAppIcon}
                        alt="Ícone do whatsapp(telefone com fundo verde)"
                        className="w-[40px] cursor-pointer"/>
                    </div>
                </div>
            </div>

            
        </div>
    )   
}


export default ProductBox;