import logo from './logo.svg'; 
import './App.css';
import { BrowserRouter,Routers,Router } from "react-router-dom";
import CursosEmpresa from './CursosEmpresa';
import Login from './views/Login';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/CursosEmpresa' element={<CursosEmpresa/>}/>
      <Route path='/login' element={<Login />}></Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
 