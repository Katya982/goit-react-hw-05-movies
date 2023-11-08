import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchCast } from '../../service/config';
import notfoundphoto from '../image/notfoundphoto.jpg'
import {  CastList } from "./Cast.styled"; 


const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    const movieCast = async () => {
      try {
        const response = await fetchCast(movieId);
        setCast(response);
      } catch (error) {
        console.error(error);
      }
    };

    movieCast();
  }, [movieId]);

  return (
    <>
      {cast.length !== 0 && (
        <div>
          <h2>Cast</h2>
          <CastList>
            {cast.map((actor) => (
              <li key={actor.id}>
                <img
                  width="200px"
                  height="300px"
                  src={
                    actor.profile_path
                      ? `https://image.tmdb.org/t/p/w300${actor.profile_path}`
                      : `${notfoundphoto}`
                  }
                  alt={actor.name}
                />
                <p>{actor.name}</p>
              </li>
            ))}
          </CastList>
        </div>
      )}
      {cast.length === 0 && <div>We don't have any cast for this movie.</div>}
    </>
  );
};

export default Cast;
