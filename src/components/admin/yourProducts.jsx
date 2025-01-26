import { useEffect, useState } from "react"
import { useNavigate } from "react-router";
import deleteIcon from "../../assets/deleteIcon.svg";
import deleteProduct from "../../services/product/deleteProduct";

export default function YourProducts({products}){
    const [haveProducts, setHaveProducts] = useState(false);
    
    const navigate = useNavigate();
    useEffect(() => {
        if(products?.length > 0){
            setHaveProducts(true)
        }
    }, [products]);

    const handleEditMode = (productId, name, description, price, type, sizesAndQuantities, mainPictureUrl, othersPicturesUrl) => {
        const sizes = [];
        const quantities = [];
        if(sizesAndQuantities?.length > 0){
            sizesAndQuantities.forEach((sizeAndQuantity) => {
                sizes.push(sizeAndQuantity.size);
                quantities.push(sizeAndQuantity.quantity)
            })
        }
        localStorage.setItem("productId", productId);
        localStorage.setItem("name", name);
        localStorage.setItem("description", description);
        localStorage.setItem("price", price);
        localStorage.setItem("type", type.id);
        localStorage.setItem("sizes", JSON.stringify(sizes));
        localStorage.setItem("quantities", JSON.stringify(quantities))
        localStorage.setItem("mainPictureUrl", mainPictureUrl);
        localStorage.setItem("othersPicturesUrl", JSON.stringify(othersPicturesUrl));
        console.log(JSON.stringify(othersPicturesUrl));
        navigate("/editProduct")
    }

    const handleDelete = async (productId, picturesToDelete) => {
        console.log(productId);
        console.log(picturesToDelete)
        const response = await deleteProduct(productId, picturesToDelete);
        
        if(response?.success){
            window.location.reload();
        }else{
            alert("Erro ao tentar deletar produto");
        }
    }

    return(
        <div className={`${haveProducts ? " " : "hidden"}`}>
            <h1 className={`text-center text-4xl`}>Seus produtos</h1>
            <p className="text-center text-mainColor text-lg">Clique no produto para editá-lo</p>
            <div className="flex items-start mt-4 overflow-x-auto w-full ">
                <div className="flex items-center justify-evenly ">
                    {haveProducts ? products.map((product) => (
                        <div className="flex flex-col items-center ">
                            <img src={deleteIcon} className="w-[35px] cursor-pointer hover:scale-105"
                            onClick={() => handleDelete(product.id, product?.otherPicturesUrl ? [product.mainPictureUrl, ...product.otherPicturesUrl] : [product.mainPictureUrl])}/>
                            
                            <div className="w-[100px] h-[150px] mx-2 flex flex-col items-center justify-center border-2 border-mainColor rounded-md hover:bg-mainColor hover:text-white cursor-pointer"
                            onClick={() => handleEditMode(product.id, product.name, product.description, product.price, product.type, product.sizeAndQuantity, product.mainPictureUrl, product.otherPicturesUrl)}>
                            <img className="h-[70%] rounded-md"
                            src={product.mainPictureUrl}/>
                            <h3 className="line-clamp-1">{product.name}</h3>
                        </div>
                        </div>
                    )) : ""}
                </div>
            </div>
        </div>
    )
}