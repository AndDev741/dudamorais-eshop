function SizeBox({size}){
    return(
        <div>
            <div className="flex items-center justify-center w-[40px] h-[40px] border-[1px] border-mainColor rounded-full">
                <h4 className="text-lg font-medium">{size}</h4>
            </div>
            <input type="number"
            className="text-center  outline-none border-b-2 border-mainColor w-[40px]"/>
        </div>
    )
}

export default SizeBox;