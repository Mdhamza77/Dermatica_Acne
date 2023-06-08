import NavBar from './components/layouts/header/NavBar';
import { Routes, Route } from 'react-router-dom';
import Appointment from './components/form_page/Appointment';
import HomePage from './components/home_Page/Home_Page';
function App() {
  return (
    <div className="App">
      <NavBar/>
      <div className='router'>
        <Routes>
           <Route path='/appointment' element={<Appointment />} />
           <Route path='' element={<HomePage/>} />

        </Routes>
      </div>
    </div>
  );
}

export default App;
