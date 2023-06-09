import { Routes, Route, Navigate } from 'react-router-dom';

// Pages
import Login from './pages/Login';
import Home from './pages/Home';
import Register from './pages/Register';

// Hooks
import ScrollToTop from './hooks/ScrollToTop';

function App() {
  return (
    <ScrollToTop>
      <Routes>
        <Route path='/' element={<Navigate to='/login' />} />
        <Route path='/login' element={<Login />} />
        <Route path='/home' element={<Home />} />
        <Route path='/register' element={<Register />} />
      </Routes>
    </ScrollToTop>
  );
}

export default App;
