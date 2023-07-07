import { colors, Stack } from '@mui/material';
import Header from './Header.jsx';
import SideBar from './SideBar.jsx';
import { Outlet } from 'react-router-dom';

const Home = () => {
  return (
    <Stack direction="row">
      <Header />
      <Stack mt={8.1} direction={'row'} sx={{ overflow: 'auto' }}>
        <Stack
          bgcolor={colors.grey[900]}
          sx={{ display: { xs: 'none', sm: 'none', md: 'block' } }}
        >
          <div style={{ width: '270px' }}>
            <Stack sx={{ position: 'fixed' }}>
              <SideBar />
            </Stack>
          </div>
        </Stack>
        <Stack width={'100%'}>
          <Outlet />
        </Stack>
      </Stack>
    </Stack>
  );
};
export default Home;
