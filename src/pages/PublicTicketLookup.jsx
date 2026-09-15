// src/pages/PublicTicketLookup.jsx
import { useState } from 'react';
import { Container, Typography, Box, TextField, Button, Chip, CircularProgress, InputAdornment, IconButton } from '@mui/material';
import { motion } from 'framer-motion';
import SearchIcon from '@mui/icons-material/Search';
import ConfirmationNumberIcon from '@mui/icons-material/ConfirmationNumber';
import BadgeIcon from '@mui/icons-material/Badge';
import ClearIcon from '@mui/icons-material/Clear';

const API_BASE_URL = 'https://api.balamserver.top'; //http://localhost:5000

const PublicTicketLookup = () => {
  const [identificationNumber, setIdentificationNumber] = useState('');
  const [ticket, setTicket] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleLookup = async (e) => {
    e.preventDefault();
    if (!identificationNumber.trim()) return;

    setLoading(true);
    setError('');
    setTicket(null);

    try {
      const res = await fetch(`${API_BASE_URL}/tickets/lookup/${identificationNumber.trim()}`);
      if (!res.ok) {
        if (res.status === 404) {
          throw new Error('No se encontró ningún boleto registrado con esta matrícula.');
        }
        throw new Error('Error al consultar el servidor.');
      }
      const data = await res.json();
      setTicket(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const isPaid = ticket?.payment_confirmed;
  const accentColor = isPaid ? '#00ff88' : '#FF4444';
  const docsComplete = ticket?.carta_compromiso_status && ticket?.seguro_status && ticket?.ine_status;

  return (
    <Box
      sx={{
        minHeight: '100vh',
        background: 'radial-gradient(circle at top left, #000000 20%, #00111f 100%)',
        color: 'white',
        py: { xs: 12, md: 8 },
        px: { xs: 2, md: 4 },
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Container maxWidth="md" sx={{ px: { xs: 1, sm: 2 } }}>
        <motion.div initial={{ opacity: 0, y: -16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <Typography
            variant="h4"
            sx={{
              fontWeight: 800,
              color: '#00BFFF',
              textShadow: '0 0 18px rgba(0,191,255,0.7)',
              fontFamily: 'Orbitron, sans-serif',
              mb: 1,
              textAlign: 'center',
              fontSize: { xs: '1.6rem', sm: '2.125rem' },
            }}
          >
            CONSULTA DE BOLETO
          </Typography>
          <Typography variant="body2" sx={{ color: '#a8cfff', textAlign: 'center', mb: { xs: 3, md: 4 }, fontSize: { xs: '0.8rem', sm: '0.875rem' } }}>
            Ingresa tu matrícula para verificar tu pase de acceso, bus y documentos del evento GET UP TEC.
          </Typography>
        </motion.div>

        {/* Improved Integrated Search Bar Container - Optimized for Mobile Flex-Wrap */}
        <Box
          component="form"
          onSubmit={handleLookup}
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'row' },
            alignItems: 'stretch',
            gap: { xs: 1.5, sm: 0 },
            p: { xs: '10px', sm: '6px' },
            mb: 4,
            background: 'linear-gradient(135deg, rgba(0,17,31,0.9) 0%, rgba(0,4,8,0.95) 100%)',
            border: '2px solid rgba(0,191,255,0.4)',
            borderRadius: { xs: '16px', sm: '16px' },
            boxShadow: '0 0 20px rgba(0,191,255,0.15)',
            backdropFilter: 'blur(10px)',
            transition: 'all 0.3s ease',
            '&:focus-within': {
              borderColor: '#00BFFF',
              boxShadow: '0 0 30px rgba(0,191,255,0.35)',
            },
          }}
        >
          <TextField
            variant="standard"
            placeholder="Ingresa tu matrícula (Ej. A01801380)"
            value={identificationNumber}
            onChange={(e) => setIdentificationNumber(e.target.value)}
            fullWidth
            InputProps={{
              disableUnderline: true,
              startAdornment: (
                <InputAdornment position="start" sx={{ pl: 1.5, color: '#00BFFF' }}>
                  <BadgeIcon />
                </InputAdornment>
              ),
              endAdornment: identificationNumber && (
                <InputAdornment position="end">
                  <IconButton
                    size="small"
                    onClick={() => setIdentificationNumber('')}
                    sx={{ color: '#a8cfff', '&:hover': { color: '#fff' } }}
                  >
                    <ClearIcon fontSize="small" />
                  </IconButton>
                </InputAdornment>
              ),
              style: {
                color: '#fff',
                fontFamily: 'Orbitron, sans-serif',
                fontSize: '0.95rem',
                letterSpacing: '0.5px',
                backgroundColor: 'transparent',
              },
            }}
            sx={{
              px: 1,
              py: { xs: 1, sm: 0 },
              backgroundColor: 'transparent !important',
              '&, & *': {
                backgroundColor: 'transparent !important',
              },
              '& .MuiInputBase-root': {
                backgroundColor: 'transparent !important',
                height: '100%',
                display: 'flex',
                alignItems: 'center',
              },
              '& input': {
                backgroundColor: 'transparent !important',
                WebkitBoxShadow: '0 0 0 1000px transparent inset !important',
                WebkitTextFillColor: '#fff !important',
                padding: '0 !important',
              },
              '& input:-webkit-autofill, & input:-webkit-autofill:hover, & input:-webkit-autofill:focus': {
                WebkitBoxShadow: '0 0 0 1000px transparent inset !important',
                WebkitTextFillColor: '#fff !important',
                caretColor: '#fff',
              },
              '& input::placeholder': {
                color: 'rgba(168,207,255,0.5)',
                opacity: 1,
              },
            }}
          />
          <Button
            type="submit"
            variant="contained"
            disabled={loading}
            startIcon={loading ? <CircularProgress size={18} sx={{ color: '#000' }} /> : <SearchIcon />}
            sx={{
              backgroundColor: '#00BFFF',
              color: '#000',
              fontWeight: 800,
              fontFamily: 'Orbitron, sans-serif',
              px: { xs: 2, sm: 4 },
              py: 1.5,
              borderRadius: { xs: '10px', sm: '12px' },
              boxShadow: '0 0 15px rgba(0,191,255,0.4)',
              '&:hover': {
                backgroundColor: '#0099cc',
                boxShadow: '0 0 25px rgba(0,191,255,0.7)',
              },
              whiteSpace: 'nowrap',
            }}
          >
            {loading ? 'Buscando' : 'Consultar'}
          </Button>
        </Box>

        {error && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <Box
              sx={{
                p: 2,
                borderRadius: 2,
                bgcolor: 'rgba(255,68,68,0.1)',
                border: '1px solid #FF4444',
                color: '#FF4444',
                textAlign: 'center',
                mb: 3,
              }}
            >
              <Typography variant="body2">{error}</Typography>
            </Box>
          </motion.div>
        )}

        {ticket && (
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.4 }}>
            {/* Boarding Pass / Event Ticket Container */}
            <Box
              sx={{
                display: 'flex',
                flexDirection: { xs: 'column', sm: 'row' },
                background: 'linear-gradient(135deg, #020b14 0%, #000408 100%)',
                borderRadius: '16px',
                border: `2px solid ${accentColor}`,
                boxShadow: `0 0 35px ${accentColor}33`,
                position: 'relative',
                overflow: 'hidden',
                '&::before, &::after': {
                  content: '""',
                  position: 'absolute',
                  width: '24px',
                  height: '24px',
                  backgroundColor: '#000',
                  borderRadius: '50%',
                  zIndex: 2,
                  display: { xs: 'none', sm: 'block' },
                },
                '&::before': {
                  top: '-12px',
                  right: '128px',
                },
                '&::after': {
                  bottom: '-12px',
                  right: '128px',
                },
              }}
            >
              {/* Main Ticket Section */}
              <Box sx={{ p: { xs: 2.5, sm: 3.5 }, flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <Box>
                  {/* Ticket Header Bar */}
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2.5, gap: 1, flexWrap: 'wrap' }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                      <ConfirmationNumberIcon sx={{ color: '#00BFFF', fontSize: '1.2rem' }} />
                      <Typography variant="caption" sx={{ color: '#00BFFF', fontFamily: 'Orbitron, sans-serif', fontWeight: 800, letterSpacing: { xs: 1, sm: 2.5 }, fontSize: { xs: '0.6rem', sm: '0.7rem' } }}>
                        BALAM • PASE DE ADMISION
                      </Typography>
                    </Box>
                    <Chip
                      label={isPaid ? 'PAGADO' : 'PENDIENTE'}
                      size="small"
                      sx={{
                        bgcolor: isPaid ? 'rgba(0,255,136,0.15)' : 'rgba(255,68,68,0.15)',
                        color: accentColor,
                        borderColor: accentColor,
                        border: '1px solid',
                        fontWeight: 800,
                        fontFamily: 'Orbitron, sans-serif',
                        fontSize: '0.65rem',
                        height: '22px',
                      }}
                    />
                  </Box>

                  {/* Passenger / Attendee Name */}
                  <Box sx={{ mb: 2 }}>
                    <Typography variant="caption" sx={{ color: '#a8cfff', textTransform: 'uppercase', fontSize: '0.6rem', letterSpacing: 1 }}>
                      Titular del Boleto
                    </Typography>
                    <Typography variant="h5" sx={{ fontWeight: 800, color: '#fff', fontFamily: 'Orbitron, sans-serif', lineHeight: 1.2, fontSize: { xs: '1.2rem', sm: '1.5rem' }, wordBreak: 'break-word' }}>
                      {ticket.full_name}
                    </Typography>
                    <Typography variant="caption" sx={{ color: '#00BFFF', fontFamily: 'Orbitron, sans-serif', fontWeight: 700, letterSpacing: 1.5 }}>
                      ID: {ticket.identification_number}
                    </Typography>
                  </Box>

                  {/* Contact Info Matrix */}
                  <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: 'repeat(3, 1fr)' }, gap: 1.5, mb: 2.5, bgcolor: 'rgba(0,191,255,0.03)', p: 1.5, borderRadius: '8px', border: '1px solid rgba(0,191,255,0.1)' }}>
                    <Box>
                      <Typography variant="caption" sx={{ color: '#a8cfff', textTransform: 'uppercase', fontSize: '0.6rem' }}>
                        Teléfono
                      </Typography>
                      <Typography variant="body2" sx={{ color: '#fff', fontWeight: 600, fontSize: '0.85rem' }}>
                        {ticket.phone_number}
                      </Typography>
                    </Box>
                    <Box>
                      <Typography variant="caption" sx={{ color: '#a8cfff', textTransform: 'uppercase', fontSize: '0.6rem' }}>
                        Autobús
                      </Typography>
                      <Typography variant="body2" sx={{ color: '#FFD700', fontWeight: 800, fontFamily: 'Orbitron, sans-serif', fontSize: '0.85rem' }}>
                        {ticket.bus_assignment || 'Por Asignar'}
                      </Typography>
                    </Box>
                    <Box>
                      <Typography variant="caption" sx={{ color: '#a8cfff', textTransform: 'uppercase', fontSize: '0.6rem' }}>
                        Destino
                      </Typography>
                      <Typography variant="body2" sx={{ color: '#fff', fontWeight: 700, fontSize: '0.85rem' }}>
                        Six Flags
                      </Typography>
                    </Box>
                  </Box>

                  {/* Document Requirements Checklist */}
                  <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0.75 }}>
                    <Typography variant="caption" sx={{ color: '#a8cfff', fontFamily: 'Orbitron, sans-serif', fontWeight: 700, fontSize: '0.65rem', letterSpacing: 0.5 }}>
                      VERIFICACIÓN DE DOCUMENTACIÓN
                    </Typography>
                    <Box sx={{ display: 'grid', gridTemplateColumns: '1fr', gap: 0.5, fontSize: '0.75rem' }}>
                      <Typography variant="caption" sx={{ color: ticket.carta_compromiso_status ? '#00ff88' : '#FF4444', display: 'flex', alignItems: 'center', gap: 0.75, fontWeight: 600, wordBreak: 'break-word' }}>
                        <span>{ticket.carta_compromiso_status ? '●' : '○'}</span> Carta Compromiso {ticket.carta_compromiso_ref ? `(Ref: ${ticket.carta_compromiso_ref})` : ''}
                      </Typography>
                      <Typography variant="caption" sx={{ color: ticket.seguro_status ? '#00ff88' : '#FF4444', display: 'flex', alignItems: 'center', gap: 0.75, fontWeight: 600, wordBreak: 'break-word' }}>
                        <span>{ticket.seguro_status ? '●' : '○'}</span> Seguro Médico {ticket.seguro_ref ? `(Ref: ${ticket.seguro_ref})` : ''}
                      </Typography>
                      <Typography variant="caption" sx={{ color: ticket.ine_status ? '#00ff88' : '#FF4444', display: 'flex', alignItems: 'center', gap: 0.75, fontWeight: 600, wordBreak: 'break-word' }}>
                        <span>{ticket.ine_status ? '●' : '○'}</span> Copia INE / Identificación {ticket.ine_ref ? `(Ref: ${ticket.ine_ref})` : ''}
                      </Typography>
                    </Box>
                  </Box>
                </Box>

                {/* Footer validation status banner */}
                <Box sx={{ mt: 2, pt: 1.5, borderTop: '1px dashed rgba(0,191,255,0.2)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 1, flexWrap: 'wrap' }}>
                  <Typography variant="caption" sx={{ color: docsComplete ? '#00ff88' : '#FFD700', fontFamily: 'Orbitron, sans-serif', fontWeight: 700, fontSize: '0.65rem' }}>
                    {docsComplete ? '✓ EXPEDIENTE COMPLETO' : '⚠ FALTAN DOCUMENTOS'}
                  </Typography>
                  <Typography variant="caption" sx={{ color: '#a8cfff', fontFamily: 'monospace', fontSize: '0.65rem' }}>
                    REF#{ticket.id}
                  </Typography>
                </Box>
              </Box>

              {/* Ticket Stub Section */}
              <Box
                sx={{
                  width: { xs: '100%', sm: '140px' },
                  bgcolor: 'rgba(0, 191, 255, 0.05)',
                  borderLeft: { sm: '2px dashed rgba(0, 191, 255, 0.3)' },
                  borderTop: { xs: '2px dashed rgba(0, 191, 255, 0.3)', sm: 'none' },
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  p: { xs: 2, sm: 3 },
                  textAlign: 'center',
                }}
              >
                <Box>
                  <Typography variant="caption" sx={{ color: '#a8cfff', fontFamily: 'Orbitron, sans-serif', letterSpacing: 2, fontSize: '0.6rem' }}>
                    EVENTO
                  </Typography>
                  <Typography variant="body1" sx={{ color: '#00BFFF', fontWeight: 900, fontFamily: 'Orbitron, sans-serif', lineHeight: 1.1, mb: 1.5 }}>
                    GET UP TEC
                  </Typography>
                  <Typography variant="caption" sx={{ color: '#fff', fontWeight: 700, fontSize: '0.7rem', display: 'block', mb: 0.5 }}>
                    9 Noviembre
                  </Typography>
                  <Typography variant="caption" sx={{ color: '#a8cfff', fontSize: '0.65rem', display: 'block' }}>
                    Six Flags México
                  </Typography>
                </Box>

                {/* Barcode Mock Graphic */}
                <Box sx={{ width: '100%', my: 2 }}>
                  <Box
                    sx={{
                      width: '100%',
                      height: '42px',
                      background: 'repeating-linear-gradient(90deg, #fff, #fff 2px, transparent 2px, transparent 4px, #fff 4px, #fff 5px, transparent 5px, transparent 8px)',
                      opacity: 0.85,
                      borderRadius: '2px',
                    }}
                  />
                  <Typography variant="caption" sx={{ color: '#a8cfff', fontFamily: 'monospace', fontSize: '0.6rem', mt: 0.5, display: 'block', letterSpacing: 1 }}>
                    *3527-{ticket.id}*
                  </Typography>
                </Box>
              </Box>
            </Box>
          </motion.div>
        )}
      </Container>
    </Box>
  );
};

export default PublicTicketLookup;