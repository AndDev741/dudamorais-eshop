import axios from "../axiosConfig";

export default async function(typeId){
    try{
        const response = axios.delete(`/type/${typeId}`);
        return (await response).data;
    }catch(e){
        console.error(e);
        if(e?.response){
            return e.response.data;
        }
    }
}