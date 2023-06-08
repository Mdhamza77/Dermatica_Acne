import NavBar from './components/layouts/header/NavBar';
import Footer from './components/layouts/footer/Footer';
import Cards from './components/home_Page/cards/Cards';
import { Routes, Route } from 'react-router-dom';
import Appointment from './components/form_page/Appointment';
function App() {
  return (
    <div className="App">
      <NavBar />
      <Cards />
      <Footer />
      <div className='router'>
        <Routes>
           <Route path='/appointment' element={<Appointment />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
