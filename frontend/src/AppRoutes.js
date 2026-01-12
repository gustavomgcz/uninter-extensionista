import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from 'components/Header'
import './index.css'
import Footer from 'components/Footer'
import Home from 'pages/Home'
import Actions from 'pages/Actions'
import ScrollToTop from 'components/ScrollToTop'
import Contact from 'pages/Contact'

function AppRoutes() {
  return (
    <div className="App">
      <BrowserRouter>
      <ScrollToTop />
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/acoes" element={<Actions />} />
          <Route path="/contato" element={<Contact />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default AppRoutes
