import axios from "../axiosConfig";

export default async function getProducts(){
    try{
        const response = await axios.get("/product/get");
        return response.data;
    }catch(e){
        console.error(e);
        if(e?.response){
            return e.response.data;
        }
    }
}