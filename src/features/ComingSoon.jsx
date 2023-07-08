import { colors, Stack } from '@mui/material';
import RunCircleIcon from '@mui/icons-material/RunCircle.js';
import React from 'react';

const ComingSoon = () => {
  return (
    <Stack height={'100vh'} p={4} alignItems="center">
      <Stack
        fontSize={18}
        fontWeight={700}
        p={2}
        bgcolor={colors.grey[900]}
        borderRadius={8}
        direction={'row'}
        alignItems="center"
      >
        Coming Soon
        <RunCircleIcon fontSize={'large'} sx={{ marginLeft: 2 }} />
      </Stack>
    </Stack>
  );
};

export default ComingSoon;
