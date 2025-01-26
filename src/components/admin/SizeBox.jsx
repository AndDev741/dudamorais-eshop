import { useEffect, useState } from "react";

function SizeBox({size, sizesAndQuantities ,setSizeAndQuantities}){
    const [quantity, setQuantity] = useState(null);

    useEffect(() => {
        sizesAndQuantities.map((sizeAndQuantity) => {
            if(size === sizeAndQuantity.size){
                setQuantity(sizeAndQuantity.quantity)
            }
        })
    }, [size, sizesAndQuantities])

    const handleSize = (e) => {
        const newQuantity = Number(e.target.value);
        
        setQuantity(newQuantity)

        const updatedSizes = sizesAndQuantities.filter(item => item.size !== size);

        if(newQuantity > 0 ){
            updatedSizes.push({
                size,
                quantity: newQuantity
            })
        };

        setSizeAndQuantities(updatedSizes); 
    }
    
    
    return(
        <div>
            <div className="flex items-center justify-center w-[40px] h-[40px] border-[1px] border-mainColor rounded-full">
                <h4 className="text-lg font-medium">{size}</h4>
            </div>
            <input type="number"
            value={quantity}
            onChange={handleSize}
            className="text-center  outline-none border-b-2 border-mainColor w-[40px] 
            [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"/>
        </div>
    )
}

export default SizeBox;