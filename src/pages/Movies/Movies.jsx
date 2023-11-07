import React, { useState } from 'react';
import { useSearchParams, useLocation, Link } from 'react-router-dom';
import { HandleMovieSearch } from '../../service/config';

const Movies = () => {
  const [searchResults, setSearchResults] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const movieName = searchParams.get('query') || '';
  const [loading, setLoading] = useState(false);
  const location = useLocation();
  const [searched, setSearched] = useState(false);

  const updateQueryString = (query) => {
    const nextParams = query !== '' ? { query } : {};
    setSearchParams(nextParams);
  };

  const handleSearch = async () => {
    try {
      setLoading(true);
      const response = await HandleMovieSearch(movieName);
      setSearchResults(response);
      setSearched(true);
    } catch (error) {
      console.error('Error searching movies', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          handleSearch();
        }}
      >
        <h2>Search for Movies</h2>
        <input
          type="text"
          value={movieName}
          onChange={(event) => updateQueryString(event.target.value)}
          placeholder="Type here"
        />
        <button type="submit">Search</button>
      </form>

      {searched && loading ? (
        <p>Loading...</p>
      ) : searched && searchResults.length === 0 && movieName ? (
        <h2>🔎 Nothing found</h2>
      ) : searched && (
        <div>
          <ul>
            {searchResults.map(movie => (
              <li key={movie.id}>
                <Link to={`/movies/${movie.id}`} state={{ from: location }}>{movie.title}</Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};


export default Movies;
