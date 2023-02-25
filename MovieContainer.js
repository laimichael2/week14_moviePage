import { useState, useEffect } from 'react';
import handleSubmit from '../components/ReviewForm'
import StarRating from '../components/StarRating';
import App from '../App';
import {movies} from '../components/movies';
import './movies.css';;



const fetchMovies = () => {
  return movies;
};

const MovieContainer = () => {
  console.log(fetchMovies());

  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const movies = fetchMovies();
    console.log('MovieContainer: useEffect: movies: ', movies);
    setMovies(movies);
  }, []);

  return(
    <div className="movie-container">
      <h2>Movies</h2>
      <ul className ="movie-list">
        {movies.map(movie => (
          <li key={movie.id} className="movie">
            <img src={movie.poster} alt={movie.title} />
            <p>{movie.title} by {movie.director} was released on {movie.year}</p>
            <p>Rating: {movie.rating}</p>
             <StarRating />
             <h5>review:</h5>
             <input name="myInput" />
             <button type="submit">Submit </button>
             
          </li>
        ))}
      </ul>      
    </div>
  );
};

export default MovieContainer;