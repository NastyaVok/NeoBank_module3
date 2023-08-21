import MainPage from '../pages/MainPage';
import LoanPage from '../pages/LoanPage';

const routesConfig = [
  {
    path: '/',
    element: <MainPage />,
  },
  {
    path: '/loan',
    element: <LoanPage />,
  },
];

export default routesConfig;