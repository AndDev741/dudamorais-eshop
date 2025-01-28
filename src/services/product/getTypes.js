import axios from "../axiosConfig";

export default async function getTypes(){
    try{
        const response = await axios.get(`/type/get`);
        return response.data;
    }catch(e){
        console.error(e)
    }
}