import './App.css';
import Navbar from './Navbar/Navbar';
import Home from './Pages/Home';
import { Route, Routes } from 'react-router-dom';
import SelectTemplate from './Pages/SelectTemplate';
import About from './Pages/About';

import Template1 from './Pages/Templates/Template1';
import Template2 from './Pages/Templates/Template2';
import Template3 from './Pages/Templates/Template3';
import Template4 from './Pages/Templates/Template4';
import Template5 from './Pages/Templates/Template5';

function App() {
  return (

  

    <div className="App">
        
        < Navbar />

      <Routes>

          <Route path="/" element={<Home/>} />
          <Route path="/select-template" element={<SelectTemplate/>} />
          <Route path="/about" element={<About/>} />

          <Route path="/template1" element={<Template1/>} />
          <Route path="/template2" element={<Template2/>} />
          <Route path="/template3" element={<Template3/>} />
          <Route path="/template4" element={<Template4/>} />
          <Route path="/template5x" element={<Template5/>} />

      </Routes>        
    
      
    </div>
  );
}

export default App;
