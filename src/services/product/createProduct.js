import axios from "../axiosConfig";

export default async function createProduct(userId, name, description, price, type, sizeAndQuantities, mainPictureUrl, otherPicturesUrl){
    try{
        if(name.length === 0 || price === null || type.length === 0 || sizeAndQuantities.length === 0 || mainPictureUrl.length === 0){
            return {error: "Preencha todos os dados corretamente"}
        }

        const productData = {
            userId,
            name,
            description,
            price,
            type,
            sizeAndQuantities,
            mainPictureUrl,
            otherPicturesUrl
        }

        const response = axios.post("/product", productData);
        return (await response).data;
    }catch(e){
        console.error(e);
        if(e?.response){
            return e.response.data;
        }
    }
}