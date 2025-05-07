import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './App.css';
import Header from './components/Header';
import AdminLogin from './components/AdminLogin';
import Home from './components/Home';
import Registration from './components/Registration';
import EmployeeList from './components/EmployeeList';
import UpdateEmployee from './components/UpdateEmployee';
import DeleteEmployee from './components/DeleteEmployee';
import Logout from './components/Logout';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
function App() {
  const [count, setCount] = useState(0)
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Header />}></Route>
        <Route path="/admin" element={<AdminLogin />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/register" element={<Registration />}></Route>
        <Route path="/list" element={<EmployeeList />}></Route>
        <Route path="/update/:id" element={<UpdateEmployee />}></Route>
        <Route path="/delete/:id" element={<DeleteEmployee />}></Route>
        <Route path="/logout" element={<Logout />}></Route>
      </Routes>
      
    </BrowserRouter>
  )
}

export default App;
