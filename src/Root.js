// src/Root.js
import React, { useState, useEffect } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import App from './App';
import BootSequence from './components/BootSequence';

const theme = createTheme({
  palette: {
    mode: 'dark',
    background: {
      default: '#000814',
      paper: '#001122',
    },
    text: {
      primary: '#ffffff',
    },
  },
});

function Root() {
  const [bootDone, setBootDone] = useState(false);

  // Optional: Automatically end boot sequence after X seconds
  useEffect(() => {
    const timer = setTimeout(() => setBootDone(true), 4000); // 4 seconds
    return () => clearTimeout(timer);
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div
        style={{
          background: '#000814',
          minHeight: '100vh',
          overflow: 'hidden',
        }}
      >
        {!bootDone ? <BootSequence onFinish={() => setBootDone(true)} /> : <App />}
      </div>
    </ThemeProvider>
  );
}

export default Root;
