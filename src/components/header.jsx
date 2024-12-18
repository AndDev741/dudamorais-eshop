import logo from '../assets/logo.png';
import favorite from "../assets/favorite.svg";

function Header(){
    return(
        <header className='flex items-center justify-between p-3'>
            <img src={logo} 
            className='w-[291px]'
            alt='Logo com uma borboleta'/>
            <div className='flex flex-col items-center justify-start mb-2 mr-3 cursor-pointer'>
                <img src={favorite}
                className='w-[45px]'
                alt='ícone de coração' />
                <p>Favoritos</p>
            </div>
        </header>
    )
}

export default Header;