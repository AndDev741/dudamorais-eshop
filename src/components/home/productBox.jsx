import favoriteIcon from "../../assets/favorite.svg";
import whatsAppIcon from "../../assets/whatsappIcon.svg";

function ProductBox({img, name, description, price}){
    const parcel =(Number(price) / 2).toFixed(2);

    return(
        <div className="w-[45vw] my-3 mx-2">

            <img src={img}
            alt="foto do produto"
            className="w-[100%] max-h-[300px] rounded-t-[12px] cursor-pointer"/>

            <div className="flex justify-between border-solid border-[1px] border-mainColor min-h-[100px] rounded-b-[12px] p-2">

                <div className="">
                    <h2 className="font-medium text-lg leading-tight">{name}</h2>
                    <p className="font-light text-sm leading-tight">{description}</p>
                    <h3 className="text-lg font-medium mt-1">R${price}</h3>
                    <p>2x de ${(parcel)}</p>
                </div>
                
                <div className="flex flex-col justify-between">
                    <img src={favoriteIcon}
                    alt="ícone de coração para favoritos"
                    className="w-[40px] cursor-pointer"/>
                    <img src={whatsAppIcon}
                    alt="Ícone do whatsapp(telefone com fundo verde)"
                    className="w-[40px] cursor-pointer"/>
                </div>
            </div>
        </div>
    )   
}

export default ProductBox;