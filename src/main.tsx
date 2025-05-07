import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Signin from './components/Signin'
import './index.css'
import App from './App.tsx'
import Anggota from './components/Anggota'
import Proker from './components/Proker'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Router>
    <Routes>
        <Route path="/" element={<App />} />
        <Route path="/Signin" element={<Signin />} />
        <Route path="/Proker" element={<Proker />} />
        <Route path="/Anggota" element={<Anggota />} />
      </Routes>
    </Router>
  </StrictMode>,
)
