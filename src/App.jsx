import { HashRouter, Routes, Route } from 'react-router-dom'
import Home from './components/pages/Home.jsx'
import About from './components/pages/About.jsx'
import Services from './components/pages/Services.jsx'
import Contact from './components/pages/Contact.jsx'

export default function App() {
  return (
    <HashRouter>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
      </Routes>
    </HashRouter>
  )
}