export default function PasswordInput({password, setPassword}){
    return (

        <label htmlFor="password" className="flex flex-col items-center text-xl">
            Senha:
            <input 
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            type="password"
            name="password"
            id="password"
             className="border-2 border-mainColor rounded-md pl-1"/>
        </label>
    )
}