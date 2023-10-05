import { Routes, Route ,Navigate  } from "react-router-dom"


import Homescreen from "./Homescreen"
import LoginSrc from "./LoginSrc"
import Registration from "./Registration"
import GoogleAuth from "./comonets/GoogleAuth";








function App() {

 



  return (
    <div>
 

     <Routes>
      <Route path="/" element={ <LoginSrc/> } />
      <Route path="/Registration" element={ <Registration/> } />
        <Route path="/home" element={ <Homescreen/> } />
      </Routes> 
    </div>
  )
}

export default App




