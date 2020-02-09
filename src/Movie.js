import React from 'react'
import PropTypes from 'prop-types'

const Movie = ({ id, year, title, summary, poster }) => {
  return <div>
    <h1>{id}</h1>
    <h1>{year}</h1>
    <h1>{title}</h1>
    <h1>{summary}</h1>
    <h1>{poster}</h1>
  </div>;
};

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  year: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired
};

export default Movie;
