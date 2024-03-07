import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { useState, useEffect } from 'react';
import './index.css'
import { BrowserRouter, Routes , Route} from 'react-router-dom'
// import Home from './Components/Home.jsx'
import SeriesPage from './Components/Series.jsx'
import Kid from './Components/Kid.jsx'
import Movies from './Components/Movies.jsx'
import WatchMv from './Components/WatchMv.jsx'



function getData() {
  
}

function Main() {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    fetch('http://localhost:3000/movies')
      .then(response => response.json())
      .then(data => {
        setMovies(data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <React.StrictMode>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<App movies={movies}/>}></Route>
          <Route path='/Movies' element={<Movies />}></Route>
          <Route path='/Series' element={<SeriesPage data={movies}/>}></Route>
          <Route path='/Kid' element={<Kid />}></Route>
          <Route path='/WatchMv' element={<WatchMv />}></Route>
        </Routes>
      </BrowserRouter>
    </React.StrictMode>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<Main />);
