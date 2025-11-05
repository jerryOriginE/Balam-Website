import { Link } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  Button,
  Typography,
  Box,
  IconButton,
  Menu,
  MenuItem,
  useScrollTrigger,
  Slide,
} from "@mui/material";
import { Menu as MenuIcon } from "@mui/icons-material";
import { motion } from "framer-motion";
import React, { useState } from "react";

function HideOnScroll({ children }) {
  const trigger = useScrollTrigger();
  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

const Navbar = () => {
  const [mobileMenuAnchor, setMobileMenuAnchor] = useState(null);
  const isMenuOpen = Boolean(mobileMenuAnchor);

  const handleMenuOpen = (event) => setMobileMenuAnchor(event.currentTarget);
  const handleMenuClose = () => setMobileMenuAnchor(null);

  const menuLinks = [
    { label: "Inicio", to: "/" },
    { label: "Equipo", to: "/team" },
    { label: "Acerca de Nosotros", to: "/about" },
    { label: "Proyectos", to: "/projects" },
    { label: "Historia", to: "/history" },
    { label: "Patrocinios", to: "/sponsors" },
  ];

  return (
    <>
      <HideOnScroll>
        <AppBar
          position="fixed"
          sx={{
            background: "rgba(0, 10, 25, 0.9)",
            backdropFilter: "blur(12px)",
            borderBottom: "1px solid rgba(0, 191, 255, 0.3)",
            boxShadow: "0 0 25px rgba(0,191,255,0.2)",
          }}
        >
          <Toolbar
            sx={{
              minHeight: 56,
              py: 0.5,
              px: 2,
              justifyContent: "space-between",
            }}
          >
            {/* Left side: title */}
            <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
              <motion.div
                animate={{
                  textShadow: [
                    "0 0 5px #00bfff",
                    "0 0 20px #00e5ff",
                    "0 0 5px #00bfff",
                  ],
                }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: 700,
                    letterSpacing: 1.5,
                    color: "#00BFFF",
                    fontFamily: "Orbitron, sans-serif",
                  }}
                >
                  BALAM WEBSITE
                </Typography>
              </motion.div>
            </Box>

            {/* Desktop menu */}
            <Box
              sx={{
                display: { xs: "none", md: "flex" },
                alignItems: "center",
                gap: 1.2,
              }}
            >
              {menuLinks.map((link) => (
                <motion.div key={link.to} whileHover={{ scale: 1.05, y: -1 }}>
                  <Button
                    color="inherit"
                    component={Link}
                    to={link.to}
                    sx={{
                      color: "#a8cfff",
                      fontWeight: 600,
                      fontSize: "0.85rem",
                      px: 1.5,
                      py: 0.5,
                      textTransform: "none",
                      position: "relative",
                      "&::after": {
                        content: '""',
                        position: "absolute",
                        left: 0,
                        bottom: 0,
                        width: 0,
                        height: "2px",
                        background:
                          "linear-gradient(90deg, #00e5ff, #00bfff)",
                        transition: "width 0.3s ease",
                      },
                      "&:hover::after": { width: "100%" },
                    }}
                  >
                    {link.label}
                  </Button>
                </motion.div>
              ))}

              {/* JOIN US button */}
              <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                <Button
                  component={Link}
                  to="/join"
                  sx={{
                    ml: 2,
                    px: 2.5,
                    py: 0.7,
                    fontWeight: 700,
                    letterSpacing: 1,
                    color: "#0a0a0f",
                    background:
                      "linear-gradient(90deg, #00e5ff, #00bfff)",
                    borderRadius: "999px",
                    boxShadow: "0 0 12px rgba(0, 191, 255, 0.7)",
                    textTransform: "uppercase",
                    transition: "all 0.3s ease",
                    "&:hover": {
                      background:
                        "linear-gradient(90deg, #00ffff, #33aaff)",
                      boxShadow: "0 0 25px rgba(0, 191, 255, 0.9)",
                    },
                  }}
                >
                  ÚNETE
                </Button>
              </motion.div>
            </Box>

            {/* Mobile hamburger button */}
            <Box sx={{ display: { xs: "flex", md: "none" } }}>
              <IconButton
                color="inherit"
                onClick={handleMenuOpen}
                sx={{
                  color: "#00e5ff",
                  "&:hover": {
                    color: "#33ffff",
                  },
                }}
              >
                <MenuIcon />
              </IconButton>
            </Box>
          </Toolbar>

          {/* Mobile menu */}
          <Menu
            anchorEl={mobileMenuAnchor}
            open={isMenuOpen}
            onClose={handleMenuClose}
            keepMounted
            sx={{
              "& .MuiPaper-root": {
                background: "rgba(0, 10, 25, 0.95)",
                border: "1px solid rgba(0,191,255,0.3)",
                backdropFilter: "blur(10px)",
                color: "#a8cfff",
                mt: 1,
              },
            }}
          >
            {menuLinks.map((link) => (
              <MenuItem
                key={link.to}
                onClick={handleMenuClose}
                component={Link}
                to={link.to}
                sx={{
                  fontFamily: "Orbitron, sans-serif",
                  "&:hover": {
                    background: "rgba(0,191,255,0.15)",
                    color: "#00e5ff",
                  },
                }}
              >
                {link.label}
              </MenuItem>
            ))}

            <MenuItem
              onClick={handleMenuClose}
              component={Link}
              to="/join"
              sx={{
                mt: 1,
                fontWeight: 700,
                justifyContent: "center",
                background:
                  "linear-gradient(90deg, #00e5ff, #00bfff)",
                color: "#0a0a0f",
                borderRadius: "999px",
                mx: 2,
                "&:hover": {
                  background:
                    "linear-gradient(90deg, #00ffff, #33aaff)",
                  boxShadow: "0 0 20px rgba(0, 191, 255, 0.9)",
                },
              }}
            >
              ÚNETE
            </MenuItem>
          </Menu>
        </AppBar>
      </HideOnScroll>
    </>
  );
};

export default Navbar;
