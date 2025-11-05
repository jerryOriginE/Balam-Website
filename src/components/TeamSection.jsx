import { Typography, Grid, Box } from "@mui/material";
import MemberCard from "./MemberCard";

const TeamSection = ({ title, description, subteams }) => {
  return (
    <Box sx={{ mb: 10 }}>
      <Typography
        variant="h4"
        sx={{
          color: "#00BFFF",
          fontFamily: "Orbitron, sans-serif",
          mb: 2,
          textShadow: "0 0 15px rgba(0,191,255,0.6)",
        }}
      >
        {title}
      </Typography>

      <Typography
        variant="body1"
        sx={{
          maxWidth: 800,
          mx: "auto",
          mb: 4,
          color: "#dcdcdc",
          lineHeight: 1.7,
        }}
      >
        {description}
      </Typography>

      {subteams.map((team, i) => (
        <Box key={i} sx={{ mb: 6 }}>
          <Typography
            variant="h6"
            sx={{
              color: "#87CEFA",
              fontFamily: "Orbitron, sans-serif",
              mb: 2,
            }}
          >
            {team.name}
          </Typography>

          <Grid container spacing={3} justifyContent="center">
            {team.members.map((member, j) => (
              <Grid item xs={12} sm={6} md={3} key={j}>
                <MemberCard {...member} />
              </Grid>
            ))}
          </Grid>
        </Box>
      ))}
    </Box>
  );
};

export default TeamSection;
