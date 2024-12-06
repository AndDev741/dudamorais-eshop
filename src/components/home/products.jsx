import ProductBox from "./productBox";
import exampleImg1 from '../../assets/exampleImg.jpeg';
import exampleImg2 from '../../assets/exampleImg2.png';

function Products(){
    return(
        <div>
            <p className="text-center text-mainColor">+ Clique nas imagens para ver mais detalhes e fotos</p>
            <div className="flex flex-wrap justify-between w-full">
                <div className="">
                <ProductBox
                img={exampleImg1}
                name={"Short Jeans"}
                description={"Sem elastano"}
                price={"69.99"}/>
                </div>
                <div className="">
                <ProductBox
                img={exampleImg2}
                name={"Short Jeans"}
                description={"Sem elastano"}
                price={"69.99"}/>
                </div>

                <div className="">
                <ProductBox
                img={exampleImg1}
                name={"Short Jeans"}
                description={"Sem elastano"}
                price={"69.99"}/>
                </div>

            </div>
        </div>
            
    )
}

export default Products;