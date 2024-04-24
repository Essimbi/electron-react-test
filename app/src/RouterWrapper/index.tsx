import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Result from '../Components/ContentResult/index';
import { MainComponent } from '../Layouts/MainComponent';

export const RouterWrapper = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainComponent />} />

        <Route path="/Donnee_de_resultat" element={<Result />} />
      </Routes>
    </BrowserRouter>
  );
};
