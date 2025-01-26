import axios from "../axiosConfig";

export default async function deleteProduct(productId, picturesToDelete) {
    try{
        const deleteData = {
            productId,
            picturesToDelete
        }
        const response = await axios.post(`/product/delete`, deleteData);
        return response.data;
    }catch(e){
        console.error(e);
        if(e?.response){
            return e.response.data;
        }
    }
}