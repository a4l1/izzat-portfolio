import Header from './Components/Header/Header';
import './App.css';
import Main from './Components/Main/Main';
import Footer from './Components/footer/Footer';
import { useContext } from 'react';
import { AuthContext } from './Components/Main/AuthContext';
import { Route, Routes } from 'react-router-dom';
import { Login } from './Components/Main/Login/Login';
import { Singlepage } from './Components/Main/SinglePage/Singlepage';
import Eror from './Components/Main/Eror/Eror';

function App() {
  const {  token } = useContext(AuthContext)
  return (
 <>
 {
 
  token ? (
    <div >
 
  <Header />

    <Routes>
      <Route path='/' element={<Main />} />
      <Route path='/buy' element={<Singlepage />} />
    </Routes>
  <Footer />

  
  
  
 </div>
  ):(
    <Routes >
      <Route path='/' element={<Login />}/>
      <Route path='*' element={<Eror />}/>
    </Routes>
  )
 }
 </>
  );
}

export default App;
