import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Treinamentos from "./views/Treinamentos";
import Login from './views/Login/index';
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
import PopUp from "./components/popUp/popUp";
import Notificacao from './components/notificacao/notificacao.module';
import Treino from './views/tela-treino/telaModule';
import Confirmacao from './components/confirmar/confirmacao';
import Redefinir from './components/resetSenha/reset';
import UpCapa from './components/uparTreino/uploadsTreino';
import Youtuber from './components/popUpurl/uparUrl';
// import ProtectedRoute from './protectRoute';

  function App() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<LadingPage />}></Route>
          <Route path='/treinos' element={<Treinamentos />}></Route>
          <Route path='/login' element={<Login />}></Route>
          <Route path='/cursoInfo' element={<CursoInfo />}></Route>
          <Route path='/uparCapa' element={<UpCapa />}></Route>
          <Route path='/fatura'element={ <Fatura />} />
          <Route path='/pagamento' element={<Pagamento />}></Route>
          <Route path='/uploadCurso' element={<UploadCurso />}></Route>
          <Route path='/tecnicos' element={<Tecnicos />}></Route>
          <Route path='/tecnicos/:matricula' element={<Tecnicos />}></Route>
          <Route path='/uploadTreino' element={<UploadTreino />}></Route>
          <Route path='/test' element={<Ed />}></Route>
          <Route path='/graficos' element={<Graficos />}></Route>
          <Route path='/certificado' element={<Certificado />}></Route>
          <Route path='/cadastro' element={<Cadastro />}></Route>
          <Route path='/popup' element={<PopUp />}></Route>
          <Route path='/notificacao' element={<Notificacao />}></Route>
          <Route path='/treino' element={<Treino />}></Route>
          <Route path='/confirmar' element={<Confirmacao />}></Route>
          <Route path='/redefinir' element={<Redefinir />}></Route>
          <Route path='/popUPurl' element={<Youtuber />}></Route>
        </Routes>
      </BrowserRouter>
    );
  }

  export default App;