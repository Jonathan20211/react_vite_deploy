import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'
import Header from './components/header/Header';
import Home from './pages/home/Home';
import Historia from './pages/historia/Historia';
import Perfil from './pages/perfil/Perfil';
import Contato from './pages/contato/Contato';
import Servico from './pages/servico/Servico';
import Footer from './components/footer/Footer';

function App() {
  return (
    <>
      <div className='App'>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route>
              <Route path='/home' element={<Home />} />
              <Route path='/historia' element={<Historia />} />
              <Route path='/perfil' element={<Perfil />} />
              <Route path='/contato' element={<Contato />} />
              <Route path='/servico' element={<Servico />} />
            </Route>
          </Routes>
          <Footer />
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
