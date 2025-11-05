import { Box, Typography, Grid, Card, CardContent, Button, Paper, Container } from "@mui/material";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Movie from "../assets/videos/movie5.mp4";

export default function JoinUsPage() {
  const joinOptions = [
    {
      id: 1,
      title: "Únete como Estudiante",
      description:
        "Forma parte del equipo BALAM 3527 y aprende sobre robótica, programación, diseño y liderazgo. No necesitas experiencia previa — solo curiosidad y pasión por aprender.",
      actionLabel: "Aplicar ahora",
      link: "https://www.instagram.com/balam_3527/",
    },
    {
      id: 2,
      title: "Conviértete en Mentor",
      description:
        "Ayúdanos a guiar a la próxima generación de ingenieros y creadores. Buscamos mentores en programación, mecánica, electrónica, y gestión de proyectos.",
      actionLabel: "Contáctanos",
      link: "/contact",
    },
    {
      id: 3,
      title: "Apóyanos como Patrocinador",
      description:
        "Tu apoyo nos permite competir internacionalmente y seguir desarrollando tecnología de alto impacto. Ofrecemos presencia en uniformes, redes y robots.",
      actionLabel: "Ver oportunidades",
      link: "/contact",
    },
  ];

  return (
    <Paper
      sx={{
        minHeight: "100vh",
        background: "radial-gradient(circle at center, #000000 20%, #00111f 100%)",
        color: "white",
        overflow: "hidden",
        position: "relative",
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

      {/* === Ambient Gradient Overlays === */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          background: `
            radial-gradient(circle at 70% 30%, rgba(0,191,255,0.08), transparent 70%),
            radial-gradient(circle at 30% 70%, rgba(0,255,170,0.05), transparent 80%)
          `,
          zIndex: 0,
          animation: "glow 6s ease-in-out infinite alternate",
        }}
      />

      {/* === Main Content === */}
      <Container sx={{ position: "relative", zIndex: 2, py: 10 }}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          style={{ textAlign: "center", marginBottom: "3rem" }}
        >
          <Typography
            variant="h3"
            sx={{
              color: "#00e5ff",
              fontWeight: 800,
              textShadow: "0 0 25px rgba(0,191,255,0.6)",
              mb: 1,
              fontFamily: "Orbitron, sans-serif",
            }}
          >
            ¡Únete a BALAM 3527!
          </Typography>
          <Typography
            variant="h6"
            sx={{
              color: "#a8cfff",
              fontFamily: "Orbitron, sans-serif",
              mb: 4,
              maxWidth: "800px",
              mx: "auto",
            }}
          >
            Sé parte del equipo. Ya sea como estudiante, mentor o patrocinador, tu contribución
            ayuda a impulsar la innovación, el trabajo en equipo y la pasión por la robótica.
          </Typography>
        </motion.div>

        {/* === Join Options Grid === */}
        <Grid container spacing={4} justifyContent="center">
          {joinOptions.map((option, index) => (
            <Grid item xs={12} sm={6} md={4} key={option.id}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.15, duration: 0.6 }}
              >
                <Card
                  sx={{
                    backgroundColor: "rgba(0,10,25,0.8)",
                    border: "1px solid rgba(0,191,255,0.3)",
                    color: "#a8cfff",
                    borderRadius: 3,
                    textAlign: "center",
                    height: "100%",
                    overflow: "hidden",
                    boxShadow: "0 0 20px rgba(0,191,255,0.1)",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    transition: "transform 0.3s ease, box-shadow 0.3s ease",
                    "&:hover": {
                      transform: "scale(1.03)",
                      boxShadow: "0 0 25px rgba(0,229,255,0.3)",
                    },
                  }}
                >
                  <CardContent>
                    <Typography
                      variant="h5"
                      sx={{
                        color: "#00e5ff",
                        fontWeight: 600,
                        fontFamily: "Orbitron, sans-serif",
                        mb: 1.5,
                      }}
                    >
                      {option.title}
                    </Typography>
                    <Typography variant="body2" sx={{ color: "#cce7ff", mb: 3 }}>
                      {option.description}
                    </Typography>
                    <Button
                      component={Link}
                      to={option.link}
                      target={option.link.startsWith("http") ? "_blank" : "_self"}
                      rel="noopener noreferrer"
                      sx={{
                        color: "#00e5ff",
                        border: "1px solid rgba(0,229,255,0.3)",
                        borderRadius: 2,
                        px: 2,
                        py: 0.5,
                        fontFamily: "Orbitron, sans-serif",
                        "&:hover": {
                          backgroundColor: "rgba(0,229,255,0.1)",
                          boxShadow: "0 0 10px rgba(0,229,255,0.3)",
                        },
                      }}
                    >
                      {option.actionLabel}
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>

        {/* Back Button */}
        <Box sx={{ mt: 6, textAlign: "center" }}>
          <Button
            component={Link}
            to="/"
            sx={{
              color: "#00e5ff",
              border: "1px solid #00e5ff",
              borderRadius: 2,
              px: 3,
              py: 1,
              fontWeight: 600,
              fontFamily: "Orbitron, sans-serif",
              "&:hover": {
                backgroundColor: "rgba(0,229,255,0.1)",
                boxShadow: "0 0 15px rgba(0,229,255,0.3)",
              },
            }}
          >
            ← Volver al inicio
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
