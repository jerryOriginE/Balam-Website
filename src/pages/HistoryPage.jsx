import historyData from '../data/historyData';
import { Link } from 'react-router-dom';
import { Box, Typography, Grid, Card, CardContent, CardMedia, Paper, Container } from '@mui/material';
import { motion } from 'framer-motion';
import Movie from "../assets/videos/movie3.mp4";

export default function HistoryPage() {
  const years = Object.entries(historyData)
  .sort(([a], [b]) => Number(b) - Number(a)); // sort numerically by key

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
      {/* === Video Background === */}
      <Box
        component="video"
        src={Movie}
        autoPlay
        loop
        muted
        playsInline
        sx={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          objectFit: "cover",
          zIndex: 0,
          opacity: 0.45,
        }}
      />

      {/* === Ambient Glow === */}
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

      {/* === Content === */}
      <Container
        sx={{
          position: 'relative',
          zIndex: 2,
          py: { xs: 6, md: 10 },
          maxWidth: 1300,
        }}
      >
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          style={{ textAlign: 'center', marginBottom: '3rem' }}
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
            Nuestra Historia
          </Typography>
          <Typography
            variant="h6"
            sx={{
              color: '#a8cfff',
              fontFamily: 'Orbitron, sans-serif',
            }}
          >
            Conoce la evolución de BALAM desde 2011 hasta hoy
          </Typography>
        </motion.div>

        {/* === Uniform Grid === */}
        <Grid container spacing={3} justifyContent="center" alignItems="stretch">
          {years.map(([year, yearData], index) => (
            <Grid
              item
              xs={12}
              sm={6}
              md={4}
              lg={3}
              key={yearData.year}
              sx={{ display: 'flex', justifyContent: 'center' }}
            >
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05, duration: 0.4 }}
                whileHover={{ scale: 1.05, y: -5 }}
                style={{ width: '100%', maxWidth: 300 }} // ✅ fixes equal card width
              >
                <Card
                  component={Link}
                  to={`/history/${year}`}
                  sx={{
                    textDecoration: 'none',
                    background: 'rgba(255, 255, 255, 0.05)',
                    color: '#a8cfff',
                    border: '1px solid rgba(0,191,255,0.2)',
                    borderRadius: 3,
                    overflow: 'hidden',
                    backdropFilter: 'blur(6px)',
                    transition: 'all 0.3s ease',
                    height: 360, // ✅ fixed uniform height
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    '&:hover': {
                      borderColor: '#00e5ff',
                      boxShadow: '0 0 25px rgba(0,229,255,0.3)',
                    },
                  }}
                >
                  {yearData.robot.image && (
                    <CardMedia
                      component="img"
                      image={yearData.robot.image}
                      alt={yearData.robot.name}
                      sx={{
                        height: 140,
                        objectFit: 'cover',
                        borderBottom: '1px solid rgba(0,191,255,0.3)',
                        filter: 'brightness(0.85)',
                        transition: 'filter 0.3s ease',
                        '&:hover': { filter: 'brightness(1)' },
                      }}
                    />
                  )}

                  <CardContent sx={{ textAlign: 'center', py: 2, px: 2 }}>
                    <Typography
                      variant="h5"
                      sx={{
                        fontFamily: 'Orbitron, sans-serif',
                        fontWeight: 700,
                        color: '#00e5ff',
                      }}
                    >
                      {yearData.year}
                    </Typography>

                    <Typography
                      variant="subtitle1"
                      sx={{
                        mt: 0.5,
                        fontWeight: 500,
                        color: '#a8cfff',
                        fontSize: '0.9rem',
                      }}
                    >
                      {yearData.robot.name}
                    </Typography>

                    {yearData.competitions?.length > 0 && (
                      <Box
                        sx={{
                          mt: 1,
                          display: 'flex',
                          flexDirection: 'column',
                          alignItems: 'center',
                          gap: 0.3,
                        }}
                      >
                        {yearData.competitions.slice(0, 2).map((comp, idx) => (
                          <Typography
                            key={idx}
                            variant="body2"
                            sx={{
                              color: '#89b8ff',
                              opacity: 0.85,
                              fontSize: '0.8rem',
                              whiteSpace: 'nowrap',
                              textOverflow: 'ellipsis',
                              overflow: 'hidden',
                              maxWidth: '90%',
                            }}
                          >
                            {comp.name}
                          </Typography>
                        ))}

                        {yearData.competitions.length > 2 && (
                          <Typography
                            variant="body2"
                            sx={{
                              color: '#00e5ff',
                              fontSize: '0.75rem',
                              opacity: 0.6,
                            }}
                          >
                            +{yearData.competitions.length - 2} más
                          </Typography>
                        )}
                      </Box>
                    )}
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>

        {/* Footer */}
        <Typography
          variant="body2"
          sx={{
            mt: 10,
            color: '#87CEFA',
            fontFamily: 'Orbitron, sans-serif',
            fontSize: '0.9rem',
            textAlign: 'center',
          }}
        >
          “Cada año, un nuevo desafío. Cada robot, una nueva historia.”
        </Typography>
      </Container>

      <style>{`
        @keyframes glow {
          from { opacity: 0.5; transform: scale(1); }
          to { opacity: 1; transform: scale(1.03); }
        }
      `}</style>
    </Paper>
  );
}
