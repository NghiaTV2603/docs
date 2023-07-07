import React from 'react';
import { Stack, colors } from '@mui/material';
import RunCircleIcon from '@mui/icons-material/RunCircle';

const RoadmapAdvanced = () => {
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
export default RoadmapAdvanced;
