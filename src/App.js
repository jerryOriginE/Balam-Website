import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import BackgroundLogo from './components/BackgroundLogo';
import AboutUs from './pages/AboutUs';
import TeamPage from './pages/TeamPage';
import HistoryPage from './pages/HistoryPage';
import HistoryYearPage from './pages/HistoryYearPage';
import SponsorsPage from './pages/SponsorsPage';
import JoinUs from './pages/JoinUs';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

// Lazy-loaded pages (they’ll only download when needed)
const LandingPage = lazy(() => import('./pages/LandingPage'));
const NotFound = lazy(() => import('./pages/NotFound'));
const ComingSoon = lazy(() => import('./pages/ComingSoon'));

function App() {
  return (
    <Router>
      <Navbar />
      <BackgroundLogo />
      
      {/* Suspense fallback shows a loading circle while the new page loads */}
      <Suspense
        fallback={
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              height: '100vh',
              background: 'rgba(0, 10, 25, 0.9)',
            }}
          >
            <CircularProgress sx={{ color: '#00BFFF' }} />
          </Box>
        }
      >
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/team" element={<TeamPage />} />
          <Route path="/history" element={<HistoryPage />} />
          <Route path="/history/:year" element={<HistoryYearPage />} />
          <Route path="/projects" element={<ComingSoon />} />
          <Route path="/sponsors" element={<SponsorsPage />} />
          <Route path="/join" element={<JoinUs />} />
          <Route path="/contact" element={<ComingSoon />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
