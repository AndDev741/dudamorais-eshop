import Header from "../components/header";
import Search from "../components/home/search";
import Products from "../components/home/products";
import Shortcuts from "../components/home/shortcuts";
import getProducts from "../services/product/getProduct";
import { useEffect, useState } from "react";


function Home(){
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [search, setSearch] = useState("");
    const [types, setTypes] = useState([]);

    useEffect(() => {
        const getData = async () => {
            const response = await getProducts();
            setProducts(response);
        }

        getData();
    }, [setProducts]);
    return(
        <>
            <Header/>
            <div className="flex items-center justify-center">
                <Search search={search} setSearch={setSearch} products={products} setFilteredProducts={setFilteredProducts}/>
            </div>
            <div className="flex items-center justify-center mt-4">
                <Shortcuts types={types} setTypes={setTypes} setFilteredProducts={setFilteredProducts} products={products}/>
            </div>
            <div className="flex justify-center mt-4 w-full">
                <Products products={products} filteredProducts={filteredProducts}/>
            </div>
        </>
    )
}

export default Home;