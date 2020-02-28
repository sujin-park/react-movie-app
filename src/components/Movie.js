import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';

import './Movie.css';


const Movie = ({ id, year, title, summary, poster, genres }) => {
  return (
    <Link to={{
      pathname: '/movie/{id}',
      state: {
        year,
        title,
        summary,
        poster,
        genres
      }
    }}>
      <div className="movie">
        <img src={poster} alt={title}/>
        <div className="movie__data">
          <h3 className="movie__title">{title}</h3>
          <ul className="movie__genres">{genres.map((genre, idx) => <li key={idx} className="genre">{genre}</li>)}</ul>
          <h5 className="movie__year">{year}</h5>
          <p className="movie__summary">{summary.slice(0, 180)}...</p>
        </div>
      </div>
    </Link>
  );
};

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  year: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default Movie;
