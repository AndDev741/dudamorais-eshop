import searchIcon from "../../assets/search.svg";

function Search({search, setSearch, products, setFilteredProducts}){
    const handleSearch = (e) => {
        setSearch(e.target.value);
        if(products?.length > 0){
            const filteredProducts = products.filter(product => {
                return product.name.toLowerCase().includes(search.toLowerCase());
            });
            console.log("filtered: ", filteredProducts);
            
            setFilteredProducts(filteredProducts);
        }
        console.log(products?.length > 0)
        console.log("search: ", search.toLowerCase())
    }
    return(
        <div className="flex justify-between border-solid border-[2px] border-mainColor w-[80vw] h-[30px] rounded-[12px]">
            <input type="text"
            value={search}
            onChange={handleSearch}
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