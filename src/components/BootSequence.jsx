import React, { useEffect, useRef, useState } from 'react';
import { Box, Typography, useMediaQuery } from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import balamLogo from '../assets/img/placeholders/balam_logo.svg';

/* ===============================
   GLITCH / TYPE TEXT COMPONENT
================================ */
const BootText = ({ text, color = '#00BFFF' }) => {
  const [visibleText, setVisibleText] = useState('');

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setVisibleText(text.slice(0, i));
      i++;
      if (i > text.length) clearInterval(interval);
    }, 35);

    return () => clearInterval(interval);
  }, [text]);

  return (
    <Typography
      variant="h6"
      sx={{
        fontFamily: 'Orbitron, monospace',
        fontWeight: 700,
        color,
        letterSpacing: 1.5,
        textShadow: `0 0 10px ${color}, 0 0 20px ${color}`,
        position: 'relative',
        animation: 'flicker 2.5s infinite',
        '@keyframes flicker': {
          '0%, 19%, 22%, 62%, 64%, 100%': { opacity: 1 },
          '20%, 63%': { opacity: 0.35 },
        },
        '&::after': {
          content: '""',
          position: 'absolute',
          inset: 0,
          background:
            'linear-gradient(transparent 60%, rgba(0,255,255,0.08) 62%, transparent 64%)',
          animation: 'scan 2.5s linear infinite',
          '@keyframes scan': {
            '0%': { backgroundPosition: '0 -100%' },
            '100%': { backgroundPosition: '0 200%' },
          },
        },
      }}
    >
      {visibleText}
    </Typography>
  );
};

/* ===============================
   BOOT STEPS
================================ */
const BOOT_STEPS = [
  { text: 'Inicializando servidor_balam...' },
  { text: 'Verificando administradores...' },
  { text: 'Cargando base de datos...' },
  { text: 'Sistemas operativos en línea ✅', color: '#00FF7F' },
  { title: 'BALAM 3527 — ONLINE' },
];

/* ===============================
   MAIN COMPONENT
================================ */
export default function BootSequence({ onFinish }) {
  const [stepIndex, setStepIndex] = useState(0);
  const [exiting, setExiting] = useState(false);
  const timers = useRef([]);
  const prefersReducedMotion = useMediaQuery('(prefers-reduced-motion)');

  const finishBoot = () => {
    if (exiting) return;
    setExiting(true);
    setTimeout(() => onFinish?.(), 900);
  };

  useEffect(() => {
    if (prefersReducedMotion) {
      finishBoot();
      return;
    }

    let delay = 700;

    BOOT_STEPS.forEach((_, index) => {
      const t = setTimeout(() => setStepIndex(index), delay);
      timers.current.push(t);
      delay += 900;
    });

    const endTimer = setTimeout(finishBoot, delay + 600);
    timers.current.push(endTimer);

    const skipHandler = (e) => e.key === 'Escape' && finishBoot();
    window.addEventListener('keydown', skipHandler);

    return () => {
      timers.current.forEach(clearTimeout);
      window.removeEventListener('keydown', skipHandler);
    };
  }, [prefersReducedMotion]);

  const current = BOOT_STEPS[stepIndex];

  return (
    <Box
      onClick={finishBoot}
      sx={{
        position: 'fixed',
        inset: 0,
        bgcolor: '#000814',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 9999,
        cursor: 'pointer',
        overflow: 'hidden',
      }}
      aria-label="System boot sequence"
    >
      {/* LOGO */}
      <motion.img
        src={balamLogo}
        alt="BALAM Logo"
        initial={{ opacity: 0, scale: 0.7, rotate: -5 }}
        animate={{
          opacity: 1,
          scale: [1, 1.03, 1],
          rotate: [0, 1.5, -1.5, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatType: 'mirror',
          ease: 'easeInOut',
        }}
        style={{
          width: 190,
          marginBottom: 26,
          filter:
            'drop-shadow(0 0 30px rgba(0,255,255,0.9)) drop-shadow(0 0 60px rgba(0,255,255,0.4))',
        }}
      />

      {/* TEXT */}
      <AnimatePresence mode="wait">
        <motion.div
          key={stepIndex}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.5 }}
        >
          {current?.title ? (
            <Typography
              variant="h4"
              sx={{
                fontFamily: 'Orbitron, monospace',
                color: '#00FFFF',
                fontWeight: 800,
                letterSpacing: 2,
                textShadow: '0 0 30px #00FFFF',
              }}
            >
              {current.title}
            </Typography>
          ) : (
            <BootText text={current?.text} color={current?.color} />
          )}
        </motion.div>
      </AnimatePresence>

      {/* SKIP HINT */}
      {!exiting && (
        <Typography
          variant="caption"
          sx={{
            position: 'absolute',
            bottom: 24,
            opacity: 0.6,
            fontFamily: 'Orbitron, monospace',
            letterSpacing: 1,
          }}
        >
          Click anywhere or press ESC to skip
        </Typography>
      )}

      {/* EXIT OVERLAY */}
      {exiting && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          style={{
            position: 'absolute',
            inset: 0,
            background:
              'radial-gradient(circle at center, rgba(0,255,255,0.18), rgba(0,0,0,0.95))',
            backdropFilter: 'blur(10px)',
          }}
        />
      )}
    </Box>
  );
}
