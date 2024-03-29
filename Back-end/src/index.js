const express = require('express');
const morgan = require('morgan');
const cors = require("cors");
const app = express();
const port = 3000;

//Data
const movies = [
  {
    id: 1,
    name: "The Boys",
    imdb: 9.3,
    date: "2022",
    sposter: "src/img/the boys.jpg",
    bposter: "src/img/the boys1.jpg",
    genre: "Action",
    type: "series",
    url: "src/theboy.html",
    trailer: "john wick.webm",
    low: "src/video/theboys.webm",
    medium: "src/video/the boys 720ph.mp4",
    high: "src/video/the boys 1080ph.mp4",
  },
  {
    id: 2,
    name: "Money Heist",
    imdb: 9.9,
    date: "2020",
    sposter: "src/img/money heist.jpg",
    bposter: "src/img/money heist1.jpg",
    genre: "Action",
    type: "series",
    url: "money heist.html",
    trailer: "money heist trailer.mp4",
    low: "video/money heist 480ph.mp4",
    medium: "video/money heist 720ph.mp4",
    high: "video/money heist 1080ph.mp4",
  },
  {
    id: 3,
    name: "John Wick",
    imdb: 9.8,
    date: "2022",
    sposter: "src/img/Jhon Wick.jpg",
    bposter: "src/img/jhon wick1.webp",
    genre: "Action",
    type: "movie",
    url: "jhon wick.html",
    trailer: "john wick trailer.mp4",
    low: "video/Jhon Wick 480ph.mp4",
    medium: "video/Jhon Wick 720ph.mp4",
    high: "video/Jhon Wick 1080ph.mp4",
  },
  {
    id: 4,
    name: "Ant Man",
    imdb: 8.9,
    date: "2017",
    sposter: "src/img/ant man.jpg",
    bposter: "src/img/ant man1.jpg",
    genre: "Action",
    type: "movie",
    url: "ant man.html",
    trailer: "john wick trailer.mp4",
    low: "video/ant man 480ph.mp4",
    medium: "video/ant man 720ph.mp4",
    high: "video/ant man 1080ph.mp4",
  },
  {
    id: 5,
    name: "Avengers",
    imdb: 9.9,
    date: "2012",
    sposter: "src/img/avengers.jpg",
    bposter: "src/img/avengers1.jpg",
    genre: "Action",
    type: "movie",
    url: "avengers.html",
    trailer: "john wick trailer.mp4",
    low: "video/avengers 480ph.mp4",
    medium: "video/avengers 720ph.mp4",
    high: "video/avengers 1080ph.mp4",
  },
  {
    id: 6,
    name: "Moon Knight",
    imdb: 7.3,
    date: "2022",
    sposter: "src/img/moon knight.jpg",
    bposter: "src/img/moon knight1.webp",
    genre: "Action",
    type: "series",
    url: "moon knight.html",
    trailer: "john wick trailer.mp4",
    low: "video/moon knight 480ph.mp4",
    medium: "video/moon knight 720ph.mp4",
    high: "video/moon knight 1080ph.mp4",
  },
  {
    id: 7,
    name: "Kota Factory",
    imdb: 9.6,
    date: "2020",
    sposter: "src/img/kota factory.jpg",
    bposter: "src/img/kota factory1.webp",
    genre: "Action",
    type: "series",
    url: "kota factory.html",
    trailer: "john wick trailer.mp4",
    low: "video/kota factory 480ph.mp4",
    medium: "video/kota factory 720ph.mp4",
    high: "video/kota factory 1080ph.mp4",
  },
  {
    id: 8,
    name: "Collage Romance",
    imdb: 7.9,
    date: "2021",
    sposter: "src/img/collage romance.jpg",
    bposter: "src/img/collage romance1.jpg",
    genre: "Action",
    type: "series",
    url: "collage romance.html",
    trailer: "john wick trailer.mp4",
    low: "video/collage romance 480ph.mp4",
    medium: "video/collage romance 720ph.mp4",
    high: "video/collage romance 1080ph.mp4",
  },
  {
    id: 9,
    name: "Thor Love Of Thunder",
    imdb: 8.8,
    date: "2022",
    sposter: "src/img/thor love of thunder.jpg",
    bposter: "src/img/thor love of thunder1.avif",
    genre: "Action",
    type: "movie",
    url: "thor love of thunder.html",
    trailer: "john wick trailer.mp4",
    low: "video/thor love of thunder 480ph.mp4",
    medium: "video/thor love of thunder 720ph.mp4",
    high: "video/thor love of thunder 1080ph.mp4",
  },
  {
    id: 10,
    name: "Uncharted",
    imdb: 9.8,
    date: "2022",
    sposter: "src/img/uncharted.webp",
    bposter: "src/img/uncharted1.jpg",
    genre: "Action",
    type: "movie",
    url: "uncharted.html",
    trailer: "john wick trailer.mp4",
    low: "video/uncharted 480ph.mp4",
    medium: "video/uncharted 720ph.mp4",
    high: "video/uncharted 1080ph.mp4",
  },
  {
    id: 11,
    name: "Eesho",
    imdb: 8.2,
    date: "2022",
    sposter: "src/img/eesho.jpeg",
    bposter: "src/img/eesho1.jpg",
    genre: "Action",
    type: "movie",
    url: "eesho.html",
    trailer: "john wick trailer.mp4",
    low: "video/eesho 480ph.mp4",
    medium: "video/eesho 720ph.mp4",
    high: "video/eesho 1080ph.mp4",
  },
  {
    id: 12,
    name: "Top Gun",
    imdb: 8.0,
    date: "2022",
    sposter: "src/img/topgun.jpg",
    bposter: "src/img/topgun1.jpg",
    genre: "Action",
    type: "movie",
    url: "topgun.html",
    trailer: "john wick trailer.mp4",
    low: "video/topgun 480ph.mp4",
    medium: "video/topgun 720ph.mp4",
    high: "video/topgun 1080ph.mp4",
  },
  {
    id: 13,
    name: "Jurassic World",
    imdb: 8.0,
    date: "2022",
    sposter: "src/img/jurassic world.jpg",
    bposter: "src/img/jurassic world1.jpg",
    genre: "Action",
    type: "movie",
    url: "jurassic world.html",
    trailer: "john wick trailer.mp4",
    low: "video/jurassic world 480ph.mp4",
    medium: "video/jurassic world 720ph.mp4",
    high: "video/jurassic world 1080ph.mp4",
  },
  {
    id: 14,
    name: "Eternals",
    imdb: 9.0,
    date: "2022",
    sposter: "src/img/eternals.jpg",
    bposter: "src/img/eternals1.webp",
    genre: "Action",
    type: "movie",
    url: "eternals.html",
    trailer: "john wick trailer.mp4",
    low: "video/eternals 480ph.mp4",
    medium: "video/eternals 720ph.mp4",
    high: "video/eternals 1080ph.mp4",
  },
  {
    id: 15,
    name: "Spider Man",
    imdb: 9.9,
    date: "2020",
    sposter: "src/img/spiderman.jpg",
    bposter: "src/img/spiderman1.jpg",
    genre: "Action",
    type: "movie",
    url: "spiderman.html",
    trailer: "john wick trailer.mp4",
    low: "video/spiderman 480ph.mp4",
    medium: "video/spiderman 720ph.mp4",
    high: "video/spiderman 1080ph.mp4",
  },
];

app.use(cors());

app.get("/", (req, res) => {
  res.send("1");
});

// API để lấy danh sách tất cả các bộ phim
app.get('/movies', (req, res) => {
  res.json(movies);
});

// API cho series
app.get('/nav/series', (req, res) => {
  const moviesSeries = movies.filter(movie => movie.type === "series");
  res.json(moviesSeries);
});

// API để lấy chi tiết của một bộ phim dựa trên id
app.get('/movies/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const movie = movies.find(movie => movie.id === id);
  if (movie) {
      res.json(movie);
  } else {
      res.status(404).json({ message: 'Movie not found' });
  }
});

app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});