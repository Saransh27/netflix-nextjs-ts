import React from 'react';
import { NextPageContext } from 'next';
import { getSession } from 'next-auth/react';

import Navbar from '../components/Navbar';
import BillBoard from '../components/Billboard';
import useMovies from '../hooks/useMovieList';
import useMovieList from '../hooks/useMovieList';
import MovieList from '../components/MovieList';

export async function getServerSideProps(context: NextPageContext) {
  const session = await getSession(context);

  if (!session) {
    return {
      redirect: {
        destination: '/auth',
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
}

const Home = () => {
  const { data: movies = [] } = useMovieList();
  return (
    <>
      <Navbar />
      <BillBoard />
      <div className='pb-40'>
        <MovieList title='Trending Now' data={movies} />
      </div>
    </>
  );
};

export default Home;
