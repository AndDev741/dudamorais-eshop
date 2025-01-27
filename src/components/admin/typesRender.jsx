import { useEffect } from "react";
import getTypes from "../../services/product/getTypes";
import NewTypeBox from "./NewTypeBox";
import TypeBox from "./typeBox";


function TypesRender({types, setTypes, userId, selectedType, setSelectedType}){
    
    useEffect(() => {
        async function getData(){
            const response = await getTypes();
            if(response){
                setTypes(response);
            }
        }
        getData();
    }, [userId, setTypes])


    return(
        <div className="flex flex-col items-start overflow-x-auto w-full mt-2">
            <div className="flex items-center justify-evenly">
            {types?.length >= 0
            ? types.map((type) => (
                <TypeBox key={type.id}
                name={type.name} 
                id={type.id} 
                selectedType={selectedType} 
                setSelectedType={setSelectedType} 
                setTypes={setTypes}
                userId={userId}/>
            )) : 
            (<h1>Crie tipos para vincular em um produto!</h1>)}
                
                <NewTypeBox setTypes={setTypes} userId={userId} />
            </div>
        </div>
    )
}

export default TypesRender;