import { Container, Typography, Box, Paper, Grid, Card, CardContent } from '@mui/material';
import { motion } from 'framer-motion';
import { Icon } from "@iconify/react";
import Movie from "../assets/videos/movie2.mp4";

const AboutUs = () => {
  return (
    <Paper
      sx={{
        minHeight: '100vh',
        background: 'radial-gradient(circle at center, #000000 20%, #00111f 100%)',
        color: 'white',
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
          position: "fixed", // use fixed so it always covers the viewport
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          objectFit: "cover",
          zIndex: 0,
          opacity: 0.45,
          margin: 0,
          padding: 0,
        }}
      />


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

      {/* Content */}
      <Container sx={{ position: 'relative', zIndex: 2, maxWidth: 1100, mt: 6 }}>
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
              mb: 4,
            }}
          >
            Equipo de Robótica del Tecnológico de Monterrey – PrepaTec Esmeralda
          </Typography>

          <Typography
            variant="body1"
            sx={{
              mb: 5,
              color: '#dcdcdc',
              maxWidth: 800,
              mx: 'auto',
              fontSize: '1.1rem',
              lineHeight: 1.7,
            }}
          >
            Somos el equipo <strong>BALAM 3527</strong>, una comunidad apasionada por la innovación,
            la tecnología y el trabajo en equipo. Desde <strong>2011</strong> participamos en la
            competencia internacional <strong>FIRST Robotics Competition (FRC)</strong>, donde
            estudiantes de preparatoria diseñan, construyen y programan robots para competir en
            desafíos de ingeniería a nivel mundial.
            <br /><br />
            Formamos parte del <strong>Tecnológico de Monterrey – PrepaTec Sede Esmeralda</strong>, en el
            <strong> Estado de México</strong>, y cada temporada trabajamos para inspirar a más jóvenes a
            explorar la ciencia, la tecnología y la innovación con un propósito: <em>crear un futuro mejor a través de la robótica</em>.
          </Typography>
        </motion.div>

        {/* Cards Section */}
        <Grid container spacing={3} justifyContent="center">
          {[
            {
              title: '¿Quiénes somos?',
              text: 'Un grupo de estudiantes, mentores y exalumnos unidos por la pasión hacia la robótica y la ingeniería. Promovemos el aprendizaje práctico y el trabajo en equipo.',
            },
            {
              title: '¿Qué hacemos?',
              text: 'Diseñamos, construimos y programamos robots para competir en FRC, además de realizar proyectos de impacto social y talleres STEM en nuestra comunidad.',
            },
            {
              title: '¿Qué es FRC?',
              text: 'FIRST Robotics Competition (FRC) es una competencia internacional donde equipos de estudiantes de preparatoria diseñan y construyen robots para enfrentar desafíos de ingeniería cada año.',
            },
            {
              title: 'Logros',
              text: 'A lo largo de los años, hemos participado en múltiples competencias nacionales e internacionales, obteniendo premios por diseño, innovación y trabajo en equipo.',
            },
            {
              title: 'Nuestros valores',
              text: 'Respeto, innovación, perseverancia y colaboración. Creemos que cada miembro tiene algo único que aportar, y juntos hacemos de BALAM una gran familia.',
            },
            {
              title: 'Nuestras meta',
              text: 'Seguir creciendo como equipo, inspirar a más jóvenes a unirse al mundo STEM y continuar dejando huella en la comunidad de robótica a nivel nacional e internacional.',
            }
          ].map((item, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <Card
                  sx={{
                    background: 'rgba(255, 255, 255, 0.05)',
                    border: '1px solid rgba(0,191,255,0.2)',
                    borderRadius: 3,
                    color: '#fff',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    backdropFilter: 'blur(8px)',
                  }}
                >
                  <CardContent>
                    <Typography
                      variant="h6"
                      sx={{
                        color: '#00BFFF',
                        fontFamily: 'Orbitron, sans-serif',
                        mb: 1,
                      }}
                    >
                      {item.title}
                    </Typography>
                    <Typography variant="body2" sx={{ color: '#dcdcdc', lineHeight: 1.6 }}>
                      {item.text}
                    </Typography>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>

        <Typography
          variant="body2"
          sx={{
            mt: 8,
            color: '#87CEFA',
            fontFamily: 'Orbitron, sans-serif',
            fontSize: '0.9rem',
          }}
        >
          “More than robots — building the future, one idea at a time.”
        </Typography>

        {/* Social Media Section */}
        <Box
          sx={{
            mt: 10,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 2,
          }}
        >
          <Typography
            variant="h5"
            sx={{
              color: "#00BFFF",
              fontFamily: "Orbitron, sans-serif",
              mb: 2,
              textShadow: "0 0 20px rgba(0,191,255,0.6)",
              letterSpacing: 1,
            }}
          >
            Síguenos en nuestras redes
          </Typography>

          <Box sx={{ display: "flex", gap: 3, flexWrap: "wrap", justifyContent: "center" }}>
            {[
              { name: "Instagram", icon: "mdi:instagram", url: "https://www.instagram.com/balam_3527/" },
              { name: "TikTok", icon: "ic:baseline-tiktok", url: "https://www.tiktok.com/@balam_3527" },
              { name: "Facebook", icon: "ic:baseline-facebook", url: "https://www.facebook.com/tecbalam3527" },
              { name: "YouTube", icon: "mdi:youtube", url: "https://www.youtube.com/@TecBalamZE/videos" },
              { name: "Gmail", icon: "mdi:gmail", url: "mailto:balam3527@gmail.com" },
            ].map((social, i) => (
              <motion.a
                key={i}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, y: -4 }}
                transition={{ type: "spring", stiffness: 300 }}
                style={{
                  color: "#a8cfff",
                  textDecoration: "none",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: 60,
                    height: 60,
                    borderRadius: "50%",
                    background: "rgba(255,255,255,0.05)",
                    border: "1px solid rgba(0,191,255,0.3)",
                    boxShadow: "0 0 15px rgba(0,191,255,0.2)",
                    transition: "all 0.3s ease",
                    "&:hover": {
                      background: "linear-gradient(135deg, #00e5ff, #00bfff)",
                      boxShadow: "0 0 25px rgba(0,191,255,0.8)",
                    },
                  }}
                >
                  <Icon icon={social.icon} width="28" height="28" />
                </Box>
              </motion.a>
            ))}
          </Box>
        </Box>


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

export default AboutUs;
