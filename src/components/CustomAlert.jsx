import React from 'react';
import { Snackbar, Alert } from '@mui/material';
import { motion } from 'framer-motion';

export default function CustomAlert({ open, onClose, message, severity = 'info' }) {
  return (
    <Snackbar
      open={open}
      autoHideDuration={3000}
      onClose={onClose}
      anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 20 }}
        transition={{ duration: 0.3 }}
      >
        <Alert
          onClose={onClose}
          severity={severity}
          sx={{
            backgroundColor:
              severity === 'success'
                ? '#003b1f'
                : severity === 'error'
                ? '#3b0000'
                : '#001f3b',
            color:
              severity === 'success'
                ? '#00FF7F'
                : severity === 'error'
                ? '#FF6B6B'
                : '#00BFFF',
            border: '1px solid rgba(0,191,255,0.3)',
            fontFamily: 'Orbitron, sans-serif',
            boxShadow: '0 0 15px rgba(0,191,255,0.4)',
            textShadow: '0 0 6px rgba(0,191,255,0.4)',
          }}
        >
          {message}
        </Alert>
      </motion.div>
    </Snackbar>
  );
}
