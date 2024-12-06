import Header from "../components/home/header";
import Search from "../components/home/search";
import Products from "../components/home/products";
import Shortcuts from "../components/home/shortcuts";

function Home(){
    return(
        <>
            <Header/>
            <div className="flex items-center justify-center">
                <Search />
            </div>
            <div className="flex items-center justify-center mt-4">
                <Shortcuts/>
            </div>
            <div className="flex justify-center mt-4">
                <Products/>
            </div>
        </>
    )
}

export default Home;