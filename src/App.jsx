import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
// Persnol Imports
import { Home, Auth, Orders } from './pages'
import Header from './components/shared/Header'


export default function App() {
  return (
    <>
      <Router>
       <Header /> 
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/orders" element={<Orders />} />
        </Routes>
      </Router>
    </>
  )
}

