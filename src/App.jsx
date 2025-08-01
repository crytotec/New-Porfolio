import Navbar from "./Navbar/Navbar"
import Footer from "./Footer/Footer"
import Home from "./Home/Home"
import { BrowserRouter,Route,Routes } from "react-router-dom"
function App() {
 
  return (
      <div>
         <Navbar/>
         <BrowserRouter>
         <Routes>
          <Route path='/' element={<Home/>}/>
         </Routes>
         </BrowserRouter>
         <Footer/>
        </div>
  )
}

export default App
