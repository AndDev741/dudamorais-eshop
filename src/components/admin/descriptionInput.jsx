function DescriptionInput({name, type, placeholder}){
    return(
        <div className="flex flex-col">
            <label htmlFor={name}
            className="text-xl">{name}</label>

            <textarea id={name} name={name}
            type={type}
            placeholder={`Sem cinto`}
            className="border-2 border-mainColor rounded-md mt-1 pl-2 min-h-[102px]"/>
        </div>
    )
}

export default DescriptionInput;