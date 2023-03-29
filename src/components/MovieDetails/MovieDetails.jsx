import { Outlet, useParams, useLocation } from 'react-router-dom';
import { Suspense, useRef } from 'react';
import { Loader } from 'components/Loader/Loader';
import {
  Container,
  Button,
  Poster,
  Text,
  ButtonWrapper,
  TextContainer,
  FilmWrapper,
  BackBtn,
} from './MovieDetails.styled';
import { useEffect, useState } from 'react';
import { fetchMovieDetailsInfo } from 'components/serviseAPI/fetchMoviesAPI';
import imageValidation from 'components/imageValidation';

const MovieDetails = () => {
  const { id } = useParams();
  const [film, setFilm] = useState(null);
  const [status, setStatus] = useState('idle');
  const location = useLocation();
  const backLinkLocationRef = useRef(location.state?.from ?? '/movies');

  useEffect(() => {
    const abortController = new AbortController();
    const fetchMovieId = async () => {
      const results = await fetchMovieDetailsInfo(id, {
        signal: abortController.signal,
      });

      if (film !== null) return;
      if (results) setFilm(results);
      setStatus('loaded');
    };
    fetchMovieId();
    return () => {
      abortController.abort();
    };
  }, [film, id]);

  return (
    <Container>
      <BackBtn to={backLinkLocationRef.current}>Go back</BackBtn>
      {status === 'idle' && <Loader />}
      {film !== null && (
        <>
          <FilmWrapper>
            <Poster src={imageValidation(film.poster_path, 300)} />
            <TextContainer>
              <h1>{film.original_title}</h1>
              <p>User Score: {Math.trunc(film.vote_average * 10)}%</p>
              <h2>Overview</h2>
              <p>{film.overview}</p>
              <h3>Genres</h3>
              <p>{film.genres.map(el => el.name).join(' | ')}</p>
            </TextContainer>
          </FilmWrapper>
          <Text></Text>
          <ButtonWrapper>
            <Button to={'cast'}>Cast</Button>
            <Button to={'reviews'}>Reviews</Button>
          </ButtonWrapper>
        </>
      )}
      <Suspense>
        <Outlet />
      </Suspense>
    </Container>
  );
};

export default MovieDetails;
