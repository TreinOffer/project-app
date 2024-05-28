import logo from './logo.svg'; 
import './App.css';
import { BrowserRouter,Route,Routes } from "react-router-dom";
import CursosEmpresa from './CursosEmpresa';

function App() {
  return (
   <BrowserRouter>
    <Routes>
      <Route path='/CursosEmpresa' element={<CursosEmpresa/>}/>

    </Routes>
    </BrowserRouter>
  );
}

export default App;
