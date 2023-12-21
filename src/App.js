import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import SignupCompany from './pages/SignupCompany';
import SignupIndividual from './pages/SignupIndividual';
import Dashboard from './pages/Dashboard';
import Sell from './pages/Sell';
import AddProperties from './pages/AddProperties';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="login" element={<Login />} />
        <Route exact path="signup" element={<Signup />} />
        <Route exact path="signup/company" element={<SignupCompany />} />
        <Route exact path="signup/individual" element={<SignupIndividual />} />
        <Route exact path="dashboard" element={<Dashboard />} />
        <Route exact path="sell" element={<Sell />} />
        <Route exact path="add-properties" element={<AddProperties />} />


      </Routes>
    </BrowserRouter>
  );
}

export default App;
