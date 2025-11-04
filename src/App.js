import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import BackgroundLogo from './components/BackgroundLogo';
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
          <Route path="/robot" element={<ComingSoon />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
