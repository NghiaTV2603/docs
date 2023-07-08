import React from 'react';
import {
  CardMedia,
  colors,
  Grid,
  IconButton,
  Stack,
  Typography,
} from '@mui/material';
import RunCircleIcon from '@mui/icons-material/RunCircle';
import { useNavigate } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home.js';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { materialDark } from 'react-syntax-highlighter/dist/cjs/styles/prism/index.js';
import logo from '../../assets/logo.svg';
import logoNode from '../../assets/nodejs.svg';
import '../../App.css';
import '../../appbar.css';
import logoMongo from '../../assets/mongo.svg';

const RoadmapAdvanced = () => {
  const Content = () => {
    const navigate = useNavigate();
    return (
      <>
        <Stack
          direction={'row'}
          spacing={2}
          color={colors.grey[300]}
          alignItems={'center'}
        >
          <IconButton size={'small'}>
            <HomeIcon fontSize={'small'} />
          </IconButton>
          <Typography color={colors.grey[600]}>{`>`}</Typography>
          <Typography
            color={colors.grey[600]}
            fontSize={13}
          >{`introduction`}</Typography>
          <Typography color={colors.grey[600]}>{`>`}</Typography>
          <Stack
            color={colors.blue[500]}
            fontSize={13}
            bgcolor={colors.grey[900]}
            px={1.5}
            py={0.7}
            borderRadius={5}
          >{`Roadmap advanced`}</Stack>
        </Stack>
        <Stack color={colors.grey[400]} direction={'column'} spacing={2} mt={2}>
          <Typography
            sx={{ fontWeight: 700, fontSize: 44, color: colors.grey[300] }}
          >
            Introduction Web Development Course
          </Typography>
          <Typography variant={'subtitle'}>
            Congratulations on completing the basic web development course! Now,
            let's take a look at the advanced roadmap, where we will dive into
            React.js, Express, and MongoDB.
            <br />
            <br /> These are popular technologies used in modern web development
            and will enhance your skills to build more sophisticated web
            applications.
          </Typography>
          <Typography
            sx={{ fontWeight: 700, fontSize: 28, color: colors.grey[300] }}
          >
            1. React.js
          </Typography>
          <Stack width={'100%'}>
            <img src={logo} className="App-logo" alt="logo" />
          </Stack>
          <Typography variant={'subtitle'}>
            React.js is a powerful JavaScript library for building user
            interfaces. In this section, we will explore the core concepts and
            principles of React.js. Some of the key topics to cover include:
          </Typography>
          <ul>
            <li>
              Components: Understand how to create reusable and modular
              components to build user interfaces.
            </li>
            <li>
              JSX: Learn how to write JSX (JavaScript XML) syntax to describe
              the structure and appearance of components.
            </li>
            <li>
              State and Props: Explore how to manage component state and pass
              data through props.
            </li>
            <li>
              Lifecycle Methods: Discover the different lifecycle methods of a
              React component and how to use them.
            </li>
            <li>
              React Router: Learn how to implement client-side routing in a
              React application.
            </li>
            <li>
              React Hooks: Dive into hooks such as useState, useEffect, and
              useContext to manage state and side effects
            </li>
          </ul>
          <Typography variant={'subtitle'}>
            By the end of this section, you will have a solid understanding of
            React.js and be able to build interactive and dynamic web
            applications.
          </Typography>
          <Typography
            sx={{ fontWeight: 700, fontSize: 28, color: colors.grey[300] }}
          >
            2. Express
          </Typography>
          <Stack width={'100%'}>
            <img src={logoNode} className="App-logo" alt="logo" />
          </Stack>
          <Typography variant={'subtitle'}>
            Express is a flexible and minimalist web application framework for
            Node.js. In this section, we will focus on building server-side
            applications with Express. Some of the key topics to cover include:
          </Typography>

          <ul>
            <li>
              Routing: Understand how to define routes and handle HTTP requests
              using Express.
            </li>
            <li>
              Middleware: Explore how to use middleware functions for tasks like
              logging, authentication, and error handling.
            </li>
            <li>
              Templating Engines: Learn how to integrate templating engines like
              EJS or Pug with Express for dynamic content rendering.
            </li>
            <li>
              Database Integration: Discover how to connect Express with
              databases like MongoDB using libraries such as Mongoose.
            </li>
          </ul>
          <Typography variant={'subtitle'}>
            By the end of this section, you will have the skills to build robust
            server-side applications and RESTful APIs using Express.
          </Typography>
          <Typography
            sx={{ fontWeight: 700, fontSize: 28, color: colors.grey[300] }}
          >
            3. MongoDB
          </Typography>
          <Stack width={'100%'}>
            <img src={logoMongo} className="App-logo" alt="logo" />
          </Stack>
          <Typography variant={'subtitle'}>
            MongoDB is a popular NoSQL database used in modern web development.
            In this section, we will explore the fundamentals of MongoDB and its
            integration with Node.js. Some of the key topics to cover include:
          </Typography>
          <ul>
            <li>
              Document-oriented data model: Understand the concepts of
              collections and documents in MongoDB.
            </li>
            <li>
              CRUD Operations: Learn how to perform Create, Read, Update, and
              Delete operations in MongoDB
            </li>
            <li>
              Querying: Explore the powerful querying capabilities of MongoDB to
              retrieve specific data from the database
            </li>
            <li>
              Aggregation: Discover how to use MongoDB's aggregation framework
              for complex data analysis.
            </li>
            <li>
              Indexing and Performance: Learn techniques to optimize database
              performance through indexing
            </li>
          </ul>
          <Typography variant={'subtitle'}>
            Indexing and Performance: Learn techniques to optimize database
            performance through indexing
          </Typography>

          <Typography
            sx={{ fontWeight: 700, fontSize: 28, color: colors.grey[300] }}
          >
            Project Showcase
          </Typography>
          <Typography variant={'subtitle'}>
            To apply your newly acquired skills, we will wrap up the course with
            two practical projects:
          </Typography>
          <ul>
            <li>
              Todo List Web Application: You will build a todo list application
              where users can create, update, and manage their tasks. This
              project will reinforce your knowledge of HTML, CSS, JavaScript,
              and React.js.
            </li>
            <li>
              E-commerce Web Application: You will develop an e-commerce website
              where users can browse products, add items to their cart, and
              complete orders. This project will incorporate frontend
              technologies like React.js and backend technologies like Express
              and MongoDB.
            </li>
          </ul>
          <Typography variant={'subtitle'}>
            By completing these projects, you will gain hands-on experience and
            showcase your ability to build real-world web applications
          </Typography>
          <Typography variant={'subtitle'}>
            Congratulations on embarking on the advanced roadmap! Get ready to
            level up your web development skills and create even more impressive
            projects.
          </Typography>
          <Stack direction={'row'} justifyContent={'space-between'}>
            <Stack
              width={300}
              border={1}
              borderRadius={4}
              p={2}
              direction="column"
              // alignItems="flex-end"
              sx={{
                '&:hover': {
                  borderColor: colors.blue[600],
                  cursor: 'pointer',
                },
              }}
              onClick={() => {
                navigate('/introduction/roadmap-basic');
              }}
            >
              <Typography color={colors.grey[200]} fontWeight={500}>
                Back
              </Typography>
              <Typography
                fontSize={18}
                fontWeight={600}
                color={colors.blue[600]}
              >
                {`<< Roadmap Advanced`}
              </Typography>
            </Stack>
            <Stack
              width={300}
              border={1}
              borderRadius={4}
              p={2}
              direction="column"
              alignItems="flex-end"
              sx={{
                '&:hover': {
                  borderColor: colors.blue[600],
                  cursor: 'pointer',
                },
              }}
              onClick={() => {
                navigate('/setup/react');
              }}
            >
              <Typography color={colors.grey[200]} fontWeight={500}>
                Next
              </Typography>
              <Typography
                fontSize={18}
                fontWeight={600}
                color={colors.blue[600]}
              >
                Setup React >>
              </Typography>
            </Stack>
          </Stack>
        </Stack>
      </>
    );
  };

  const Index = () => (
    <Stack
      ml={3}
      mt={8}
      pl={2}
      borderLeft={1}
      width={200}
      direction={'column'}
      spacing={2}
      py={1}
      color={colors.grey[300]}
    >
      <Typography>ReactJS</Typography>
      <Typography>ExpressJS</Typography>
      <Typography>MongoDB</Typography>
      <Typography>Project</Typography>
    </Stack>
  );
  return (
    <Stack px={4} py={2}>
      <Stack sx={{ display: { xs: 'none', sm: 'block' } }}>
        <Grid container>
          <Grid item xs={9}>
            <Content />
          </Grid>
          <Grid item xs={1}>
            <Index />
          </Grid>
        </Grid>
      </Stack>
      <Stack sx={{ display: { xs: 'block', sm: 'none' } }}>
        <Content />
      </Stack>
    </Stack>
  );
};
export default RoadmapAdvanced;
