import { useEffect, useState } from "react";
import axios from "axios";
import axiosWithCredentials from "../services/axiosConfig";
import Input from "../components/admin/input"
import Header from "../components/header"
import DescriptionInput from "../components/admin/descriptionInput";
import TypesRender from "../components/admin/typesRender";
import SizeRender from "../components/admin/SizeRender";
import Preview from "../components/admin/preview";
import editProduct from "../services/product/editProduct";
import {useNavigate} from "react-router-dom"

export default function EditProduct(){
    const navigate = useNavigate();
    const productId = localStorage.getItem("productId");
    const userId = localStorage.getItem("userId")
    const [name, setName] = useState(localStorage.getItem("name") || "");
    const [price, setPrice] = useState(localStorage.getItem("price") ||"");
    const [description, setDescripton] = useState(localStorage.getItem("description") ||"");
    const [selectedType, setSelectedType] = useState(localStorage.getItem("type") ||"");
    const [sizesAndQuantities, setSizesAndQuantities] = useState([]);
    const [mainPicture, setMainPicture] = useState(null);
    const [othersPictures, setOthersPictures] = useState([]);
    const [mainPictureUrl, setMainPictureUrl] = useState(localStorage.getItem("mainPictureUrl") ||"");
    const [othersPicturesUrl, setOthersPicturesUrl] = useState([]);
    

    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [types, setTypes] = useState([]);

    useEffect(() => {
        const sizes = JSON.parse(localStorage.getItem("sizes"));
        const quantities = JSON.parse(localStorage.getItem("quantities"));
        const picturesUrl = JSON.parse(localStorage.getItem("othersPicturesUrl"));
        const sizesAndQuantitiesToEdit = [];

        for(let i = 0; i < sizes.length; i++){
            sizesAndQuantitiesToEdit.push({size: sizes[i], quantity: quantities[i]});
        }

        setSizesAndQuantities(sizesAndQuantitiesToEdit);
        if(picturesUrl){
            setOthersPicturesUrl(picturesUrl);
        }
    }, []);

    const uploadImagesToCloud = async (mainPicture, othersPictures) => {
        if(!mainPicture){
            setError("Selecione pelo menos uma imagem principal");
            return;
        }

        try{
            const fileName = encodeURIComponent(mainPicture.name);
            const response = await axiosWithCredentials.post("/product/generateS3Url", {fileName});
            const { presignedUrl, publicUrl } = response.data;
            console.log(publicUrl)

            await axios.put(presignedUrl, mainPicture, {
                headers: {
                    "Content-Type": mainPicture.type,
                },
            });

            if(!othersPictures.length > 0){
                return {newMainPictureUrl: publicUrl, newOthersPictureUrl: null}
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

            return {newMainPictureUrl: publicUrl, newOthersPictureUrl: othersPictureUrl}
        }catch(e){
            console.error(e);
            setError("Erro ao fazer upload das imagens");
            return null;
        }  
    }

    const handleEdit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        setError("");
        setSuccess("");
        
        try{
            if(mainPicture){
                const {newMainPictureUrl, newOthersPictureUrl} = await uploadImagesToCloud(mainPicture, othersPictures);
                const oldUrls = [];
                oldUrls.push(mainPictureUrl);
                if(othersPicturesUrl.length > 0){
                    othersPicturesUrl.forEach(otherPictureUrl => {
                        oldUrls.push(otherPictureUrl);
                    })
                }
                const response = await editProduct(productId, name, description, price, selectedType, sizesAndQuantities, newMainPictureUrl, newOthersPictureUrl, oldUrls);
                if(response?.success){
                    setSuccess("Produto editado com sucesso!");
                    navigate("/admin");
                }else if(response?.error){
                    setError(`Error ao editar produto`);
                }
            }else{
                const response = await editProduct(productId, name, description, price, selectedType, sizesAndQuantities ,mainPictureUrl, othersPicturesUrl, []);
                console.log(sizesAndQuantities)
                if(response?.success){
                    setSuccess("Produto editado com sucesso!");
                    navigate("/admin");
                }else if(response?.error){
                    setError(`Error ao editar produto`);
                }
            }
        }finally{
            setIsLoading(false);
        }
    }

    console.log(sizesAndQuantities);
    return(
        <div>
            <Header/>
            <h4 className="text-4xl text-center">Editar produto</h4>
            <form onSubmit={handleEdit}
            className="flex flex-col items-center justify-center mt-6 mb-12">
                <div className="flex flex-wrap justify-evenly w-full">
                    <div className="flex flex-col">
                        <Input name={"Nome"}
                        placeholder={"Shorts"}
                        type={"text"}
                        data={name}
                        setData={setName}/>

                        <Input name={"Preço"}
                        placeholder={"59,99"}
                        type={"Number"}
                        data={price}
                        setData={setPrice}/>
                    </div>

                    <div>
                        <DescriptionInput name={"Descrição"} 
                        placeholder={"Alguma descrição"}
                        data={description}
                        setData={setDescripton}/>
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
                            mainPictureUrl={mainPictureUrl}
                            othersPicturesUrl={othersPicturesUrl}
                            mainPicture={mainPicture}
                            othersPictures={othersPictures}
                            name={name}
                            description={description}
                            price={price}
                            sizes={sizesAndQuantities}/>
                        </div>
                    </div>
                    <div className="flex flex-col items-center">
                        <p className="text-red-600 text-2xl text-center">{error}</p>
                        <p className="text-blue-600 text-2xl text-center">{success}</p>
                        <input type="submit"
                        value={"Editar produto"}
                        className="bg-mainColor p-2 rounded-md text-white hover:scale-105 cursor-pointer" />
                        <p className={`${isLoading ? "text-blue-600 text-2xl text-center animate-pulse" : "hidden"}`}>Enviando produto...</p>
                    </div>
                </div>
            </form>
        </div>
    )
}