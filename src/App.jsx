import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
//import NavComp from './components/navComp';
import Landing from './pages/Landing';
import Login from './pages/Login';

const App = () => {
  return (
    <Router>
      <NavComp />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/products" element={<Login />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </Router>
  );
};

export default App;