import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Navbar from './components/layout/Navbar'
import WhatsAppButton from './components/ui/WhatsAppButton'  // ✅ corregido

import Home from './screens/Home'
import Products from './screens/Products'
import Contact from './screens/Contact'
import ProfileCardPage from './screens/PrefilesCard'

function App() {
  return (
    <BrowserRouter>
      <Navbar brand="DevMarket" />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/profile" element={<ProfileCardPage />} />
      </Routes>

      <WhatsAppButton />
    </BrowserRouter>
  )
}

export default App