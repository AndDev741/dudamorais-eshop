import { useState } from "react"
import logo from "../assets/logo.png"
import NameInput from "../components/login/nameInput"
import PasswordInput from "../components/login/passwordInput"
import makeLogin from "../services/login/loginRequest"
import {useNavigate} from "react-router-dom";

export default function Login(){
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const loginFormHandle = async (e) => {
        e.preventDefault();
        const response = await makeLogin(username, password);
        if(response?.success){
            navigate("/admin")
        }else{
            alert("Erro ao fazer login")
        }
    }

    return(
        <div className="flex flex-col justify-between items-center h-full">
            <header className="flex items-center justify-center">
                <img src={logo}
                className="w-[350px]"/>
            </header>
            <main >
                <form onSubmit={loginFormHandle} 
                className="flex flex-col items-center">
                    <div className="my-5">
                        <NameInput username={username} setUsername={setUsername} />
                    </div>
                    <PasswordInput password={password} setPassword={setPassword} />
                    <div>
                        <input type="submit"
                        value={'Entrar'}
                        className="border-2 bg-mainColor rounded-md px-5 py-2 text-white text-xl mt-4 cursor-pointer hover:scale-105" />
                    </div>
                </form>
            </main>
        </div>
    )
}