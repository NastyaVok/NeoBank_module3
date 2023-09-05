import ContinuationPage from '../pages/ContinuationPage';
import SchedulePage from '../pages/SchedulePage';
import DocumentsPage from '../pages/DocumentsPage';
import CodePage from '../pages/CodePage';
import ErrorPage from '../pages/ErrorPage';

const privateRoutesConfig = [
  {
    path: '/:id',
    element: <ContinuationPage />,
  },
  {
    path: '/:id/document',
    element: <SchedulePage />,
  },
  {
    path: '/:id/document/sign',
    element: <DocumentsPage />,
  },
  {
    path: '/:id/code',
    element: <CodePage />,
  },
  {
    path: '*',
    element: <ErrorPage />,
  },
];

export default privateRoutesConfig;