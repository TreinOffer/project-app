import logo from './logo.svg';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CursosEmpresa from "./views/CursosEmpresa";
import Login from './views/Login';
import Fatura from "./views/Fatura";
import Pagamento from './views/pagamento';
<<<<<<< HEAD
import FormularioEmpresa from './views/FormularioEmpresa';
=======
import UploadCurso from './views/uploadCurso';
import CursoInfo from './views/cursoInfo';
import NavBar from './views/navBar';
>>>>>>> 3dc4b283dc40ab8dbe2c70fc20c8045a38096783

function App() {
  return (
    <BrowserRouter>
<<<<<<< HEAD
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
=======
    <Routes>
      <Route path='/CursosEmpresa' element={<CursosEmpresa/>}/>
      <Route path='/login' element={<Login />}></Route>
      <Route path='/navBar' element={<NavBar />}></Route>
      <Route path='/cursoInfo' element={<CursoInfo />}></Route>
      <Route path='/fatura' element={<Fatura />}></Route>
      <Route path='/pagamento' element={<Pagamento />}></Route>
      <Route path='/uploadCurso' element={<UploadCurso/>}></Route>
    </Routes>
>>>>>>> 3dc4b283dc40ab8dbe2c70fc20c8045a38096783
    </BrowserRouter>
  );
}

export default App;
