import Navbar from './components/navbar/index'
import {BrowserRouter , Route , Routes} from 'react-router-dom'
import Create from './components/Create/index'
import Read from './components/Read/index'

import './App.css';

function App() {
  return (
    <div className="App">
     
      <BrowserRouter>
      <Navbar />
        <Routes>

          <Route exact path="/" element = {<Create />} />
          <Route exact path="/all" element = {<Read />} />
          
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
