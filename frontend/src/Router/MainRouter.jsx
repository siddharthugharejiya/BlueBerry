


import { Route, Routes } from 'react-router-dom'
import Home from '../Componets/Home'


function MainRouter() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />}></Route>

      </Routes>
    </div>
  )
}

export default MainRouter
