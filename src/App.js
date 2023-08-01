import './App.css';
import Showdown from './routes/Showdown/showdown';
import Login from './Login/Login';
import Signup from './Signup/Signup';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Signup />} />
          <Route path='/' element={<Showdown />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
