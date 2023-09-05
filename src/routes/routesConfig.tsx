import MainPage from '../pages/MainPage';
import LoanPage from '../pages/LoanPage';
import PrivatePage from '../pages/PrivatePage';
import ErrorPage from '../pages/ErrorPage';

const routesConfig = [
  {
    path: '/',
    element: <MainPage />,
  },
  {
    path: '/loan',
    element: <LoanPage />,
  },
  {
    path: '/loan/*',
    element: <PrivatePage />,
  },
  {
    path: '*',
    element: <ErrorPage />,
  },
];

export default routesConfig;