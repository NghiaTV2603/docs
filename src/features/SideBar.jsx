import React from 'react';
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import { Stack, colors } from '@mui/material';
import './../appbar.css';
import { useNavigate } from 'react-router-dom';

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  '&:not(:last-child)': {
    borderBottom: 0,
  },
  '&:before': {
    display: 'none',
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === 'dark'
      ? 'rgba(255, 255, 255, .05)'
      : 'rgba(0, 0, 0, .03)',
  flexDirection: 'row-reverse',
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(90deg)',
  },
  '& .MuiAccordionSummary-content': {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: '1px solid rgba(0, 0, 0, .125)',
}));
const SideBar = ({ closeDrawer }) => {
  const [expanded, setExpanded] = React.useState('panel1');

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  const path = window.location.pathname;
  const navigate = useNavigate();

  return (
    <div style={{ width: '270px' }}>
      <Accordion
        expanded={expanded === 'panel1'}
        onChange={handleChange('panel1')}
      >
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <Typography>Introduction</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Stack
            height={36}
            borderRadius={2}
            px={2}
            direction={'row'}
            alignItems={'center'}
            color={
              path === '/introduction/roadmap-basic'
                ? colors.blue[600]
                : colors.grey[500]
            }
            bgcolor={
              path === '/introduction/roadmap-basic' ? colors.grey[900] : ''
            }
            sx={{
              '&:hover': {
                cursor: 'pointer',
                color: colors.grey[100],
                backgroundColor: colors.grey[900],
              },
            }}
            mb={1}
            onClick={() => {
              navigate('/introduction/roadmap-basic');
              closeDrawer();
            }}
          >
            Roadmap basic
          </Stack>
          <Stack
            height={36}
            borderRadius={2}
            px={2}
            direction={'row'}
            alignItems={'center'}
            color={
              path === '/introduction/roadmap-advanced'
                ? colors.blue[600]
                : colors.grey[400]
            }
            sx={{
              '&:hover': {
                cursor: 'pointer',
                color: colors.grey[100],
                backgroundColor: colors.grey[900],
              },
            }}
            onClick={() => {
              navigate('/introduction/roadmap-advanced');
              closeDrawer();
            }}
          >
            Roadmap advanced
          </Stack>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === 'panel2'}
        onChange={handleChange('panel2')}
      >
        <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
          <Typography>Project Setup</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Stack
            height={36}
            borderRadius={2}
            px={2}
            direction={'row'}
            alignItems={'center'}
            color={
              path === '/setup/react' ? colors.blue[600] : colors.grey[500]
            }
            bgcolor={path === '/setup/react' ? colors.grey[900] : ''}
            sx={{
              '&:hover': {
                cursor: 'pointer',
                color: colors.grey[100],
                backgroundColor: colors.grey[900],
              },
            }}
            mb={1}
            onClick={() => {
              navigate('/setup/react');
              closeDrawer();
            }}
          >
            ReactJS
          </Stack>
          <Stack
            height={36}
            borderRadius={2}
            px={2}
            direction={'row'}
            alignItems={'center'}
            color={path === '/setup/node' ? colors.blue[600] : colors.grey[500]}
            bgcolor={path === '/setup/node' ? colors.grey[900] : ''}
            sx={{
              '&:hover': {
                cursor: 'pointer',
                color: colors.grey[100],
                backgroundColor: colors.grey[900],
              },
            }}
            mb={1}
            onClick={() => {
              navigate('/setup/node');
              closeDrawer();
            }}
          >
            NodeJS
          </Stack>
          <Stack
            height={36}
            borderRadius={2}
            px={2}
            direction={'row'}
            alignItems={'center'}
            color={
              path === '/setup/deploy' ? colors.blue[600] : colors.grey[500]
            }
            bgcolor={path === '/setup/deploy' ? colors.grey[900] : ''}
            sx={{
              '&:hover': {
                cursor: 'pointer',
                color: colors.grey[100],
                backgroundColor: colors.grey[900],
              },
            }}
            mb={1}
            onClick={() => {
              navigate('/setup/deploy');
              closeDrawer();
            }}
          >
            Deploy Hosting
          </Stack>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === 'panel3'}
        onChange={handleChange('panel3')}
      >
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
          <Typography>Basic</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Stack
            height={36}
            borderRadius={2}
            px={2}
            direction={'row'}
            alignItems={'center'}
            color={path === '/basic/html' ? colors.blue[600] : colors.grey[500]}
            bgcolor={path === '/basic/html' ? colors.grey[900] : ''}
            sx={{
              '&:hover': {
                cursor: 'pointer',
                color: colors.grey[100],
                backgroundColor: colors.grey[900],
              },
            }}
            mb={1}
            onClick={() => {
              navigate('/basic/html');
              closeDrawer();
            }}
          >
            HTML
          </Stack>
          <Stack
            height={36}
            borderRadius={2}
            px={2}
            direction={'row'}
            alignItems={'center'}
            color={path === '/basic/css' ? colors.blue[600] : colors.grey[500]}
            bgcolor={path === '/basic/css' ? colors.grey[900] : ''}
            sx={{
              '&:hover': {
                cursor: 'pointer',
                color: colors.grey[100],
                backgroundColor: colors.grey[900],
              },
            }}
            mb={1}
            onClick={() => {
              navigate('/basic/css');
              closeDrawer();
            }}
          >
            CSS
          </Stack>
          <Stack
            height={36}
            borderRadius={2}
            px={2}
            direction={'row'}
            alignItems={'center'}
            color={
              path === '/basic/javaScript' ? colors.blue[600] : colors.grey[500]
            }
            bgcolor={path === '/basic/javaScript' ? colors.grey[900] : ''}
            sx={{
              '&:hover': {
                cursor: 'pointer',
                color: colors.grey[100],
                backgroundColor: colors.grey[900],
              },
            }}
            mb={1}
            onClick={() => {
              navigate('/basic/javaScript');
              closeDrawer();
            }}
          >
            JavaScript
          </Stack>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default SideBar;
