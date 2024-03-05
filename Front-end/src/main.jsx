import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter, Routes , Route} from 'react-router-dom'
// import Home from './Components/Home.jsx'
import SeriesPage from './Components/Series.jsx'
import Kid from './Components/Kid.jsx'
import Movies from './Components/Movies.jsx'
import WatchMv from './Components/WatchMv.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<App/>}></Route>
      {/* <Route path='/Home' element={<Home/>}></Route> */}
      <Route path='/Movies' element={<Movies/>}></Route>
      <Route path='/Series' element={<SeriesPage/>}></Route>
      <Route path='/Kid' element={<Kid/>}></Route>
      <Route path='/WatchMv' element={<WatchMv/>}></Route>
    </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  
)
