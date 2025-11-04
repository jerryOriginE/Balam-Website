import { Container, Typography, Button, Box, Paper, Card, CardContent } from '@mui/material';
import { motion } from 'framer-motion';
import Movie from "../assets/videos/movie.mp4";


const LandingPage = () => {
  return (
    <Paper
      sx={{
        minHeight: '100vh',
        background: 'radial-gradient(circle at center, #000000 20%, #00111f 100%)',
        color: 'white',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        p: 4,
        overflow: 'hidden',
        position: 'relative',
      }}
      elevation={0}
    >
      {/* Video background */}
      <Box
        component="video"
        src={Movie}
        autoPlay
        loop
        muted
        playsInline
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          zIndex: 0,
          opacity: 0.5,
        }}
      >
      </Box>
      {/* Ambient gradients */}
      <Box
        sx={{
          position: 'absolute',
          inset: 0,
          background: `
            radial-gradient(circle at 70% 30%, rgba(0,191,255,0.08), transparent 70%),
            radial-gradient(circle at 30% 70%, rgba(0,255,170,0.05), transparent 80%)
          `,
          zIndex: 0,
          animation: 'glow 6s ease-in-out infinite alternate',
        }}
      />

      {/* Central content */}
      <Container sx={{ position: 'relative', zIndex: 2, maxWidth: 900 }}>
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <Typography
            variant="h2"
            sx={{
              fontWeight: 800,
              color: '#00BFFF',
              textShadow: '0 0 25px rgba(0,191,255,0.7)',
              letterSpacing: 2,
              fontFamily: 'Orbitron, sans-serif',
              mb: 2,
            }}
          >
            BALAM 3527
          </Typography>

          <Typography
            variant="h5"
            sx={{
              color: '#a8cfff',
              fontFamily: 'Orbitron, sans-serif',
              mb: 3,
            }}
          >
            Pagina oficial del equipo de robótica BALAM 3527
          </Typography>

          <Typography
            variant="body1"
            sx={{
              mb: 4,
              color: '#dcdcdc',
              maxWidth: 600,
              mx: 'auto',
              fontSize: '1.1rem',
            }}
          >
            Explora y descubre más sobre nuestro equipo, proyectos y logros en el mundo de la robótica competitiva.
          </Typography>
        </motion.div>

      </Container>

      <style>{`
        @keyframes glow {
          from { opacity: 0.5; transform: scale(1); }
          to { opacity: 1; transform: scale(1.03); }
        }
      `}</style>
    </Paper>
  );
};

export default LandingPage;
