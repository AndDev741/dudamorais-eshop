import axios from "../axiosConfig";

async function makeLogin(username, password){
    try{
        const loginData = {
            username,
            password
        }
        const response = await axios.post("/auth/login" ,loginData);
        return response.data
    }catch(error){
        console.error(error);
        if(error?.response){
            return error.response.data;
        }
    }
}

export default makeLogin;