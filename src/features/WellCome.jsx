import React from 'react';
import { colors, Stack, Typography } from '@mui/material';
import Header from './Header.jsx';
import '../App.css';
import logo from '../assets/logo.svg';
import { useNavigate } from 'react-router-dom';

const WellCome = () => {
  const navigate = useNavigate();
  return (
    <Stack direction="row">
      <Header />
      <Stack
        mt={8.1}
        direction={'row'}
        alignItems={'center'}
        justifyContent={'center'}
        width="100%"
      >
        <Stack
          pt={10}
          direction={'column'}
          alignItems={'center'}
          justifyContent={'center'}
          spacing={2}
        >
          <img src={logo} className="App-logo" alt="logo" />
          <Typography fontWeight={700} variant={'h5'}>
            Tran Van Nghia
          </Typography>

          <Stack
            px={3}
            py={1}
            borderRadius={4}
            bgcolor={colors.blue[600]}
            fontWeight={700}
            onClick={() => {
              navigate('/introduction/roadmap-basic');
            }}
            sx={{
              '&:hover': {
                cursor: 'pointer',
              },
            }}
          >
            Learn Docs
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default WellCome;
