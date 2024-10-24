import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Treinamentos from "./views/Treinamentos";
import Login from './views/Login';
import Fatura from "./views/Fatura";
import Pagamento from './views/pagamento';
import UploadCurso from './views/uploadCurso';
import CursoInfo from './views/cursoInfo';
import Tecnicos from './views/tecnicos';
import UploadTreino from './views/uploadTreino/uploadPainel';
import Ed from './views/test/ed';
import Graficos from './views/graficos/estatisticas';
import LadingPage from './views/lading-page/lading';
import Certificado from './views/certificado/certi';
import Cadastro from "./views/cadastro/cadastrar";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LadingPage />}></Route>
        <Route path='/treinos' element={<Treinamentos/>}/>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/cursoInfo' element={<CursoInfo />}></Route>
        <Route path='/fatura' element={<Fatura />}></Route>
        <Route path='/pagamento' element={<Pagamento />}></Route>
        <Route path='/uploadCurso' element={<UploadCurso/>}></Route>
        <Route path='/tecnicos' element={<Tecnicos/>}></Route>
        <Route path='/tecnicos/:matricula' element={<Tecnicos/>}></Route>
        <Route path='/uploadTreino' element={<UploadTreino/>}></Route>
        <Route path='/test' element={<Ed/>}></Route>
        <Route path='/graficos' element={<Graficos />}></Route> 
        <Route path='/certificado' element={<Certificado />}></Route>      
        <Route path='/cadastro' element={<Cadastro />}></Route>           
      </Routes>
    </BrowserRouter>
  );
}

export default App;