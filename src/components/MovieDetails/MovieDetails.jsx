import React, { useState, useEffect, Suspense } from 'react';
import { Link, useParams, useNavigate, useLocation, Outlet } from 'react-router-dom';
import { fetchMovieDetails } from '../../service/config';
import { AiFillLeftCircle } from "react-icons/ai";

import { MovieCard, MovieInfo, Button, MoreInfo } from "./MovieDetails.styled"; 

const linkStyle = {
  textDecoration: "none",
  color: 'black',
  listStyle: 'none',
  textTransform: 'uppercase'


};

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movieDetails, setMovieDetails] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();
    
  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const detailsResponse = await fetchMovieDetails(movieId);
          setMovieDetails(detailsResponse);
      } catch (error) {
        console.error('Error fetching movie details', error);
      }
    };

    fetchMovie();
  }, [movieId]);

  if (!movieDetails) {
    return <div>Loading...</div>;
  };
  
  const genres = movieDetails.genres.map(genre => (
    <span key={genre.id}>{genre.name}</span>
  ));
    
  const handleGoBack = () => {
    navigate(location.state?.from || '/');
  };

  return (
    <div>
      <Button onClick={handleGoBack}> <AiFillLeftCircle /> Go back</Button>
     
      <h1>{movieDetails.title}</h1>
      <MovieCard>
      
        <img
          src={movieDetails.poster_path
            ? `https://image.tmdb.org/t/p/w200${movieDetails.poster_path}`
            : undefined
          }
          alt={movieDetails.title}
        />
        <MovieInfo>
          <h3>Overview</h3>
          <p>{movieDetails.overview}</p>
          <h3>Genres</h3>
          <p>{genres}</p>
        
        </MovieInfo>
      </MovieCard>
      <h3>Additional information</h3>
      <MoreInfo>
        <li>
          <Link to="cast" style={linkStyle}>Actors</Link>
        </li>
        <li>
          <Link to="reviews" style={linkStyle}>Reviews</Link>
        </li>
      </MoreInfo>

      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </div>
  );
}

export default MovieDetails;


