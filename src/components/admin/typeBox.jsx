function TypeBox({name}){
    return(
        <div className=" flex items-center justify-center border-2 border-mainColor w-[100px] h-[40px] rounded-md mx-2 cursor-pointer">
            <h3 className="text-lg ">{name}</h3>
        </div>
    )
}

export default TypeBox;