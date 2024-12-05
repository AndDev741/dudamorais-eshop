import { Routes, Route } from 'react-router';
import Home from './pages/home';


function App() {
  return (
    <div className="font-mainFont">
      <Routes>
        <Route path="/" element={<Home/>} />
      </Routes>
    </div>
  );
}

export default App;
