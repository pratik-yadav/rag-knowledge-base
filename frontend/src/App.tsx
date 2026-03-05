import { BrowserRouter, Route, Routes } from "react-router-dom"
import Login from "./pages/Login"
import Feature from "./pages/Feature"


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />}/>
        <Route path="/features" element={<Feature />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
