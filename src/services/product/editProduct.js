import axios from "../axiosConfig";

export default async function editProduct(productId, name, description, price, type, sizeAndQuantities ,mainPictureURL, otherPicturesURL, oldUrls){
    try{
        if(name === "" || price === "" || mainPictureURL === ""){
            return {error: "Preencha todos os dados necessários"}
        }

        const editData = {
            productId,
            name,
            description,
            price,
            type,
            sizeAndQuantities,
            mainPictureURL,
            otherPicturesURL,
            oldUrls
        };

        const response = await axios.put("/product", editData);
        return response.data;
    }catch(e){
        console.error(e);
        if(e?.response){
            return e.response.data;
        }
    }
}
