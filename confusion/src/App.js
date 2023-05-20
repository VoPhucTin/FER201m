import './App.css';
import Navigation from './components/Navigation';
import Players from './components/Players';
import Footer from './components/Footer';
import Main from './components/Main';
import Detail from './components/Detail';
import Contact from './components/Contact';
import {
  Routes,
 Route, } from "react-router-dom";

function App() {
  return (
    <div className='App'>
        <Navigation/>
        {/* <Main/> */}
        <Routes>
          <Route path='/' element={<Players/>}> 
      </Route>
        <Route path='/detail/:id' element={<Detail/>}></Route>
        <Route path='/contact' element={<Contact/>}></Route>
      </Routes>

        <Footer/>
    </div>
  );
}

export default App;
