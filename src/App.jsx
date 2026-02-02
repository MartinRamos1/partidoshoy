import './index.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import Game from './pages/Game'


function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/game/:team1-vs-team2/:id" element={<Game />} />
      </Routes>
    </>
  )
}

export default App
