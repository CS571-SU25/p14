import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { HashRouter, Route, Routes } from 'react-router'


import HowTo from './components/HowTo'
import PlaySudoku from './components/gameComponents/PlaySudoku'
import Strategies from './components/stratComponents/Strategies'
import LandingScreen from './components/LandingScreen'
import OtherGames from './components/OtherGames'
import Preferences from './components/Preferences'

function App() {
  const [count, setCount] = useState(0)

  return (<>
    
    <HashRouter>
      <Routes>
        <Route path="" element={<LandingScreen/>}></Route>
        <Route path="/play-sudoku" element={<PlaySudoku/>}></Route>
        <Route path="/how-to" element={<HowTo/>}></Route>
        <Route path="/strategies" element={<Strategies/>}></Route>
        <Route path="/other-games" element={<OtherGames/>}/>
        <Route path="/preferences" element={<Preferences/>}/>
      </Routes>
      
    </HashRouter>
    </>
  )
}

export default App
