import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import RetroPortfolio from './components/RetroPortfolio'
import Projects from './components/Projects'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<RetroPortfolio />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </Router>
  )
}

export default App
