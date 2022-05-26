import React from 'react';
import movieIcon from '../assets/svg/movie.svg';

const Header = () => {
  return (
    <header className="header">
        <div className="header__head">
            <h1>Zoom <span>Movie</span></h1>
            <img src={movieIcon} alt="movie__icon" />
        </div>
    </header>
  )
}

export default Header