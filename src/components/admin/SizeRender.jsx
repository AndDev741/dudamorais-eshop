import SizeBox from "./SizeBox";

function SizeRender({sizesAndQuantities, setSizesAndQuantities}){
    return(
        <div className="flex justify-evenly mt-3 w-full">
            <SizeBox size={36} sizesAndQuantities={sizesAndQuantities} setSizeAndQuantities={setSizesAndQuantities}/>
            <SizeBox size={38} sizesAndQuantities={sizesAndQuantities} setSizeAndQuantities={setSizesAndQuantities}/>
            <SizeBox size={40} sizesAndQuantities={sizesAndQuantities} setSizeAndQuantities={setSizesAndQuantities}/>
            <SizeBox size={42} sizesAndQuantities={sizesAndQuantities} setSizeAndQuantities={setSizesAndQuantities}/>
            <SizeBox size={44} sizesAndQuantities={sizesAndQuantities} setSizeAndQuantities={setSizesAndQuantities}/>
            <SizeBox size={46} sizesAndQuantities={sizesAndQuantities} setSizeAndQuantities={setSizesAndQuantities}/>
            <SizeBox size={48} sizesAndQuantities={sizesAndQuantities} setSizeAndQuantities={setSizesAndQuantities}/>
        </div>
    )
}

export default SizeRender;