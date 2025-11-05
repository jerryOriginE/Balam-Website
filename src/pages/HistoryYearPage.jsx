import { useParams, Link } from 'react-router-dom';
import historyData from '../data/historyData';
import {
  Box,
  Typography,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Divider,
  Button,
  Paper,
  Container,
} from '@mui/material';
import { motion } from 'framer-motion';
import Movie from "../assets/videos/movie3.mp4";

export default function HistoryYearPage() {
  const { year } = useParams();
  const data = historyData[year];

  if (!data) {
    return (
      <Box
        sx={{
          p: 6,
          textAlign: 'center',
          color: '#a8cfff',
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'radial-gradient(circle at center, #000000 20%, #00111f 100%)',
        }}
      >
        <Typography variant="h4" sx={{ mb: 2 }}>Año no encontrado</Typography>
        <Button
          component={Link}
          to="/history"
          sx={{
            color: '#00e5ff',
            border: '1px solid #00e5ff',
            fontWeight: 600,
            '&:hover': {
              backgroundColor: 'rgba(0,229,255,0.1)',
              boxShadow: '0 0 15px rgba(0,229,255,0.3)',
            },
          }}
        >
          Volver al historial
        </Button>
      </Box>
    );
  }

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
            {data.year}
          </Typography>
          <Typography
            variant="h5"
            sx={{
              color: '#a8cfff',
              fontFamily: 'Orbitron, sans-serif',
              mb: 4,
            }}
          >
            {data.robot.name}
          </Typography>
        </motion.div>

        {/* Robot + Team Section */}
        <Grid container spacing={4}>
          {/* Robot Section */}
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Card
                sx={{
                  backgroundColor: 'rgba(0,10,25,0.8)',
                  border: '1px solid rgba(0,191,255,0.3)',
                  color: '#a8cfff',
                  borderRadius: 3,
                  overflow: 'hidden',
                  boxShadow: '0 0 20px rgba(0,191,255,0.1)',
                }}
              >
                <CardMedia
                  component="img"
                  image={data.robot.image}
                  alt={data.robot.name}
                  sx={{
                    height: 300,
                    objectFit: 'contain',
                    backgroundColor: 'rgba(0,0,0,0.2)',
                    borderBottom: '1px solid rgba(0,191,255,0.2)',
                  }}
                />
                <CardContent>
                  <Typography variant="body1" sx={{ color: '#cce7ff', textAlign: 'justify' }}>
                    {data.robot.description}
                  </Typography>
                </CardContent>
              </Card>
            </motion.div>
          </Grid>

          {/* Team + Competitions */}
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.6 }}
            >
              {/* Team */}
              <Typography variant="h5" sx={{ color: '#00e5ff', mb: 1 }}>
                Equipo
              </Typography>
              <Box sx={{ pl: 1 }}>
                {data.team.map((member, i) => (
                  <Typography key={i}>• {member.name} – {member.role}</Typography>
                ))}
              </Box>

              <Divider sx={{ my: 3, borderColor: 'rgba(0,229,255,0.2)' }} />

              {/* Competitions */}
              <Typography variant="h5" sx={{ color: '#00e5ff', mb: 1 }}>
                Competencias
              </Typography>

              {Array.isArray(data.competitions)
                ? data.competitions.map((comp, i) => (
                    <Box key={i} sx={{ mb: 2, pl: 1 }}>
                      <Typography variant="subtitle1" sx={{ color: '#a8cfff', fontWeight: 600 }}>
                        {comp.name}
                      </Typography>
                      {comp.ranking && (
                        <Typography variant="body2" sx={{ color: '#9cdfff' }}>
                          Ranking: {comp.ranking}
                        </Typography>
                      )}
                      {comp.awards?.length > 0 && (
                        <Typography variant="body2" sx={{ color: '#9cdfff' }}>
                          Premios: {comp.awards.join(', ')}
                        </Typography>
                      )}
                    </Box>
                  ))
                : data.competition && (
                    <Box sx={{ pl: 1 }}>
                      <Typography variant="subtitle1">{data.competition.name}</Typography>
                      <Typography variant="body2">
                        Awards: {data.competition.awards.join(', ')}
                      </Typography>
                      <Typography variant="body2">
                        Ranking: {data.competition.ranking}
                      </Typography>
                    </Box>
                  )}
            </motion.div>
          </Grid>
        </Grid>

        {/* Summary Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          <Box sx={{ mt: 6, maxWidth: '800px', mx: 'auto' }}>
            <Typography
              variant="h6"
              sx={{
                color: '#00e5ff',
                mb: 1,
                textAlign: 'center',
                fontFamily: 'Orbitron, sans-serif',
              }}
            >
              Resumen del año
            </Typography>
            <Typography variant="body1" sx={{ color: '#cce7ff', textAlign: 'justify' }}>
              {data.summary}
            </Typography>
          </Box>
        </motion.div>

        {/* Back Button */}
        <Box sx={{ mt: 6, textAlign: 'center' }}>
          <Button
            component={Link}
            to="/history"
            sx={{
              color: '#00e5ff',
              border: '1px solid #00e5ff',
              borderRadius: 2,
              px: 3,
              py: 1,
              fontWeight: 600,
              fontFamily: 'Orbitron, sans-serif',
              '&:hover': {
                backgroundColor: 'rgba(0,229,255,0.1)',
                boxShadow: '0 0 15px rgba(0,229,255,0.3)',
              },
            }}
          >
            ← Volver al historial
          </Button>
        </Box>
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
