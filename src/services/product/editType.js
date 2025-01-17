import axios from "../axiosConfig";

export default async function editType(typeId, newName){
    try{
        const editData = {
            typeId,
            newName
        }

        const response = await axios.put("/type", editData);
        return response.data
    }catch(e){
        console.error(e);
        if(e?.response){
            return e.response.data;
        }
    }
}