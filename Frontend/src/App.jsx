import UpNavbar from "./UpNavbar/UpNavbar"
import SideNavbar from "./SideNavbar/SideNavbar"
import Home from "./Home/Home"
import About from "./About/About"
import Menu from "./Menu/Menu"
import SignUp from "./Signup/SignUp"
//  import Login from "./Login/Login"
// import { Route, Routes } from "react-router-dom"

function App() {
  return (
    <>

     <UpNavbar/>
     <SideNavbar/>
     <Home/>
     <About/>
     <Menu/>
     <SignUp/>
     {/* <Routes>
    <Route path="Login" element={<Login/>}/>
    </Routes> */}
    </>
  )
}

export default App
