import logo from './logo.svg'; 
import { BrowserRouter,Routes,Route } from "react-router-dom";
import CursosEmpresa from './views/CursosEmpresa';
import Login from './views/Login';
import NavBar from './views/navBar';
import CursoInfo from './views/cursoInfo';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/CursosEmpresa' element={<CursosEmpresa/>}/>
      <Route path='/login' element={<Login />}></Route>
      <Route path='/navBar' element={<NavBar />}></Route>
      <Route path='/cursoInfo' element={<CursoInfo />}></Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;