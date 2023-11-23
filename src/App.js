import Axios from 'axios';
import { configure } from 'axios-hooks';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Search } from './screens/Search';
import { Details } from './screens/Details';
import { NormalizeStyles } from './shared/NormalizeStyles';
import { Header } from './common-components/Header/Header';
import { NotFound } from './screens/NotFound';

const axios = Axios.create({
  baseURL: `${process.env.REACT_APP_SUPER_HERO_API_BASE_URL}/${process.env.REACT_APP_SUPER_HERO_API_KEY}`,
});

configure({ axios });

const router = createBrowserRouter([
  {
    path: '/detalhes/:id',
    element: <Details />,
  },
  {
    path: '/',
    element: <Search />,
  },
  {
    path: '*',
    element: <NotFound />,
  },
]);

export function App() {
  return (
    <>
      <NormalizeStyles />
      <Header />
      <RouterProvider router={router} />
    </>
  );
}
