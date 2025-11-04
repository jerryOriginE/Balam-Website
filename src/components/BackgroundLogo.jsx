import React from 'react';
import { Box, keyframes } from '@mui/material';
import balamLogo from '../assets/img/placeholders/balam_logo.svg';

const pulseRotate = keyframes`
  0% {
    transform: translate(-50%, -50%) rotate(0deg) scale(1);
    filter: drop-shadow(0 0 25px #00e5ff);
  }
  50% {
    transform: translate(-50%, -50%) rotate(180deg) scale(1.05);
    filter: drop-shadow(0 0 50px #00ffff);
  }
  100% {
    transform: translate(-50%, -50%) rotate(360deg) scale(1);
    filter: drop-shadow(0 0 25px #00e5ff);
  }
`;

export default function BackgroundLogo() {
  return (
    <Box
      component="img"
      src={balamLogo}
      alt="BALAM Logo"
      sx={{
        position: 'fixed',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: { xs: '350px', md: '700px' },
        opacity: 0.15,
        animation: `${pulseRotate} 60s linear infinite`,
        pointerEvents: 'none',
        userSelect: 'none',
        zIndex: 1,
        mixBlendMode: 'screen',
      }}
    />
  );
}
