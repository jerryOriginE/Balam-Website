import { Container, Box, Paper, Typography } from "@mui/material";
import { motion } from "framer-motion";
import TeamSection from "../components/TeamSection";
import Image from "../assets/img/team.jpg";

const TeamPage = () => {
  // Example structure — replace with your real leads/members
  const teamData = [
    {
      title: "Mechanical",
      description:
        "El área mecánica es responsable de diseñar, fabricar y ensamblar el robot. También se encarga de construir el campo de práctica para nuestras pruebas y simulaciones.",
      subteams: [
        {
          name: "Team Robot",
          members: [
            { name: "Ivanna", role: "Lead Mecánico", photo: "" },
            { name: "Connie", role: "Constructor", photo: "" },
            { name: "Esteban", role: "Constructor", photo: "" }, /*
            { name: "Sebastián", role: "Constructor", photo: "" }, ¨*/
          ],
        },
        {
          name: "Team Cancha",
          members: [
            { name: "Luis Daniel", role: "Líder de Cancha", photo: "" },
            { name: "Luca", role: "Constructor", photo: "" },
            { name: "Alexis", role: "Constructor", photo: "" },
            { name: "Mateo", role: "Constructor", photo: "" },
          ],
        },
        {
          name: "Rookie Mechanics",
          members: [
            { name: "Sebas", role: "Rookie", photo: "" },
          ],
        }
      ],
    },
    {
      title: "Electrical",
      description:
        "El área eléctrica se encarga del cableado, control de energía, y conexión entre los sistemas del robot. Garantizan que todo funcione de manera segura y eficiente.",
      subteams: [
        {
          name: "Equipo Eléctrico",
          members: [
            { name: "Carlos Martínez", role: "Lead Eléctrico", photo: "" },
            { name: "Charly", role: "Rookie", photo: "" },
            { name: "Manu", role: "Rookie", photo: "" },
            { name: "Abraham", role: "Rookie", photo: "" },
            { name: "Camilo", role: "Rookie", photo: "" },
          ],
        },
      ],
    },
    {
      title: "Programming",
      description:
        "El equipo de programación desarrolla el código que da vida al robot. Trabajan con controladores, sensores, visión por computadora y estrategias autónomas.",
      subteams: [
        {
          name: "Equipo de Programación",
          members: [
            { name: "Gerardo", role: "Lead de Programación", photo: "" },
          ],
        },
        {
          name: "Equipo Autonomo",
          members: [
            { name: "Fernando", role: "Lead de Autonomía", photo: "" },
            { name: "Cami", role: "Desarrolladora", photo: "" },
          ],
        },
        {
          name: "Rookie Programmers",
          members: [
            { name: "Carlo", role: "Rookie", photo: "" },
          ],


        }
      ],
    },
    {
      title: "Business",
      description:
        "El equipo de negocios maneja las finanzas y recursos del equipo, marketing, patrocinadores y eventos.",
      subteams: [
        {
          name: "Equipo de Negocios",
          members: [
            { name: "Mauricio", role: "Lead de Negocios", photo: "" },
            { name: "Hector", role: "Financiero", photo: "" },
          ],
        },
      ],
    },
    {
      title: "Social Media",
      description:
        "El equipo de redes sociales crea y gestiona el contenido en nuestras plataformas digitales. Su objetivo es aumentar la visibilidad del equipo y atraer nuevos seguidores y patrocinadores. Son los encargados de conectar a BALAM con la comunidad.",
      subteams: [
        {
          name: "Equipo de Redes Sociales",
          members: [
            { name: "Silvana", role: "Lead Redes Sociales", photo: "" },
            { name: "Lu", role: "Media Manager", photo: "" },
            { name: "Andrew", role: "Content Creator", photo: "" },
          ],
        },
      ],
    },
    {
      title: "Scouting",
      description:
        "El área de scouting analiza el rendimiento de otros equipos durante las competencias. Su información es clave para definir estrategias y alianzas.",
      subteams: [
        {
          name: "Equipo de Scouting",
          members: [
            { name: "Rafael", role: "Lead de Scouting", photo: "" },
          ],
        },
      ],
    },
    {
      title: "Mentores & Couches",
      description:
        "Nuestros couches son mentores experimentados que guían y apoyan a los estudiantes en todas las áreas del equipo. Su experiencia es invaluable para el desarrollo y éxito de BALAM 3527.",
      subteams: [
        {
          name: "Couches",
          members: [
            { name: "Barbarita", role: "Couch", photo: "" },
            { name: "Luis Fernando", role: "Couch", photo: "" },
          ],
        },
        {
          name: "Mentores",
          members: [
            { name: "Dany Felix", role: "Ex-Couch", photo: "" },
            { name: "Jorge", role: "Mentor de Negocios", photo: "" },
            { name: "Gonzalo", role: "Mentor de Mecanica", photo: "" },
            { name: "Arturo", role: "Mentor de Programación", photo: "" },
            { name: "Diego Rossi", role: "Mentor de Programación", photo: "" },
          ]
        }
      ],
    }
  ];

  return (
    <Paper
      sx={{
        minHeight: "100vh",
        background: "radial-gradient(circle at center, #000000 20%, #00111f 100%)",
        color: "white",
        textAlign: "center",
        p: 4,
        overflow: "hidden",
        position: "relative",
      }}
      elevation={0}
    >
      {/* Background image */}
      <Box
        sx={{
          position: "fixed", // or "absolute" if inside a positioned container
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          zIndex: 0, // put it behind everything
          overflow: "hidden",
        }}
      >
        <Box
          component="img"
          src={Image}
          sx={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            opacity: 0.45,
          }}
        />
      </Box>


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

      {/* Content */}
      <Container sx={{ position: "relative", zIndex: 2, maxWidth: 1200, mt: 6 }}>
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <Typography
            variant="h3"
            sx={{
              fontWeight: 800,
              color: "#00BFFF",
              fontFamily: "Orbitron, sans-serif",
              mb: 1,
              textShadow: "0 0 25px rgba(0,191,255,0.7)",
            }}
          >
            Nuestro Equipo 2025
          </Typography>

          <Typography
            variant="h6"
            sx={{
              color: "#a8cfff",
              mb: 6,
              fontFamily: "Orbitron, sans-serif",
            }}
          >
            Conoce las áreas que hacen posible a BALAM 3527
          </Typography>
        </motion.div>

        {teamData.map((team, i) => (
          <TeamSection key={i} {...team} />
        ))}

        <Typography
          variant="body2"
          sx={{
            mt: 8,
            color: "#87CEFA",
            fontFamily: "Orbitron, sans-serif",
            fontSize: "0.9rem",
          }}
        >
          “Juntos construimos más que robots, construimos futuro.”
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
};

export default TeamPage;
