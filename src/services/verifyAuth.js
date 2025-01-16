import axios from './axiosConfig';

async function verifyAuthentication(){
    try{
        const response = await axios.get("/auth/verify");
        return response.data;
    }catch(e){
        console.error(e);
        if(e?.response){
            return e.response.data;
        }else{
            return "error";
        }
    }
}

export default verifyAuthentication;