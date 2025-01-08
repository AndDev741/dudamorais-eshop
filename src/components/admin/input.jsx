function Input({name, type, placeholder}){
    return(
        <div className="flex flex-col">
            <label htmlFor={name}
            className="text-xl">{name}</label>

            <input id={name} name={name}
            type={type}
            placeholder={`${name === "Preço" ? "R$" : ""} ${placeholder}`}
            className="border-2 border-mainColor rounded-md mt-1 pl-2 h-[35px]"/>
        </div>
    )
}

export default Input;