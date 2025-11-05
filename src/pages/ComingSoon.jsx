import { Box, Typography, Button, Paper } from '@mui/material';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import ConstructionIcon from '@mui/icons-material/Construction';

const ComingSoon = () => (
  <Paper
    sx={{
      height: '100vh',
      width: '100vw',
      background: 'radial-gradient(circle at top left, #000000 20%, #00111f 100%)',
      color: 'white',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      overflow: 'hidden',
      position: 'relative',
      p: 4,
    }}
    elevation={0}
  >
    {/* Blue glow background */}
    <Box
      sx={{
        position: 'absolute',
        inset: 0,
        background: 'radial-gradient(circle at 50% 50%, rgba(0,191,255,0.15), transparent 70%)',
        animation: 'glow 6s infinite alternate',
        zIndex: 0,
      }}
    />

    <motion.div
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      style={{ zIndex: 1 }}
    >
      <motion.div
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.8 }}
      >
        <ConstructionIcon
          sx={{
            fontSize: 100,
            color: '#00BFFF',
            textShadow: '0 0 30px rgba(0,191,255,0.7)',
            mb: 2,
          }}
        />
      </motion.div>

      <Typography
        variant="h3"
        sx={{
          fontWeight: 800,
          color: '#00BFFF',
          textShadow: '0 0 30px rgba(0,191,255,0.7)',
          fontFamily: 'Orbitron, sans-serif',
          letterSpacing: 3,
          mb: 1,
        }}
      >
        EN DESARROLLO
      </Typography>

      <Typography
        variant="h6"
        sx={{
          mb: 4,
          color: '#a8cfff',
          fontFamily: 'Orbitron, sans-serif',
        }}
      >
        Nuestro equipo está trabajando arduamente para traerte esta sección pronto...
      </Typography>

      <motion.div whileHover={{ scale: 1.05 }}>
        <Button
          variant="contained"
          component={Link}
          to="/"
          sx={{
            bgcolor: '#00BFFF',
            color: '#000',
            fontWeight: 600,
            px: 3,
            py: 1.2,
            borderRadius: 2,
            '&:hover': {
              bgcolor: '#00A2E8',
              boxShadow: '0 0 25px #00BFFF',
            },
          }}
        >
          Regresar al Inicio
        </Button>
      </motion.div>
    </motion.div>

    <style>{`
      @keyframes glow {
        from { opacity: 0.4; transform: scale(1); }
        to { opacity: 1; transform: scale(1.05); }
      }
    `}</style>
  </Paper>
);

export default ComingSoon;
