import searchIcon from "../../assets/search.svg";

function Search(){
    return(
        <div className="flex justify-between border-solid border-[2px] border-mainColor w-[80vw] h-[30px] rounded-[12px]">
            <input type="text"
                className="ml-2 outline-none w-[100%]"
            />
            <img src={searchIcon} 
            alt="ícone de lupa para pesquisa"
            className="mr-2"
            />
        </div>
    )
}

export default Search;