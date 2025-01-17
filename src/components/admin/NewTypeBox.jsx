import { useState } from "react";
import createType from "../../services/product/createType";
import getTypes from "../../services/product/getTypes";

function NewTypeBox({setTypes, userId}){
    const [name, setName] = useState("");
    const [writeNameOn, setWriteNameOn] = useState(false);

    const handleForm = async (e) => {
        e.preventDefault();
        const response = await createType(name, userId);
        if(response?.success){
            const newTypes = await getTypes(userId);
            setTypes(newTypes)
        }
    }

    return(
        <div onClick={() => setWriteNameOn(true)} 
        className="flex items-center justify-center border-2 border-gray-500 border-dashed min-w-[100px] max-w-[100px] h-[40px] rounded-md cursor-pointer mx-2 mt-5">
            {writeNameOn === true ? 
            <input type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            onKeyDown={async (e) => {
                if (e.key === "Enter") {
                    e.preventDefault();
                    await handleForm(e);
                }
            }}
            className="w-[90%] border-b-2 border-mainColor text-center"/>
            :
            <h3 className="text-lg text-gray-400">Novo</h3>}
        </div>
    )
}

export default NewTypeBox;