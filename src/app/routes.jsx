import MainLayout from '../features/MainLayout.jsx';
import Home from '../features/Home.jsx';
import RoadmapBasic from '../features/Introduction/RoadmapBasic.jsx';
import RoadmapAdvanced from '../features/Introduction/RoadmapAdvanced.jsx';
import WellCome from '../features/WellCome.jsx';

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
            element: <RoadmapAdvanced />,
          },
          {
            path: '/setup/node',
            element: <RoadmapAdvanced />,
          },
          {
            path: '/setup/deploy',
            element: <RoadmapAdvanced />,
          },
          {
            path: '/basic/html',
            element: <RoadmapAdvanced />,
          },
          {
            path: '/basic/css',
            element: <RoadmapAdvanced />,
          },
          {
            path: '/basic/javaScript',
            element: <RoadmapAdvanced />,
          },
        ],
      },
    ],
  },
];

export default routes;
