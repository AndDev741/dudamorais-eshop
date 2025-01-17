import axios from "../axiosConfig";

export default async function getTypes(userId){
    try{
        const response = await axios.get(`/type/${userId}`);
        return response.data;
    }catch(e){
        console.error(e)
        if(e?.response){
            return e.response.data
        }else{
            return "error";
        }
    }
}