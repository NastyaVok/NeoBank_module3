import { Routes, Route } from 'react-router-dom';

import routesConfig from '../../routes/routesConfig'; 
import HeaderPage from '../HeaderPage';
import FooterPage from '../FooterPage';

const App = () => {
  return (
    <>
      <HeaderPage />
      <Routes>
        {routesConfig.map((route, index) => (
          <Route 
            key={index}
            path={route.path} 
            element={route.element} 
          />
        ))}
      </Routes>
      <FooterPage />
    </>
  );
};

export default App;
