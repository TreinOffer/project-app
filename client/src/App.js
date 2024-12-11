import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Treinamentos from "./views/Treinamentos";
import Login from './views/Login/index';
import Fatura from "./views/Fatura";
import Pagamento from './views/pagamento';
import UploadCurso from './views/uploadCurso';
import CursoInfo from './views/cursoInfo';
import Tecnicos from './views/tecnicos';
import Colaboradores from "./views/colaborador/indexColab";
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
import ProtectedRoute from './protectRoute';

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path='/' element={<LadingPage />}></Route>
        <Route path='/treinos' element={<Treinamentos />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/cursoInfo' element={<CursoInfo />}></Route>
        {/* Rotas Empresa */}
          <Route path='/fatura'
            element={
              <ProtectedRoute
                element={<Fatura />}
                allowedRoles={'empresa'}/>
              }
          />
          <Route path='/pagamento'
          element={
            <ProtectedRoute
              element={<Pagamento />}
              allowedRoles={'empresa'}/>
            }
        />
        <Route path='/tecnicos'
          element={
            <ProtectedRoute
              element={<Tecnicos />}
              allowedRoles={'empresa'}/>
            }
        />
        <Route path='/tecnicos/:matricula'
          element={
            <ProtectedRoute
              element={<Tecnicos />}
              allowedRoles={'empresa'}/>
            }
        />
        <Route path='/colaboradores'
          element={
            <ProtectedRoute
              element={<Colaboradores />}
              allowedRoles={'empresa'}/>
            }
        />
        <Route path='/colaboradores/:matricula'
          element={
            <ProtectedRoute
              element={<Colaboradores />}
              allowedRoles={'empresa'}/>
            }
        />
        {/* Rotas Tecnicos */}
        <Route path='/uploadCurso'
          element={
            <ProtectedRoute
              element={<UploadCurso />}
              allowedRoles={'tecnico'}/>
            }
        />
        <Route path='/uploadTreino'
          element={
            <ProtectedRoute
              element={<UploadTreino />}
              allowedRoles={'tecnico'}/>
            }
        />
        <Route path='/graficos'
          element={
            <ProtectedRoute
              element={<Graficos />}
              allowedRoles={'tecnico'}/>
            }
        />
        
        <Route path='/test' element={<Ed />}></Route>
        <Route path='/certificado' element={<Certificado />}></Route>
        <Route path='/cadastro' element={<Cadastro />}></Route>
        <Route path='/popup' element={<PopUp />}></Route>
        <Route path='/notificacao' element={<Notificacao />}></Route>
        <Route path='/treino' element={<Treino />}></Route>
        <Route path='/confirmar' element={<Confirmacao />}></Route>
        <Route path='/redefinir' element={<Redefinir />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;