import FeaturedMovie from './FeaturedMovie'
import Footer from './Footer'
import Head from './Head'
import MovieCard from './MovieCard'
import { Routes, Route } from 'react-router-dom'
import Landing from './pages/Landing'
import About from './pages/About'
import CardItem from './pages/CardItem'
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/card/:id" element={<CardItem />} />
    </Routes>
  )
}
export default App
