import './App.css';
import Showdown from './routes/Showdown/showdown';
import { BrowserRouter } from 'react-router-dom'
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Showdown />
      </BrowserRouter>
      
    </div>
  );
}

export default App;
