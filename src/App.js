import { Routes, Route } from 'react-router';
import Home from './pages/home';
import Admin from './pages/admin';


function App() {
  return (
    <div className="font-mainFont">
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path='/admin' element={<Admin/>} />
      </Routes>
    </div>
  );
}

export default App;
