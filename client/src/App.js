import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CursosEmpresa from "./views/CursosEmpresa";
import Login from './views/Login';
import Fatura from "./views/Fatura";
import Pagamento from './views/pagamento';
import UploadCurso from './views/uploadCurso';
import CursoInfo from './views/cursoInfo';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/CursosEmpresa' element={<CursosEmpresa/>}/>
      <Route path='/login' element={<Login />}></Route>
      <Route path='/cursoInfo' element={<CursoInfo />}></Route>
      <Route path='/fatura' element={<Fatura />}></Route>
      <Route path='/pagamento' element={<Pagamento />}></Route>
      <Route path='/uploadCurso' element={<UploadCurso/>}></Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
