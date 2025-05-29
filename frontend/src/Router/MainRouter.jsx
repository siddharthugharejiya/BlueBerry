


import { Route, Routes } from 'react-router-dom'
import Home from '../Componets/Home'
import Register from '../Componets/Register'
import Login from '../Componets/Login'
import AdminPanel from '../Componets/AdminPanel'
import Product_add from '../Componets/Product_add'


function MainRouter() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/register' element={<Register />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/admin' element={<AdminPanel />}></Route>
        <Route path='/product' element={<Product_add />}></Route>


      </Routes>
    </div>
  )
}

export default MainRouter
