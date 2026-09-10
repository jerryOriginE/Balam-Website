import { Container, Typography, Button, Box, Paper, Card, CardContent } from '@mui/material';
import { motion } from 'framer-motion';
import ConfirmationNumberIcon from '@mui/icons-material/ConfirmationNumber';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import Movie from "../assets/videos/movie.mp4";

const LandingPage = () => {
  return (
    <Paper
      sx={{
        minHeight: '100vh',
        background: 'radial-gradient(circle at center, #000000 20%, #00111f 100%)',
        color: 'white',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        p: 4,
        overflowY: 'auto',
        position: 'relative',
        pt: '100px',
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
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          zIndex: 0,
          opacity: 0.5,
        }}
      />
      {/* Ambient gradients */}
      <Box
        sx={{
          position: 'fixed',
          inset: 0,
          background: `
            radial-gradient(circle at 70% 30%, rgba(0,191,255,0.08), transparent 70%),
            radial-gradient(circle at 30% 70%, rgba(0,255,170,0.05), transparent 80%)
          `,
          zIndex: 0,
          animation: 'glow 6s ease-in-out infinite alternate',
          pointerEvents: 'none',
        }}
      />

      {/* Central content */}
      <Container sx={{ position: 'relative', zIndex: 2, maxWidth: 900, my: 'auto' }}>
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
            Pagina oficial del equipo de robótica de Prepatec Esmeralda
          </Typography>

          <Typography
            variant="body1"
            sx={{
              mb: 5,
              color: '#dcdcdc',
              maxWidth: 600,
              mx: 'auto',
              fontSize: '1.1rem',
            }}
          >
            Explora y descubre más sobre nuestro equipo, proyectos y logros en el mundo de la robótica competitiva.
          </Typography>
        </motion.div>

        {/* GET UP TEC Event Special Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <Card
            sx={{
              background: 'linear-gradient(145deg, rgba(0, 17, 31, 0.85), rgba(0, 0, 0, 0.9))',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(0, 191, 255, 0.4)',
              borderRadius: 4,
              boxShadow: '0 0 30px rgba(0, 191, 255, 0.3)',
              overflow: 'hidden',
              textAlign: 'left',
              mb: 4,
            }}
          >
            <CardContent sx={{ p: { xs: 3, md: 5 } }}>
              <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, justifyContent: 'space-between', alignItems: 'center', gap: 3 }}>
                <Box>
                  <Typography
                    variant="caption"
                    sx={{
                      color: '#00FFAA',
                      fontFamily: 'Orbitron, sans-serif',
                      fontWeight: 700,
                      letterSpacing: 2,
                      display: 'block',
                      mb: 1,
                    }}
                  >
                    PRÓXIMO EVENTO ESPECIAL
                  </Typography>
                  <Typography
                    variant="h4"
                    sx={{
                      fontWeight: 800,
                      color: '#fff',
                      fontFamily: 'Orbitron, sans-serif',
                      textShadow: '0 0 15px rgba(0,191,255,0.5)',
                      mb: 2,
                    }}
                  >
                    GET UP TEC
                  </Typography>

                  <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5, mb: 3 }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, color: '#a8cfff' }}>
                      <CalendarMonthIcon sx={{ color: '#00BFFF' }} />
                      <Typography variant="body1" sx={{ fontWeight: 600 }}>
                        9 de Noviembre
                      </Typography>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, color: '#a8cfff' }}>
                      <LocationOnIcon sx={{ color: '#00BFFF' }} />
                      <Typography variant="body1" sx={{ fontWeight: 600 }}>
                        Six Flags México
                      </Typography>
                    </Box>
                  </Box>

                  <Typography variant="body2" sx={{ color: '#dcdcdc', maxWidth: 450, lineHeight: 1.6 }}>
                    Acompaña a Balam 3527 en este gran evento. ¡Prepárate para vivir una experiencia inolvidable llena de emoción, y adrenalina en Six Flags!
                  </Typography>
                </Box>

                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2, width: { xs: '100%', md: 'auto' } }}>
                  <Button
                    variant="contained"
                    href="/lookup"
                    startIcon={<ConfirmationNumberIcon />}
                    sx={{
                      backgroundColor: '#00BFFF',
                      color: '#000',
                      fontWeight: 700,
                      fontFamily: 'Orbitron, sans-serif',
                      py: 1.5,
                      px: 4,
                      borderRadius: 2,
                      boxShadow: '0 0 20px rgba(0,191,255,0.5)',
                      '&:hover': {
                        backgroundColor: '#0099cc',
                        boxShadow: '0 0 30px rgba(0,191,255,0.8)',
                      },
                      width: { xs: '100%', md: 'auto' },
                      whiteSpace: 'nowrap',
                    }}
                  >
                    Consultar mi Boleto
                  </Button>
                </Box>
              </Box>
            </CardContent>
          </Card>
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