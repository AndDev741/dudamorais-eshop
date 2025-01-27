import { useState } from "react";

function ShortcutBox({name, id, setFilteredProducts, products, selected, setSelected}){
    const handleFilter = () => {
        if(selected === id){
            setFilteredProducts([]);
            setSelected("");
        }else{
            if(products?.length > 0){
                const typesFiltered = products.filter(product => {
                    return product.type.id.includes(id);
                });
                setFilteredProducts(typesFiltered);
                setSelected(typesFiltered[0].type.id)
            }
        }
    }
    return(
        <div onClick={handleFilter}
        className={`${selected === id ? "bg-mainColor text-white" : ""} flex items-center justify-center min-w-[100px] h-[40px] border-solid border-2 border-mainColor rounded-md cursor-pointer hover:bg-ligthBrown mt-1`}>
            <h3 className="text-lg">{name}</h3>
        </div>
    )
}

export default ShortcutBox;