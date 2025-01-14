import { Routes, Route } from 'react-router';
import Home from './pages/home';
import Admin from './pages/admin';
import Login from './pages/login';


function App() {
  return (
    <div className="font-mainFont">
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path='/admin' element={<Admin/>} />
        <Route path='/login' element={<Login/>} />
      </Routes>
    </div>
  );
}

export default App;
