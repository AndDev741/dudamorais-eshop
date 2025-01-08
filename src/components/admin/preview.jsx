import favoriteIcon from "../../assets/favorite.svg"
export default function Preview({picture, sizes, quantity, name, description, price}){

const half = Math.floor((Number(price) / 2 * 100)) / 100

    return(
        <div className="flex">
            <div className="flex flex-col">
                <div className="flex items-center justify-center bg-[#D9D9D9] w-[250px] h-[280px] max-h-[300px] rounded-[12px] border-dashed border-2 border-black cursor-pointer hover:bg-[#E4DFDF]">
                    <h4 className="text-2xl font-semibold">Foto Principal</h4>
                </div>

                <div className="flex items-start justify-between mt-2">
                    <div>
                        <h4 className="text-2xl">{name}</h4>
                        <p className="text-gray-500">{description}</p>

                        <h4 className="text-2xl mt-2">R${price}</h4>
                        <p className="text-gray-500">2x de R${half}</p>
                    </div>
                    <img src={favoriteIcon}
                    className="w-[50px] cursor-pointer" />
                </div>
            </div>

            <div className="flex flex-col ml-10">
                <div className="flex flex-col text-xl font-medium text-center">
                    <h4>Tamanhos</h4>
                    <h4>disponíveis</h4>
                    <div className="flex items-center justify-center font-semibold mt-4">
                        {sizes.map((size, length) => (
                            <p>{size}
                                <span className={`${length === sizes.length - 1 ? "hidden" : ""}`}>,</span>
                            </p>
                        ))}
                        
                    </div>
                </div>
                <div className="flex flex-col text-xl font-medium text-center mt-3">
                    <h4>Unidades</h4>
                    <h4>disponíveis</h4>
                    <p className="font-semibold">{quantity}</p>
                </div>

            </div>
        </div>
    )
}