import { Routes, Route } from 'react-router';
import Home from './pages/home';
import Admin from './pages/admin';
import Login from './pages/login';
import EditProduct from './pages/editProduct';


function App() {
  return (
    <div className="font-mainFont">
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path='/admin' element={<Admin/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/editProduct' element={<EditProduct/>} />
      </Routes>
    </div>
  );
}

export default App;
