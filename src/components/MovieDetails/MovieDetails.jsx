import React, { useState, useEffect, Suspense } from 'react';
import { Link, useParams, useLocation, Outlet} from 'react-router-dom';
import { fetchMovieDetails } from '../../service/config';
import { AiFillLeftCircle } from "react-icons/ai";
import notfoundphoto from '../image/notfoundphoto.jpg'

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
  const location = useLocation();
  const [goBackUrl, setGoBackUrl] = useState(location.state?.from || '/');


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
  }, [movieId, setGoBackUrl]);

  if (!movieDetails) {
    return <div>Loading...</div>;
  };
  
  const genres = movieDetails.genres.map(genre => (
    <span key={genre.id}>{genre.name}</span>
  ));
    
  return (
    <div>
      <Link to={goBackUrl}>
        <Button>
          <AiFillLeftCircle /> Go back
        </Button>
      </Link>
            {/* <Link to={location.state?.from || '/'}>
         <Link to={location.state?.from || '/movies'}>
        <Button>
          <AiFillLeftCircle /> Go back
        </Button>
      </Link>
          */}
    
      <h1>{movieDetails.title}</h1>
      <MovieCard>
      
        <img
          src={movieDetails.poster_path
            ? `https://image.tmdb.org/t/p/w200${movieDetails.poster_path}`
            : `${notfoundphoto}`
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


// import React, { useState, useEffect, Suspense } from 'react';
// import { Link, useParams, useLocation, Outlet } from 'react-router-dom';
// import { fetchMovieDetails } from '../../service/config';
// import { AiFillLeftCircle } from "react-icons/ai";
// import notfoundphoto from '../image/notfoundphoto.jpg'
// import { MovieCard, MovieInfo, Button, MoreInfo } from "./MovieDetails.styled";

// const linkStyle = {
//   textDecoration: "none",
//   color: 'black',
//   listStyle: 'none',
//   textTransform: 'uppercase'
// };

// const MovieDetails = () => {
//   const { movieId } = useParams();
//   const [movieDetails, setMovieDetails] = useState(null);
//   const location = useLocation();

//   useEffect(() => {
//     const fetchMovie = async () => {
//       try {
//         const detailsResponse = await fetchMovieDetails(movieId);
//         setMovieDetails(detailsResponse);
//       } catch (error) {
//         console.error('Error fetching movie details', error);
//       }
//     };

//     fetchMovie();
//   }, [movieId]);

//   if (!movieDetails) {
//     return <div>Loading...</div>;
//   };

//   const genres = movieDetails.genres.map(genre => (
//     <span key={genre.id}>{genre.name}</span>
//   ));

//   return (
//     <div>
//       {/* <Link to={location.state?.from || '/'}> */}
//          <Link to={location.state?.from || '/movies'}>Go back</Link>
//         {/* <Button>
//           <AiFillLeftCircle /> Go back
//         </Button> */}
//       {/* </Link> */}

//       <h1>{movieDetails.title}</h1>
//       <MovieCard>
//         <img
//           src={movieDetails.poster_path
//             ? `https://image.tmdb.org/t/p/w200${movieDetails.poster_path}`
//             : `${notfoundphoto}`
//           }
//           alt={movieDetails.title}
//         />
//         <MovieInfo>
//           <h3>Overview</h3>
//           <p>{movieDetails.overview}</p>
//           <h3>Genres</h3>
//           <p>{genres}</p>
//         </MovieInfo>
//       </MovieCard>
//       <h3>Additional information</h3>
//       <MoreInfo>
//         <li>
//           <Link to="cast" style={linkStyle}>Actors</Link>
//         </li>
//         <li>
//           <Link to="reviews" style={linkStyle}>Reviews</Link>
//         </li>
//       </MoreInfo>

//       <Suspense fallback={<div>Loading...</div>}>
//         <Outlet />
//       </Suspense>
//     </div>
//   );
// }

// export default MovieDetails;
