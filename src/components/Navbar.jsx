import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Button, Typography, Box, Avatar, IconButton, Tooltip, useScrollTrigger, Slide, Menu, MenuItem } from '@mui/material';
import { Menu as MenuIcon, ArrowDropDown } from '@mui/icons-material';
import LogoutIcon from '@mui/icons-material/Logout';
import { motion } from 'framer-motion';
import React, { useState } from 'react';

function HideOnScroll({ children }) {
  const trigger = useScrollTrigger();
  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

const Navbar = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [dashboardMenu, setDashboardMenu] = useState(null);

  const menuLinks = [
    { label: 'Inicio', to: '/' },
    { label: 'Equipo', to: '/team' },
    { label: 'Acerca de Nosotros', to: '/about' },
    { label: 'Historia', to: '/history' },
    { label: 'Sponsors', to: '/sponsors' },
  ];

  const handleMenuOpen = (event) => setAnchorEl(event.currentTarget);
  const handleMenuClose = () => setAnchorEl(null);

  const handleDashboardOpen = (event) => setDashboardMenu(event.currentTarget);
  const handleDashboardClose = () => setDashboardMenu(null);

  return (
    <>
      {/* Main Navbar */}
      <HideOnScroll>
        <AppBar
          position="fixed"
          sx={{
            background: 'rgba(0, 10, 25, 0.9)',
            backdropFilter: 'blur(12px)',
            borderBottom: '1px solid rgba(0, 191, 255, 0.3)',
            boxShadow: '0 0 25px rgba(0,191,255,0.2)',
          }}
        >
          <Toolbar sx={{ minHeight: 56, py: 0.5, px: 2, justifyContent: 'space-between' }}>
            {/* Left side: title */}
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
              <motion.div
                animate={{
                  textShadow: ['0 0 5px #00bfff', '0 0 20px #00e5ff', '0 0 5px #00bfff'],
                }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: 700,
                    letterSpacing: 1.5,
                    color: '#00BFFF',
                    fontFamily: 'Orbitron, sans-serif',
                  }}
                >
                  BALAM WEBSITE
                </Typography>
              </motion.div>
            </Box>

            {/* Right side: nav links */}
            <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center', gap: 1.2 }}>
              {menuLinks.map((link) => (
                <motion.div key={link.to} whileHover={{ scale: 1.05, y: -1 }}>
                  <Button
                    color="inherit"
                    component={Link}
                    to={link.to}
                    sx={{
                      color: '#a8cfff',
                      fontWeight: 600,
                      fontSize: '0.85rem',
                      px: 1.5,
                      py: 0.5,
                      textTransform: 'none',
                      position: 'relative',
                      '&::after': {
                        content: '""',
                        position: 'absolute',
                        left: 0,
                        bottom: 0,
                        width: 0,
                        height: '2px',
                        background: 'linear-gradient(90deg, #00e5ff, #00bfff)',
                        transition: 'width 0.3s ease',
                      },
                      '&:hover::after': { width: '100%' },
                    }}
                  >
                    {link.label}
                  </Button>
                </motion.div>
              ))}

            </Box>
          </Toolbar>
        </AppBar>
      </HideOnScroll>
    </>
  );
};

export default Navbar;