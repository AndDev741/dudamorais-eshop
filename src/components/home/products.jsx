import ProductBox from "./productBox";

function Products({products, filteredProducts}){

    return(
        <div className="w-full">
            <p className="text-center text-mainColor">+ Clique nas imagens para ver mais detalhes e fotos</p>
            <div className="flex flex-wrap justify-between md:justify-center w-full">
                {filteredProducts?.length > 0 ? (
                    filteredProducts.map(product => (
                        <ProductBox key={product.id}
                        mainPicture={product.mainPictureUrl}
                        othersPictures={product.otherPicturesUrl}
                        name={product.name}
                        description={product.description}
                        price={product.price}
                        sizesAndQuantities={product.sizeAndQuantity}
                        />
                    ))
                )
                : 
                products?.length > 0 ? products.map(product => (
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