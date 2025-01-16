import Header from "../components/header";
import Input from "../components/admin/input";
import DescriptionInput from "../components/admin/descriptionInput";
import TypesRender from "../components/admin/typesRender";
import SizeRender from "../components/admin/SizeRender";
import Preview from "../components/admin/preview";
import verifyAuthentication from "../services/verifyAuth";
import { useEffect } from "react";
import { useNavigate } from "react-router";
function Admin(){
    const navigate = useNavigate();
    useEffect(() =>{
        async function verifyAuth(){
            const authenticated = await verifyAuthentication();
            if(!authenticated?.success){
                navigate("/login");
            }
        }
        verifyAuth();

        
    })
    return(
        <>
            <Header/>
            <h1 className="text-4xl font-semibold text-center">Criar Produto</h1>
            <form className="flex flex-col items-center justify-center mt-6 mb-12">
                <div className="flex justify-evenly w-full">
                    <div className="flex flex-col">
                        <Input name={"Nome"}
                        placeholder={"Shorts"}
                        type={"text"}
                        />
                        <Input name={"Preço"}
                        placeholder={"59,99"}
                        type={"Number"} />
                    </div>
                    
                    <div>
                        <DescriptionInput name={"Descrição"} />
                    </div>
                </div>

                <div className="flex flex-col items-center mt-4 w-full">
                    <h3 className="text-xl">Tipo</h3>
                    <TypesRender/>
                </div>

                <div className="flex flex-col items-center mt-4 w-full">
                    <h3 className="text-xl">Tamanhos e Quantidades</h3>
                    <SizeRender/>
                </div>


                <div className="flex items-center justify-evenly mt-4 w-full">
                    <div className="flex flex-col">
                        <h3 className="text-xl">Foto principal</h3>
                        <div className="text-center text-white w-[125px] py-1 mt-1 bg-mainColor rounded-md cursor-pointer">Carregar foto</div>
                    </div>
                    <div className="flex flex-col">
                        <h3 className="text-xl">Demais fotos</h3>
                        <div className="text-center text-white w-[125px] py-1 mt-1 bg-mainColor rounded-md cursor-pointer">Carregar fotos</div>
                    </div>
                </div>

                <div className="flex flex-col mt-4 w-full">
                    <h3 className="ml-3 text-xl">Preview:</h3>
                    <div className="ml-3 mt-2">
                        <Preview 
                        name={"Nome"}
                        description={"Descrição"}
                        price={55.99}
                        sizes={[36,38,40]}
                        quantity={8}/>
                    </div>
                </div>


            </form>
        </>
    )
}

export default Admin;