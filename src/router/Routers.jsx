import { Routes, Route, Navigate } from "react-router-dom"
import Home from '../views/Home'
import Contact from "../views/Contact"

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to={'/home'} />} />
      <Route path="/home" element={<Home/>}/>
      <Route path="/contact" element={<Contact/>}/>
    </Routes>
  )
}

export default Routers