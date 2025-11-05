import { Box, Typography, Grid, Card, CardMedia, CardContent, Button, Paper, Container } from '@mui/material';
import { motion } from 'framer-motion';
import sponsorsData from '../data/sponsorData';
import Movie from "../assets/videos/movie4.mp4";

export default function SponsorsPage() {
  return (
    <Paper
      sx={{
        minHeight: '100vh',
        background: 'radial-gradient(circle at center, #000000 20%, #00111f 100%)',
        color: 'white',
        overflow: 'hidden',
        position: 'relative',
      }}
      elevation={0}
    >
      {/* === Background Video === */}
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
          width: '100vw',
          height: '100vh',
          objectFit: 'cover',
          zIndex: 0,
          opacity: 0.45,
        }}
      />

      {/* === Ambient Gradient Overlays === */}
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

      {/* === Main Content === */}
      <Container sx={{ position: 'relative', zIndex: 2, py: 10 }}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          style={{ textAlign: 'center', marginBottom: '3rem' }}
        >
          <Typography
            variant="h3"
            sx={{
              color: '#00e5ff',
              fontWeight: 800,
              textShadow: '0 0 25px rgba(0,191,255,0.6)',
              mb: 1,
              fontFamily: 'Orbitron, sans-serif',
            }}
          >
            Nuestros Patrocinadores
          </Typography>
          <Typography
            variant="h6"
            sx={{
              color: '#a8cfff',
              fontFamily: 'Orbitron, sans-serif',
              mb: 4,
            }}
          >
            Gracias a quienes hacen posible nuestro viaje y aprendizaje en FRC
          </Typography>
        </motion.div>

        {/* Sponsors Grid */}
        <Grid container spacing={4} justifyContent="center">
          {sponsorsData.map((sponsor, index) => (
            <Grid item xs={12} sm={6} md={4} key={sponsor.id}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
              >
                <Card
                  sx={{
                    backgroundColor: 'rgba(0,10,25,0.8)',
                    border: '1px solid rgba(0,191,255,0.3)',
                    color: '#a8cfff',
                    borderRadius: 3,
                    textAlign: 'center',
                    height: '100%',
                    overflow: 'hidden',
                    boxShadow: '0 0 20px rgba(0,191,255,0.1)',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                    '&:hover': {
                      transform: 'scale(1.03)',
                      boxShadow: '0 0 25px rgba(0,229,255,0.3)',
                    },
                  }}
                >
                  <CardMedia
                    component="img"
                    image={sponsor.logo}
                    alt={sponsor.name}
                    sx={{
                      objectFit: 'contain',
                      height: 180,
                      p: 2,
                      backgroundColor: 'rgba(0,0,0,0.2)',
                      borderBottom: '1px solid rgba(0,191,255,0.2)',
                    }}
                  />
                  <CardContent>
                    <Typography
                      variant="h5"
                      sx={{
                        color: '#00e5ff',
                        fontWeight: 600,
                        fontFamily: 'Orbitron, sans-serif',
                        mb: 1,
                      }}
                    >
                      {sponsor.name}
                    </Typography>
                    <Typography variant="subtitle1" sx={{ color: '#66b2ff', mb: 1 }}>
                      {sponsor.level}
                    </Typography>
                    <Typography variant="body2" sx={{ color: '#cce7ff', mb: 2 }}>
                      {sponsor.description}
                    </Typography>
                    {sponsor.website && (
                      <Button
                        href={sponsor.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        sx={{
                          color: '#00e5ff',
                          border: '1px solid rgba(0,229,255,0.3)',
                          borderRadius: 2,
                          px: 2,
                          py: 0.5,
                          fontFamily: 'Orbitron, sans-serif',
                          '&:hover': {
                            backgroundColor: 'rgba(0,229,255,0.1)',
                            boxShadow: '0 0 10px rgba(0,229,255,0.3)',
                          },
                        }}
                      >
                        Visitar sitio
                      </Button>
                    )}
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Glow Animation */}
      <style>{`
        @keyframes glow {
          from { opacity: 0.5; transform: scale(1); }
          to { opacity: 1; transform: scale(1.03); }
        }
      `}</style>
    </Paper>
  );
}
