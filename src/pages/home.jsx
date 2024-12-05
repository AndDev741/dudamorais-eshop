import Header from "../components/home/header";
import Search from "../components/home/search";

function Home(){
    return(
        <>
            <Header/>
            <div className="flex items-center justify-center">
                <Search />
            </div>
        </>
    )
}

export default Home;