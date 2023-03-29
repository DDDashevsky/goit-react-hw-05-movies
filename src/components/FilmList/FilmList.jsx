import { FilmItem } from 'components/FilmItem/FilmItem';
import { nanoid } from 'nanoid';
import { Button, List } from './FilmList.styled';
import { useState, useEffect } from 'react';
import { Loader } from 'components/Loader/Loader';
import { useLocation } from 'react-router-dom';
import { fetchTrendingMovies } from 'components/serviseAPI/fetchMoviesAPI';

export const FilmList = () => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [status, setStatus] = useState('idle');
  const location = useLocation();

  const handleClick = () => {
    setPage(prevPage => {
      return prevPage + 1;
    });
  };

  useEffect(() => {
    const abortController = new AbortController();
    const fetchTrends = async () => {
      const results = await fetchTrendingMovies(page, {
        signal: abortController.signal,
      });
      if (results) setData(prevData => [...prevData, ...results]);
      setStatus('loaded');
    };
    fetchTrends();
    return () => {
      abortController.abort();
    };
  }, [page]);

  return (
    <div>
      {status === 'idle' && <Loader />}
      <List>
        {data.map(el => (
          <FilmItem
            key={nanoid()}
            imageLink={el.poster_path}
            title={el.original_title || el.original_name || el.title}
            id={el.id}
            to={'movies/'}
            state={{ from: location }}
          />
        ))}
      </List>
      {data.length !== 0 && <Button onClick={handleClick}>Load more</Button>}
    </div>
  );
};
