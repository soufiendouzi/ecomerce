import { Route, Routes } from 'react-router-dom';
import './App.css';
import NavBar from './Component/NavBar';
import {Home , Login , Register , Profile , Error } from "./Pages"
function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route path='/register' element={<Register />}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='profile' element={<Profile/>}/>
        <Route path='/*' element={<Error/>}/>

      </Routes>
     
    </div>
  );
}

export default App;
