import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
// Personal Imports
import { Home, Auth, Orders, Tables } from './pages'
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
          <Route path="/tables" element={<Tables />} />
          {/* <Route path="/more" element={<More />} /> */}
        </Routes>
      </Router>
    </>
  )
}

