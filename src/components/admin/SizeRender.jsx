import SizeBox from "./SizeBox";

function SizeRender(){
    return(
        <div className="flex justify-evenly mt-3 w-full">
            <SizeBox size={36}/>
            <SizeBox size={38}/>
            <SizeBox size={40}/>
            <SizeBox size={42}/>
            <SizeBox size={44}/>
            <SizeBox size={46}/>
            <SizeBox size={48}/>
        </div>
    )
}

export default SizeRender;