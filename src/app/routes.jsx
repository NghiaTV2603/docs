import MainLayout from '../features/MainLayout.jsx';
import Home from '../features/Home.jsx';
import RoadmapBasic from '../features/Introduction/RoadmapBasic.jsx';
import RoadmapAdvanced from '../features/Introduction/RoadmapAdvanced.jsx';
import WellCome from '../features/WellCome.jsx';
import ComingSoon from '../features/ComingSoon.jsx';

const routes = [
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { path: '/welcome', element: <WellCome /> },
      {
        path: '/',
        element: <Home />,
        children: [
          { path: '/introduction/roadmap-basic', element: <RoadmapBasic /> },
          { path: '/', element: <RoadmapBasic /> },
          {
            path: '/introduction/roadmap-advanced',
            element: <RoadmapAdvanced />,
          },
          {
            path: '/setup/react',
            element: <ComingSoon />,
          },
          {
            path: '/setup/node',
            element: <ComingSoon />,
          },
          {
            path: '/setup/deploy',
            element: <ComingSoon />,
          },
          {
            path: '/basic/html',
            element: <ComingSoon />,
          },
          {
            path: '/basic/css',
            element: <ComingSoon />,
          },
          {
            path: '/basic/javaScript',
            element: <ComingSoon />,
          },
        ],
      },
    ],
  },
];

export default routes;
