import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { HashRouter, Route, Routes } from 'react-router'


import HowTo from './components/HowTo'
import Game from './components/Game'
import Strategies from './components/Strategies'

function App() {
  const [count, setCount] = useState(0)

  return (<>
    
    <HashRouter>
      <Routes>
        <Route path="/" element={<Game/>}></Route>
        <Route path="/how-to" element={<HowTo/>}></Route>
        <Route path="/strategies" element={<Strategies/>}></Route>
      </Routes>
      
    </HashRouter>
    </>
  )
}

export default App
