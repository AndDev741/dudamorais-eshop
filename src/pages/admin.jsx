import Header from "../components/header";
import Input from "../components/admin/input";
import DescriptionInput from "../components/admin/descriptionInput";
import TypesRender from "../components/admin/typesRender";
import SizeRender from "../components/admin/SizeRender";
import Preview from "../components/admin/preview";
import verifyAuthentication from "../services/verifyAuth";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import axiosWithCredentials from "../services/axiosConfig";
import axios from "axios";
import createProduct from "../services/product/createProduct";

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

    
    const userId = localStorage.getItem("userId");
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescripton] = useState("");
    const [selectedType, setSelectedType] = useState("");
    const [sizesAndQuantities, setSizesAndQuantities] = useState([]);
    const [mainPicture, setMainPicture] = useState(null);
    const [othersPictures, setOthersPictures] = useState([]);
    const [mainPictureUrl, setMainPictureUrl] = useState("");
    const [othersPicturesUrl, setOthersPicturesUrl] = useState("");

    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");
    const [types, setTypes] = useState([]);

    const uploadImagesToCloud = async (mainPicture, othersPictures) => {
        if(!mainPicture){
            setError("Selecione pelo menos uma imagem principal");
            return;
        }

        try{
            const fileName = encodeURIComponent(mainPicture.name);
            const response = await axiosWithCredentials.post("/product/generateS3Url", {fileName});
            const { presignedUrl, publicUrl } = response.data;

            await axios.put(presignedUrl, mainPicture, {
                headers: {
                    "Content-Type": mainPicture.type,
                },
            });

            setMainPictureUrl(publicUrl); 

            if(!othersPictures.length > 0){
                return;
            }

            const othersPictureUrl = [];

            for(let i = 0; i < othersPictures.length; i++){
                const picture = othersPictures[i];
                const fileName = encodeURIComponent(picture.name);
                const response = await axiosWithCredentials.post("/product/generateS3Url", {fileName});
                const { presignedUrl, publicUrl } = response.data;
    
                await axios.put(presignedUrl, picture, {
                    headers: {
                        "Content-Type": picture.type,
                    },
                });

                othersPictureUrl.push(publicUrl);
            }
            setOthersPicturesUrl(othersPictureUrl);
        }catch(e){
            console.error(e);
        }
        
        
    }

    const handleCreateProduct = async (e) => {
        e.preventDefault();
        setError("");
        setSuccess("");

        await uploadImagesToCloud(mainPicture, othersPictures);

        const response = await createProduct(userId, name, description, price, selectedType, sizesAndQuantities, mainPictureUrl, othersPicturesUrl);   

        if(response?.error){
            setError(response.error);
        }else if(response?.success){
            setName("");
            setDescripton("");
            setPrice("");
            setSelectedType("");
            setSizesAndQuantities([]);
            setMainPictureUrl("");
            setOthersPicturesUrl([]);
            setSuccess(response.success);
        }
    }

    return(
        <>
            <Header/>
            <h1 className="text-4xl font-semibold text-center">Criar Produto</h1>
            <form onSubmit={handleCreateProduct}
            className="flex flex-col items-center justify-center mt-6 mb-12">
                <div className="flex flex-wrap justify-evenly w-full">
                    <div className="flex flex-col">
                        <Input name={"Nome"}
                        placeholder={"Shorts"}
                        type={"text"}
                        data={name}
                        setData={setName}
                        />
                        <Input name={"Preço"}
                        placeholder={"59,99"}
                        type={"Number"}
                        data={price}
                        setData={setPrice} />
                    </div>
                    
                    <div>
                        <DescriptionInput name={"Descrição"} 
                        placeholder={"Alguma descrição"}
                        data={description}
                        setData={setDescripton}/>
                    </div>
                </div>

                <div className="flex flex-col items-center mt-4 w-full">
                    <h3 className="text-xl">Tipo</h3>
                   
                    <TypesRender types={types} 
                    setTypes={setTypes} 
                    userId={userId}
                    selectedType={selectedType}
                    setSelectedType={setSelectedType}/>
                </div>

                <div className="flex flex-col items-center mt-4 w-full">
                    <h3 className="text-xl">Tamanhos e Quantidades</h3>
                    <SizeRender sizesAndQuantities={sizesAndQuantities}
                    setSizesAndQuantities={setSizesAndQuantities}/>
                </div>


                <div className="flex items-center justify-evenly mt-4 w-full">
                    <div className="flex flex-col">
                        <h3 className="text-xl">Foto principal</h3>
                        
                        <div className="text-center text-white py-1 mt-1 bg-mainColor rounded-md cursor-pointer">
                            <label htmlFor="file_upload"
                            className="cursor-pointer">Carregar foto</label>
                            <input type="file"
                            onChange={(e) => setMainPicture(e.target.files[0])}
                            id="file_upload"
                            accept="image/*"
                            className="w-[125px] bg-mainColor hidden" />
                        </div>
                    </div>
                    <div className="flex flex-col">
                        <h3 className="text-xl">Demais fotos</h3>
                        <div className="text-center text-white py-1 mt-1 bg-mainColor rounded-md cursor-pointer">
                            <label htmlFor="file_upload2"
                            className="cursor-pointer">Carregar fotos</label>
                            <input type="file"
                            onChange={(e) => setOthersPictures(e.target.files)}
                            id="file_upload2"
                            multiple
                            accept="image/*"
                            className="w-[125px] bg-mainColor hidden" />
                        </div>
                    </div>
                </div>

                <div className="flex flex-col mt-4 w-full">
                    <h3 className="ml-1 text-xl">Preview:</h3>
                    <div className="ml-1 mt-2">
                        <Preview 
                        mainPicture={mainPicture}
                        othersPictures={othersPictures}
                        name={name}
                        description={description}
                        price={price}
                        sizes={sizesAndQuantities}/>
                    </div>
                </div>
                <p className="text-red-600 text-2xl text-center">{error}</p>
                <p className="text-blue-600 text-2xl text-center">{success}</p>
                <input type="submit"
                value={"Criar produto"}
                className="bg-mainColor p-2 rounded-md text-white hover:scale-105 cursor-pointer" />

            </form>
        </>
    )
}

export default Admin;