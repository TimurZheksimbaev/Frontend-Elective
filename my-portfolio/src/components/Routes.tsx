import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Hero from './Hero';
import Comic from './Comic';
import Portfolio from './Portfolio';

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/comic" element={<Comic />} />
        <Route path="/projects" element={<Portfolio />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;