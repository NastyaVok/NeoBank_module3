import MainPage from '../containers/MainPage';
import LoanPage from '../containers/LoanPage';

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