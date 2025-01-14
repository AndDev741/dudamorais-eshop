import logo from "../assets/logo.png"
import NameInput from "../components/login/nameInput"
import PasswordInput from "../components/login/passwordInput"

export default function Login(){
    return(
        <div className="flex flex-col justify-between items-center h-full">
            <header className="flex items-center justify-center">
                <img src={logo}
                className="w-[350px]"/>
            </header>
            <main >
                <form className="flex flex-col items-center">
                    <div className="my-5">
                        <NameInput />
                    </div>
                    <PasswordInput/>
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