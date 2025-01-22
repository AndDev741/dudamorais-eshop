import ProductBox from "./productBox";
import exampleImg1 from '../../assets/exampleImg.jpeg';
import exampleImg2 from '../../assets/exampleImg2.png';

function Products({products}){

    return(
        <div>
            <p className="text-center text-mainColor">+ Clique nas imagens para ver mais detalhes e fotos</p>
            <div className="flex flex-wrap justify-between w-full">
                {products?.length > 0 ? products.map(product => (
                    <ProductBox key={product.id}
                    mainPicture={product.mainPictureUrl}
                    othersPictures={product.otherPicturesUrl}
                    name={product.name}
                    description={product.description}
                    price={product.price}
                    sizesAndQuantities={product.sizeAndQuantity}
                    />
                )) : <h1 className="text-2xl text-center">Sem produtos cadastrados no momento!</h1>}

            </div>
        </div>
            
    )
}

export default Products;