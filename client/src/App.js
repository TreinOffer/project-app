import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CursosEmpresa from "./views/CursosEmpresa";
import Login from './views/Login';
import Fatura from "./views/Fatura";
import Pagamento from './views/pagamento';
import FormularioEmpresa from './views/FormularioEmpresa';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/cursosEmpresa' element={<CursosEmpresa />} />
        <Route path='/login' element={<Login />}></Route>
        <Route path='/fatura' element={<Fatura />} />
        <Route path='/login' element={<Login />}></Route>
        <Route path='/pagamento' element={<Pagamento />} />
        <Route path='/login' element={<Login />}></Route>
        <Route path='/formularioEmpresa' element={<FormularioEmpresa />} />
        <Route path='/login' element={<Login />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
