import './App.css';
import Navbar from './Navbar/Navbar';
import Home from './Pages/Home';
import { Route, Routes } from 'react-router-dom';
import SelectTemplate from './Pages/SelectTemplate';
import About from './Pages/About';

function App() {
  return (

  

    <div className="App">
        
        < Navbar />

      <Routes>

          <Route path="/" element={<Home/>} />
          <Route path="/select-template" element={<SelectTemplate/>} />
          <Route path="/about" element={<About/>} />

      </Routes>        
    
      
    </div>
  );
}

export default App;
