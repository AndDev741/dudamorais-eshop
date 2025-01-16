export default function NameInput({username, setUsername}){
    return (

        <label htmlFor="username" className="flex flex-col items-center text-xl">
            Usuário:
            <input 
            onChange={(e) => setUsername(e.target.value)}
            value={username}
            name="username"
            id="username"
             className="border-2 border-mainColor rounded-md pl-1"/>
        </label>
    )
}