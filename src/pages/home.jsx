import Header from "../components/home/header";
import Search from "../components/home/search";
import Products from "../components/home/products";

function Home(){
    return(
        <>
            <Header/>
            <div className="flex items-center justify-center">
                <Search />
            </div>
            <div className="flex justify-center mt-6">
                <Products/>
            </div>
        </>
    )
}

export default Home;