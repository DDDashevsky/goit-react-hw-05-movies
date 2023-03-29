import { Outlet } from 'react-router-dom';
import { Header } from 'components/Header/Header';
import { Layout } from 'components/Layout/Layout';
import { Suspense } from 'react';

export const SharedLayout = () => (
  <>
    <header>
      <Header />
    </header>
    <Layout>
      <Suspense>
        <Outlet />
      </Suspense>
    </Layout>
  </>
);
