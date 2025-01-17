import axios from "../axiosConfig";

export default async function createType(name, userId){
    try{
        const typeData = {
            name,
            userId
        }
        const response = axios.post("/type", typeData);
        return (await response).data;
    }catch(e){
        console.error(e);
        if(e?.response){
            return e.response;
        }else{
            return "error";
        }
    }
}