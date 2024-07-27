import './App.css'
import {BrowserRouter, Routes,Route} from 'react-router-dom'
import Home from './Components/Home/Home'
import About from './Components/About/About'
import Login from './Components/Login/Login'
import SignUp from './Components/SignUp/SignUp'
import Profile from './Components/Profile/Profile'
import Header from './Components/Navbar/Header'
function App() {

  return (
    <>
      <BrowserRouter >
      <Header />
       <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/about' element={<About />} />
        <Route path='/login' element={<Login />} />
        <Route path='/sign-up' element={<SignUp />} />
       </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
