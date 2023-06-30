

import Login from './pages/Login';
import Signup from './pages/Signup'
import Otp from './pages/Otp';
import Chatbot from './pages/Chatbot';
import Headers from './components/Headers';
import { Routes, Route } from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';

function App() {
  return (
    <>
      <Headers />
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/chatbot' element={<Chatbot />} />
        <Route path='/otp' element={<Otp />} />
      </Routes>
    </>
  );
}

export default App;
