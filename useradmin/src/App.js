import { Routes, Route } from "react-router-dom"

import Homescreen from "./Homescreen"
import LoginSrc from "./LoginSrc"
import Registration from "./Registration"


function App() {
  return (
    <div className="App">
      <Routes>
      <Route path="/" element={ <LoginSrc/> } />
      <Route path="/Registration" element={ <Registration/> } />
        <Route path="/home" element={ <Homescreen/> } />
        
        
      </Routes>
    </div>
  )
}

export default App




