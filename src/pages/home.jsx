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
                <Shortcuts/>
            </div>
            <div className="flex justify-center mt-4">
                <Products products={products} filteredProducts={filteredProducts}/>
            </div>
        </>
    )
}

export default Home;