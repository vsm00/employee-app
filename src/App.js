import Create from './components/create/Create';
import Read from './components/read/Read';
import {BrowserRouter, Routes, Route,Link } from 'react-router-dom'
import image from "./bgimg1.jpeg"
import './App.css';

function App() {
  return (
    <div className='main' style={{ backgroundImage:`url(${image})`,backgroundRepeat:"no-repeat",backgroundSize:"cover", 
    height:700,width:1500}}>
        <div id='title'>
          <h2>Employee Dashboard</h2>
        </div>
        <div class='buttons'> 
          <BrowserRouter>
          <div class='sty'>
            <Link to='/'>
            <button class="btn btn-outline-dark me-2" type="button">Home</button>
            </Link>
            <Link to='/Create'>
            <button class="btn btn-sm btn-outline-secondary" type="button">Employee form</button>
            </Link>
            </div>
            <Routes>
              <Route path='/Create' element={<Create />} />
              <Route path='/' element={<Read />} />
            </Routes>
          </BrowserRouter>
          </div>
      </div>
  );
}

export default App;