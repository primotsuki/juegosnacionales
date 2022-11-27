import './App.css'

import Header from './components/HeaderMenu/Header';
import HomePage from './pages/Home';
import Disciplines from './pages/Disciplines';
import Footer from './pages/Footer';
import Questions from './pages/Questions';
import Partners from './pages/Partners';

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css';
function App() {

  return (
    <div className='max-w-[100%] m-0 w-full h-full' id='app'>
          <Header />
          <HomePage />
          <Disciplines />
          <Questions />
          <Partners />
          <Footer />
    </div>

  )
}

export default App
