import { useEffect, useState } from "react";
import ShortcutBox from "./shortcutBox";
import getTypes from "../../services/product/getTypes";

function Shortcuts({types, setTypes, setFilteredProducts, products}){
    const [selected, setSelected] = useState("s")
    useEffect(() => {
        async function getData(){
            const typesReturn = await getTypes();
            setTypes(typesReturn);
        }

        getData();
    }, [setTypes]);                                    
    return(
        <div className="flex flex-wrap items-center justify-evenly w-full">
            {types ?
            types.map((type, index) => (
                <ShortcutBox name={type.name}
                id={type.id} key={index}
                setFilteredProducts={setFilteredProducts}
                products={products}
                selected={selected}
                setSelected={setSelected} />
            )) : ""}
        </div>
    )
}

export default Shortcuts;