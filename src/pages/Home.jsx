import React, { useEffect, useState } from "react";
import { fetchTrendingMovies } from '../service/config';
import { Link } from "react-router-dom";

const Home = () => {
    const [trendingMovies, setTrendingMovies] = useState([]);

        useEffect(() => {
        const fetchData = async () => {
          try {
            const movies = await fetchTrendingMovies();
            setTrendingMovies(movies); 
          } catch (error) {
            console.error(error);
          }
        };
    
        fetchData();
        }, []);

    return (        
        <div>
            <h2>Trending today</h2>
            <ul>
                {trendingMovies.map(movie => (
                    <li key={movie.id}>
                        <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );

};

export default Home;

   