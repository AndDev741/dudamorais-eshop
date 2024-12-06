function ShortcutBox({name}){
    return(
        <div className="flex items-center justify-center min-w-[100px] h-[40px] border-solid border-2 border-mainColor rounded-md cursor-pointer hover:bg-ligthBrown mt-1">
            <h3 className="text-lg">{name}</h3>
        </div>
    )
}

export default ShortcutBox;