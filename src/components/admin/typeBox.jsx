import { useState } from "react";
import editIcon from "../../assets/editIcon.svg";
import deleteIcon from "../../assets/deleteIcon.svg";
import editType from "../../services/product/editType";
import getTypes from "../../services/product/getTypes";
import deleteType from "../../services/product/deleteType";

function TypeBox({name, id, selectedType, setSelectedType, setTypes, userId}){
    const [newName, setNewName] = useState("");
    const [editMode, setEditMode] = useState(false);

    const handleDelete = async () => {
        const response = await deleteType(id);
        if(response?.success){
            const newTypes = await getTypes(userId);
            setTypes(newTypes);
            setEditMode(false);
            setSelectedType("");
        }
    }

    const handleForm = async () => {
        const response = await editType(id, newName);

        if(response?.success){
            const newTypes = await getTypes(userId);
            setTypes(newTypes);
            setEditMode(false)
        }
    }
    return(
        <div className="w-full h-full">
             <div className="w-full flex items-center justify-between">
                <div className={`w-[20px] ml-2 bottom-5 ${selectedType === id ? "visible" : "invisible"} cursor-pointer`}>
                    <img onClick={() => setEditMode(!editMode)}
                    src={editIcon} />
                </div>
                <div className={`w-[20px] abs mr-1 bottom-5 ${selectedType === id ? "visible" : "invisible"} cursor-pointer`}>
                    <img onClick={handleDelete}
                    src={deleteIcon} />
                </div>
             </div>
            <div className={` flex items-center justify-center border-2 border-mainColor w-[100px] h-[40px] rounded-md mx-2 cursor-pointer
            ${selectedType === id ? "bg-mainColor text-white" : ""}`}
            onClick={() => setSelectedType(id)}>
                <h3 className={`${editMode === false ? "text-lg block" : "hidden"}`}>{name}</h3>
                <input
                value={newName}
                onChange={(e) => setNewName(e.target.value)} 
                onKeyDown={async (e) => {
                    if (e.key === "Enter") {
                        e.preventDefault();
                        await handleForm(e);
                    }
                }}
                className={`${editMode === true ? "block w-[90%] text-black text-center" : "hidden"}`}/>
            </div>
        </div>
    )
}

export default TypeBox;