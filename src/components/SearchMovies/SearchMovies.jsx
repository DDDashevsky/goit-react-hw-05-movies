import { List, Button } from 'components/FilmList/FilmList.styled';
import { FilmItem } from 'components/FilmItem/FilmItem';
import { Formik } from 'formik';
import {
  Input,
  Form,
  FormField,
  SearchButton,
  SearchButtonLabel,
} from './SearchMovies.styled';
import { useEffect, useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Loader } from 'components/Loader/Loader';
import { nanoid } from 'nanoid';
import { useLocation, useSearchParams } from 'react-router-dom';
import { fetchMoviesByKeyword } from 'components/serviseAPI/fetchMoviesAPI';

export const SearchMovies = props => {
  const [data, setData] = useState(null);
  const [status, setStatus] = useState('idle');
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();

  const search = searchParams.get('search') ?? '';

  const updateQueryString = evt => {
    const searchValue = evt.target.value.trim();
    if (searchValue === '') return setSearchParams({});

    setSearchParams({ search: searchValue });
  };

  const handleSubmit = () => {
    if (search.trim() === '') {
      toast.error('Please enter the word', 3000);
      return;
    }
    setQuery(search);
    setStatus('loading');
  };

  const handleClick = () => {
    setPage(prevPage => prevPage + 1);
  };

  useEffect(() => {
    if (search) setQuery(search);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const abortController = new AbortController();
    const fetchMovie = async () => {
      const results = await fetchMoviesByKeyword(query, page, {
        signal: abortController.signal,
      });
      if (results.length === 0) toast.error('Sorry, no result');
      if (results.length !== 0 && data === null) setData(results);
      if (data !== null) setData(prev => [...prev, ...results]);
      setStatus('loaded');
    };

    if (query) fetchMovie();
    return () => {
      abortController.abort();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page, query]);

  return (
    <div>
      <ToastContainer autoClose={3000} theme="colored" pauseOnHover />
      <Formik
        initialValues={query}
        onSubmit={handleSubmit}
        style={{ width: '100%' }}
      >
        <Form>
          <FormField>
            <Input
              type="text"
              name="searchQuery"
              placeholder="Search movies"
              onChange={updateQueryString}
            />
          </FormField>
          <SearchButton type="submit">
            <SearchButtonLabel>Search</SearchButtonLabel>
          </SearchButton>
        </Form>
      </Formik>
      {status === 'loading' && <Loader />}
      {data !== null && (
        <List>
          {data.map(el => {
            return (
              <FilmItem
                imageLink={el.poster_path}
                title={el.original_title || el.original_name || el.title}
                id={el.id}
                key={nanoid()}
                to={''}
                state={{ from: location }}
              ></FilmItem>
            );
          })}
          {data.length !== 0 && (
            <Button onClick={handleClick}>Load more</Button>
          )}
        </List>
      )}
    </div>
  );
};
