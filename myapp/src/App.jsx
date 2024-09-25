import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './components/Login'
import Signup from './components/Signup'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Statebasics from './components/Statebasics'
import Counter from './components/Counter'
import Api from './components/Api'
import Use from './components/Use'
import Pokimon from './components/Pokimon'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar></Navbar>
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/state' element={<Statebasics />} />
        <Route path='/counter' element={<Counter />} />
        <Route path='/use' element={<Use/>} />
        <Route path='/api' element={<Api />} />
        <Route path='/poki' element={<Pokimon />} />
        </Routes>
     
    </>
  )
}

export default App
