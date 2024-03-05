import './App.css'
import { handleLeftButtonClick, handleRightButtonClick} from './Components/AppLogic.js'
import { useRef } from 'react';
import './Components/AppLogic.js'
import ShowCard from './Components/ShowCard.jsx';
import SearchMovie from './Components/SearchMovie.jsx';
import Navigation from './Components/Navigation.jsx';
import data from './Components/Movie.js';
import Play from './Components/Play.jsx';

function App() {
  const cardsRef = useRef(null);
  return (
      <div className='cha'>
        <div className='boder'>
          <video src="src/video/videobg.webm" autoPlay muted className='video_bg'></video>
          <div className='overlay'></div>
          <nav className='nav'>
            <div className='logo'>
              <img src='src/img/logo.png' className='logo_img'></img>
              <Navigation/>
            </div>  
            <SearchMovie />
          </nav>
          <div className='content'>
            <h1 id='title' className='conten_h1'>Monney Heist</h1>
            <p className='content_p'>Pina sáng tạo. Loạt phim xoay quanh hai vụ và nắm quyền lãnh đạo.</p>
            <div className='content_details'>
              <h6 className='content_details_h6'>A Netflix Original Fiml</h6>
              <h5 id='gen' className='content_details_h5'>Thriller</h5>
              <h4 className='content_details_h4'>2021</h4>
              <h3 id='rate' className='content_details_h3'><span className='content_details_h3_span'> IMDB </span><i className="bi bi-star-fill" style={{ marginRight: '5px' }}> </i>9.6</h3>
            </div>
            <div className='content_btns'>
              <Play/>
            </div>
          </div>
          <section className='section'>
            <h4 className='section_h4'>Popular</h4>
            <i className="bi bi-chevron-left" onClick={() => handleLeftButtonClick(cardsRef)}> </i>
            <i className="bi bi-chevron-right" onClick={() => handleRightButtonClick(cardsRef)}> </i>      
            <div ref={cardsRef} className='section_cards'>
              <ShowCard data = {data}/>
            </div>
          </section>
        </div>
      </div>
  )
}

export default App
