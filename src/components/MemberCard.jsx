import { Card, CardContent, Typography, Avatar, Box } from "@mui/material";
import { motion } from "framer-motion";

const MemberCard = ({ name, role, photo }) => {
  return (
    <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
      <Card
        sx={{
          background: "rgba(255,255,255,0.05)",
          border: "1px solid rgba(0,191,255,0.2)",
          color: "white",
          textAlign: "center",
          borderRadius: 3,
          p: 2,
          height: "100%",
          backdropFilter: "blur(8px)",
        }}
      >
        <CardContent>
          <Avatar
            src={photo}
            alt={name}
            sx={{
              width: 90,
              height: 90,
              mx: "auto",
              mb: 2,
              border: "2px solid #00BFFF",
            }}
          />
          <Typography
            variant="h6"
            sx={{ color: "#00BFFF", fontFamily: "Orbitron, sans-serif" }}
          >
            {name}
          </Typography>
          <Typography variant="body2" sx={{ color: "#dcdcdc" }}>
            {role}
          </Typography>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default MemberCard;
