<<<<<<< HEAD
import logo from './logo.svg'; 
import { BrowserRouter,Routes,Route } from "react-router-dom";
import CursosEmpresa from './views/CursosEmpresa';
import Login from './views/Login';
import NavBar from './views/navBar';
import CursoInfo from './views/cursoInfo';
=======
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CursosEmpresa from "./views/CursosEmpresa";
import Login from './views/Login';
import Fatura from "./views/Fatura";
import Pagamento from './views/pagamento';
>>>>>>> 5c103a4548e1deca8b160c786e42ac945c146fcb

function App() {
  return (
    <BrowserRouter>
<<<<<<< HEAD
    <Routes>
      <Route path='/CursosEmpresa' element={<CursosEmpresa/>}/>
      <Route path='/login' element={<Login />}></Route>
      <Route path='/navBar' element={<NavBar />}></Route>
      <Route path='/cursoInfo' element={<CursoInfo />}></Route>
    </Routes>
=======
      <Routes>
        <Route path='/cursosEmpresa' element={<CursosEmpresa />} />
        <Route path='/login' element={<Login />}></Route>
        <Route path='/fatura' element={<Fatura />} />
        <Route path='/login' element={<Login />}></Route>
        <Route path='/pagamento' element={<Pagamento />} />
        <Route path='/login' element={<Login />}></Route>
      </Routes>
>>>>>>> 5c103a4548e1deca8b160c786e42ac945c146fcb
    </BrowserRouter>
  );
}

<<<<<<< HEAD
export default App;
=======
export default App;
>>>>>>> 5c103a4548e1deca8b160c786e42ac945c146fcb
