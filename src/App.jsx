

import './App.css'
import Navbar from './Components/Navbar'
import {Routes, Route} from 'react-router-dom';
import Home from './Pages/Home'
import Product from './Pages/Product';
import About from './Pages/About'
import  Contact from './Pages/Contact'
import  Footer from './Pages/Footer'
import Login from './Pages/Login'
import Register from './Pages/Register'
import ForgetPasswordPage from './Pages/forgot-password';
function App() {
  

  return (
    <div className="m-0 p-0 box-border bg-[#181818] text-white overflow-hidden">
      <Navbar/>

      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/product' element={<Product/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/forget-password' element={<ForgetPasswordPage/>}/>
      </Routes>
      <Footer/>

    </div>
  )
}

export default App;