import React, { useEffect, useState } from 'react';
import { Box, Typography } from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import balamLogo from '../assets/img/placeholders/balam_logo.svg';

const GlitchText = ({ text, color = '#00BFFF' }) => (
  <Typography
    variant="h6"
    sx={{
      position: 'relative',
      display: 'inline-block',
      fontFamily: 'Orbitron, monospace',
      fontWeight: 700,
      color,
      textShadow: `0 0 10px ${color}, 0 0 20px ${color}`,
      letterSpacing: 1,
      animation: 'flicker 2s infinite alternate',
      '@keyframes flicker': {
        '0%, 18%, 22%, 25%, 53%, 57%, 100%': { opacity: 1 },
        '20%, 24%, 55%': { opacity: 0.4 },
      },
    }}
  >
    {text}
  </Typography>
);

export default function BootSequence({ onFinish }) {
  const [step, setStep] = useState(0);
  const [exiting, setExiting] = useState(false);

  useEffect(() => {
    const sequence = [
      { delay: 700, step: 1 },
      { delay: 1700, step: 2 },
      { delay: 2700, step: 3 },
      { delay: 3700, step: 4 },
      { delay: 4800, step: 5 },
    ];

    sequence.forEach(({ delay, step }) =>
      setTimeout(() => setStep(step), delay)
    );

    const exitTimer = setTimeout(() => {
      setExiting(true);
      setTimeout(() => onFinish && onFinish(), 1000);
    }, 6000);

    return () => clearTimeout(exitTimer);
  }, [onFinish]);

  return (
    <Box
      sx={{
        position: 'fixed',
        inset: 0,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        bgcolor: '#000814',
        zIndex: 9999,
        overflow: 'hidden',
        fontFamily: 'Orbitron, monospace',
        color: '#00BFFF',
      }}
    >
      <motion.img
        src={balamLogo}
        alt="BALAM Logo"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        style={{
          width: 180,
          marginBottom: '20px',
          filter: 'drop-shadow(0 0 25px #00BFFF)',
        }}
      />

      <AnimatePresence mode="wait">
        {step === 1 && (
          <motion.div
            key="boot"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
          >
            <GlitchText text="Inicializando pagina_balam..." />
          </motion.div>
        )}
        {step === 2 && (
          <motion.div
            key="systems"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
          >
            <GlitchText text="Verificando administradores..." />
          </motion.div>
        )}
        {step === 3 && (
          <motion.div
            key="auth"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
          >
            <GlitchText text="Cargando página..." />
          </motion.div>
        )}
        {step === 4 && (
          <motion.div
            key="ready"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
          >
            <GlitchText text="Sistemas operativos en línea ✅" color="#00FF7F" />
          </motion.div>
        )}
        {step === 5 && (
          <motion.div
            key="launch"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Typography
              variant="h4"
              sx={{
                color: '#00FFFF',
                textShadow: '0 0 25px #00FFFF',
                fontWeight: 800,
                mt: 2,
                letterSpacing: 2,
              }}
            >
              BALAM 3527 — ONLINE
            </Typography>
          </motion.div>
        )}
      </AnimatePresence>

      {exiting && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5, ease: 'easeInOut' }}
          style={{
            position: 'absolute',
            inset: 0,
            background:
              'radial-gradient(circle at center, rgba(0, 255, 255, 0.15) 0%, rgba(0, 0, 0, 0.95) 100%)',
            backdropFilter: 'blur(10px)',
            zIndex: 10000,
          }}
        />
      )}
    </Box>
  );
}
