
import {  Route, Routes } from 'react-router-dom';
import Home from './pages/Home.jsx';


function App() {

  return (
   <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/about" element={<h1>About</h1>} />
      <Route path="/dashboard" element={<h1>Dashboard</h1>} />
   </Routes>
  )
}

export default App
