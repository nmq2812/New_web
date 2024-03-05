import '../App.css'
import { handleLeftButtonClick, handleRightButtonClick} from './AppLogic.js'
import { useRef } from 'react';
import './AppLogic.js'
import ShowCard from './ShowCard.jsx';
import SearchMovie from './SearchMovie.jsx';
import Navigation from './Navigation.jsx';
import Play from './Play.jsx';

// do thể loại không có Home nên cứ để giao diện chính cho dễ nhìn
function Kid({data}) {
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
              {/* <a href='#' id='play' className='content_btns_a'>Watch<i className="bi bi-play-fill" style={{ marginRight: '5px' }}> </i></a>
              <a href='#' id='download_main' className='content_btns_a'><i className="bi bi-cloud-arrow-down-fill" style={{ marginRight: '5px' }}> </i></a> */}
            </div>
          </div>
          <section className='section'>
            <h4 className='section_h4'>Popular</h4>
            <i className="bi bi-chevron-left" onClick={() => handleLeftButtonClick(cardsRef)}> </i>
            <i className="bi bi-chevron-right" onClick={() => handleRightButtonClick(cardsRef)}> </i>
            <div ref={cardsRef} className='section_cards'>
              <ShowCard data={data}/>
            </div>
          </section>
        </div>
      </div>
  )
}

export default Kid
