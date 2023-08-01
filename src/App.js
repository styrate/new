import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import { useState } from 'react';
import Showdown from './routes/Showdown/showdown';
import Login from './Login/Login';
import Signup from './Signup/Signup';

function App() {
  const [token, setToken] = useState(localStorage.getItem("token"));
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login setToken={setToken} />} />
          <Route path="/register" element={<Signup setToken={setToken} />} />
          <Route
            path="/"
            element={token ? <Showdown /> : <Navigate to="/login" replace />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
