import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { MainComponent } from '../Layouts/MainComponent';

export const RouterWrapper = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainComponent />} />
      </Routes>
    </BrowserRouter>
  );
};
