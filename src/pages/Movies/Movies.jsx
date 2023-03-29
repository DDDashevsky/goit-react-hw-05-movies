import { SearchMovies } from 'components/SearchMovies/SearchMovies';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

const Movies = () => (
  <>
    <SearchMovies />
    <Suspense>
      <Outlet />
    </Suspense>
  </>
);

export default Movies;
