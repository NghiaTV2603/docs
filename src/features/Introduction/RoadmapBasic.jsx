import React from 'react';
import {
  CardMedia,
  colors,
  Grid,
  IconButton,
  Stack,
  Typography,
} from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import './../../appbar.css';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { materialDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { useNavigate } from 'react-router-dom';

function RoadmapBasic() {
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
          >{`Roadmap basic`}</Stack>
        </Stack>
        <Stack color={colors.grey[400]} direction={'column'} spacing={2} mt={2}>
          <Typography
            sx={{ fontWeight: 700, fontSize: 44, color: colors.grey[300] }}
          >
            Introduction Web Development Course
          </Typography>
          <Typography variant={'subtitle'}>
            Welcome to the Web Development course! This comprehensive course is
            designed to provide you with a solid foundation in web programming
            and equip you with the essential skills to build modern and
            interactive websites and web applications. <br />
            <br />
            Whether you are a beginner or have some programming experience, this
            course will guide you through the fundamental concepts and
            technologies of web development.
          </Typography>
          <Typography
            sx={{ fontWeight: 700, fontSize: 44, color: colors.grey[300] }}
          >
            Learning Roadmap
          </Typography>
          <Typography
            sx={{ fontWeight: 700, fontSize: 28, color: colors.grey[300] }}
          >
            1. Understanding Programming Languages and their Role in Web
            Development
          </Typography>
          <Typography variant={'subtitle'}>
            In this section, we will explore the importance of programming
            languages in web development and how they are used to create dynamic
            and interactive web applications.
            <br />
            <br /> We will discuss popular programming languages like HTML, CSS,
            and JavaScript, and their roles in the front-end and back-end
            development processes. You will gain a clear understanding of how
            these languages work together to bring web pages to life
          </Typography>
          <Typography
            sx={{ fontWeight: 700, fontSize: 28, color: colors.grey[300] }}
          >
            2. Introduction to Client-Server Model
          </Typography>
          <CardMedia
            component="img"
            sx={{ backgroundColor: colors.grey[800] }}
            height="500"
            image="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Client-server-model.svg/1280px-Client-server-model.svg.png"
            alt="Paella dish"
          />
          <Typography variant={'subtitle'}>
            Here, we will delve into the client-server architecture, which forms
            the foundation of web communication. You will learn about the roles
            of clients (such as web browsers) and servers in the web ecosystem,
            and how they interact to deliver web content.
            <br />
            <br /> We will discuss HTTP (Hypertext Transfer Protocol) and
            understand the request-response cycle that occurs when a client
            interacts with a server. This knowledge will help you grasp the
            fundamental concepts of web development and how information is
            transmitted across the internet.
          </Typography>
          <Typography
            sx={{ fontWeight: 700, fontSize: 28, color: colors.grey[300] }}
          >
            3. HTML Fundamentals
          </Typography>
          <Typography variant={'subtitle'}>
            HTML (Hypertext Markup Language) is the backbone of web development.
            In this section, we will cover the essentials of HTML, enabling you
            to create the content and structure of web pages.
            <br />
            <br />
            You will learn about HTML tags and elements, and how they are used
            to mark up and organize web content. Topics covered in this section
            include :
          </Typography>
          <ul>
            <li>{`Document structure: Understand the basic structure of an HTML document, including the <!DOCTYPE>, <html>, <head>, and <body> elements.`}</li>
            <SyntaxHighlighter
              language="html"
              style={materialDark}
              customStyle={{ borderRadius: '12px' }}
            >
              {`<!DOCTYPE html>
<html>
<head>
  <title>Document Title</title>
</head>
<body>
  <!-- Content goes here -->
</body>
</html>`}
            </SyntaxHighlighter>
            <li>
              Text formatting: Learn how to create headings, paragraphs, lists,
              and links within your web pages
            </li>
            <li>
              Working with images: Discover how to add images to your web pages
              and control their display.
            </li>
            <li>{`Creating tables: Learn how to structure tabular data using the <table>, <tr>, and <td> elements`}</li>
            <li>
              Building forms: Understand how to create interactive forms,
              collect user input, and handle form submissions
            </li>
            <li>{`Semantic elements: Explore HTML5's semantic elements, such as <header>, <nav>, <section>, and <footer>, and understand their role in creating accessible and well-structured web pages.`}</li>
            <SyntaxHighlighter
              language="html"
              style={materialDark}
              customStyle={{ borderRadius: '12px' }}
            >
              {`<header>
  <h1>Page Title</h1>
</header>

<nav>
  <ul>
    <li><a href="/">Home</a></li>
    <li><a href="/about">About</a></li>
    <li><a href="/contact">Contact</a></li>
  </ul>
</nav>

<section>
  <h2>About Us</h2>
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
</section>

<footer>
  <p>&copy; 2023 Your Company</p>
</footer>`}
            </SyntaxHighlighter>
          </ul>
          <Typography variant={'subtitle'}>
            By the end of this section, you will have a solid understanding of
            HTML and be able to create static web pages with proper structure
            and content.
          </Typography>

          <Typography
            sx={{ fontWeight: 700, fontSize: 28, color: colors.grey[300] }}
          >
            4. CSS Fundamentals
          </Typography>
          <Typography variant={'subtitle'}>
            CSS (Cascading Style Sheets) is used to style and visually enhance
            web pages. In this section, we will dive into the fundamentals of
            CSS and explore how to apply styles to HTML elements.
            <br /> <br /> You will learn how to create visually appealing
            layouts and make your web pages come to life. Topics covered in this
            section include:
          </Typography>
          <ul>
            <li>
              Selectors and specificity: Understand how CSS selectors work and
              how to target specific elements on your web pages
            </li>
            <li>
              Styling properties: Learn how to change colors, fonts,
              backgrounds, borders, and other visual properties of HTML elements
            </li>
            <li>
              Layouts and positioning: Explore different CSS layout techniques,
              including CSS positioning, flexbox, and grid, to create responsive
              and flexible page layouts.
            </li>
            <li>
              Responsive design: Learn how to make your web pages adapt to
              different screen sizes and devices using media queries.
            </li>
            <li>
              CSS transitions and animations: Discover how to add smooth
              transitions and animations to your web pages, enhancing the user
              experience.
            </li>
            <SyntaxHighlighter
              language="css"
              style={materialDark}
              customStyle={{ borderRadius: '12px' }}
            >
              {`header {
  background-color: #333;
  color: #fff;
  padding: 20px;
}

header h1 {
  margin: 0;
}

/* Style for navigation */
nav {
  background-color: #f2f2f2;
  padding: 10px;
}

nav ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
}`}
            </SyntaxHighlighter>
          </ul>
          <Typography variant={'subtitle'}>
            By the end of this section, you will have a solid understanding of
            CSS and be able to style your web pages effectively.
          </Typography>
          <Typography
            sx={{ fontWeight: 700, fontSize: 28, color: colors.grey[300] }}
          >
            5. JavaScript Fundamentals
          </Typography>
          <Typography variant={'subtitle'}>
            JavaScript is a powerful programming language that adds
            interactivity and functionality to web pages. In this section, we
            will dive into the basics of JavaScript and explore its
            capabilities. <br /> <br />
            You will learn how to manipulate HTML and CSS, handle events, and
            build interactive features. Topics covered in this section include:
          </Typography>
          <ul>
            <li>
              Variables, data types, and operators: Understand how to declare
              variables, work with different data types, and perform operations
              in JavaScript
            </li>
            <li>{`Variables, data types, and operators: Understand how to declare variables, work with different data types, and perform operations in JavaScript`}</li>
            <li>
              Functions and objects: Explore how to create reusable code with
              functions and work with objects and properties.
            </li>
            <li>
              DOM manipulation: Learn how to interact with the Document Object
              Model (DOM) to dynamically update and manipulate HTML and CSS
            </li>
            <li>
              Event handling: Discover how to respond to user actions and handle
              events such as clicks, form submissions, and keyboard
              interactions.
            </li>
          </ul>
          <Typography variant={'subtitle'}>
            By the end of this section, you will have a solid understanding of
            JavaScript and be able to add interactivity and dynamic behavior to
            your web pages.
            <br />
            <br />
            These are the foundational topics that will provide you with a
            strong understanding of web development. As you progress through the
            course, you will build upon these fundamentals and explore more
            advanced concepts and technologies.
            <br />
            <br />
            Remember, practice and hands-on projects are crucial for mastering
            web development skills. So, be prepared to apply your knowledge by
            working on real-world examples and projects throughout the course.
            <br />
            <br />
            Get ready for an exciting journey into the world of web development!
          </Typography>
          <Stack direction={'row'} justifyContent={'space-between'}>
            <Stack></Stack>
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
                navigate('/introduction/roadmap-advanced');
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
                Roadmap Advanced >>
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
      <Typography>Introduction Web Development Course</Typography>
      <Typography>Introduction to Client-Server Model</Typography>
    </Stack>
  );
  return (
    // <Paper
    //   style={{
    //     maxHeight: '90vh',
    //     overflow: 'auto',
    //     backgroundColor: '#050505',
    //   }}
    // >
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
    // </Paper>
  );
}

export default RoadmapBasic;
