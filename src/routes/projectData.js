import happyTriangles from '/images/happy-triangles.jpg';
import habitPyramid from '/images/habit-pyramid.png';
import instaClone from '/images/insta-clone.png';
import sinatraRecord from '/images/sinatra.jpg';
import spinner from '/images/spinner.jpg';
import habitFractV2Img from '/images/habfract-screenshot-masked.png';
import habitFractV2ImgFront from '/images/habitfractv2.jpg';

export default {
  habitFractV1: {
    title: 'Local storage Habit Tracker',
    mainText:
      'Stemming from a project in the Launch School syllabus for backend, focusing on local storage and the ERB templating language.//This was my first go at building a basic interface for the visualisation of habit structures. I decided to use a hierarchy of triangles, trying to make 3 levels that would stack one on top of the other. I had success but it relied on too much monkeypatching of the SwiperJS API to be sustainable.',
    subText: 'A simplistic linear habit tracker with a Sinatra backend',
    img: happyTriangles,
    img2: '',
    skills: [
      'Building a responsive UI',
      'Local Storage',
      'Using New Libraries',
      'Testing',
    ],
    libs: ['jQuery Swiper', 'Bootstrap 4 & FlatUI', 'Sinatra', 'ERB'],
    langs: 'HTML, CSS, JavaScript, Ruby',
    gitLink: 'https://github.com/nick-stebbings/habit_triangles',
    demoLink: 'https://habit-triangles.herokuapp.com/',
    blogLink:
      'https://n-stebbings.medium.com/from-session-cookie-to-do-list-to-fractal-distributed-listmania-part-1-645911140e53',
  },
  habitFractV2: {
    title: 'HabitFract v1 Frontend',
    mainText:
      'A development of my first habit tracking app to include hierarchical visualisation of the habits using the d3 library (Data Driven Documents). This was a much more ambitious project than the one from which it stemmed. I moved to a multi-layered architecture: my first single-paged app. I also performed a full manual deployment to a Digital Ocean droplet, Dockerised both layers and used Github actions and Dockerhubfor CD//I spent some time working on integrating d3-hierarchy visualisations with a lightweight frontend framework called Mithril. Since Mithril is un-opiniated about global state management I tried to find my own solutions using functional streams of data. This prepared me well for learning Redux and understanding React state hooks, but was ultimately buggy and hard to maintain.//I plan to reuse the d3 interface in v2 of the project, since much of the logic was componentised and written in JSX',
    subText: 'A fractal habit tracking single page application',
    img2: habitFractV2Img,
    img: habitFractV2ImgFront,
    skills: [
      'CI/CD',
      'Data Visualisation',
      'Using MVC Frameworks',
      'Figma Design from Scratch',
      'Build-first methodology',
      'Code Splitting',
    ],
    langs: 'Ruby, JavaScript, Sass & PostCSS',
    libs: ['D3js', 'Tailwind CSS', 'Webpack 4', 'Mithril'],
    demoLink: 'https://habfract.life/#!/vis/habit-tree?demo=true',
    gitLink:
      'https://github.com/nick-stebbings/fractal-habits-SPA-tailwind-mithril',

    // blogLink:
    //   'https://github.com/nick-stebbings/fractal-habit-pyramid-sinatraAPI',
  },
  habitFractV2api: {
    title: 'HabitFract v1 Web API using TDD',
    mainText:
      "An API developed for the single-page-application HabitFract. I tried to separate concerns as much as possible to allow the use of different storage mediums via adapters in the ROM-rb ORM library. This was a complicated library to learn but it ultimately enabled me to populate the visualisations on the frontend from web-scraped data.//I scraped data from eHow using Cheerio, formulated it in a YAML file, then used a Ruby Tree library to adapt it into a hierarchical JSON ternary tree. This could later allow rapid seeding of the database based on the user's choice of data.",
    subText: 'A web API for storing and tracking habits',
    img: sinatraRecord,
    img2: '',
    skills: [
      'Dockerising a SPA',
      'Nginx Reverse Proxy Setup',
      'Inversion of Control',
      'Dependency Injection',
      'TDD',
      'Web scraping',
      'Modified pre-order tree traversal',
    ],
    libs: ['Sinatra', 'Ruby Object Mapper', 'dry-rb', 'Cheerio', 'PostgreSQL'],
    langs: 'Ruby, SQL',
    demoLink: 'https://api.habfract.life/demo/domain/1/habit_tree',
    gitLink:
      'https://github.com/nick-stebbings/fractal-habit-pyramid-sinatraAPI',
    // blogLink:
    //   'https://github.com/nick-stebbings/fractal-habit-pyramid-sinatraAPI',
  },
  habitFractV3: {
    title: 'HabitFract v2 on Holochain',
    mainText:
      'This working project will in time be the culmination of my personal fractally-structured habit tracking application. Once I learnt the basics of Rust and was able to understand how to run a Holochain conductor on my local host, I started off with a "Profiles" microservice provided by members of the Holochain open-dev community.//I implemented Redux typesafe actions in TypeScript which is a good fit for matching the backend/frontend interfaces with Redux and managing loading states.',
    subText: 'Creating a distributed p2p marketplace for habit data',
    img: habitPyramid,
    img2: '',
    gitLink:
      'https://github.com/nick-stebbings/hc-react-redux-shared-todo-feed.git',
    skills: [
      'Testing React components & Redux',
      'BDD',
      'Decentralised Architecture',
      'Typesafe Actions',
    ],
    demoLink: '',
    libs: [
      'Redux Toolkit',
      'React Testing Library',
      'Tryorama (Holochain Testing)',
      'Redux Thunk Middleware for Holochain',
    ],
    langs: 'TypeScript, Rust',
    // blogLink:
    //   'https://github.com/nick-stebbings/fractal-habit-pyramid-sinatraAPI',
  },
  instagramClone: {
    title: 'React Instagram Clone',
    mainText:
      'I had fun building this copy of Instagram using a tutorial from Karl Hadwen. It was my second time using Firebase and I learnt how easy it is to setup user authentication. It was also good practice with React Hooks, Router, and managing loading states.',
    subText: 'An instagram clone following the course of karlhadwen',
    img: instaClone,
    img2: '',
    gitLink: 'https://github.com/nick-stebbings/insta-clone',
    demoLink: '',
    skills: [
      'User Auth with Firebase',
      'React Hooks',
      'Seeding Data to Firebase',
    ],
    libs: ['React', 'Tailwind CSS', 'React Loading Skeleton'],
    langs: 'JavaScript, NoSQL',
  },
  auntJenny: {
    title: 'Private App for AuntJenny.com.au',
    mainText:
      'Aunt Jenny is an e-commerce site specialising in products for weaving and spinning wool at home. I was briefed with planning and constructing a bespoke app to fit into the Admin dashboard of the existing store.//Much of the time was spent learning the Shopify auth processes, UI library and GraphQL API for fulfillment of orders. I was able to automate a certain amount of order processing and customer interaction, plus edit the storefront to update stock data on an automatic daily basis. I used PostgreSQL and server-side rendering (getServerSideProps) to capture data from the manufacturer via webhooks and to enhance dashboard reporting for the client.',
    subText: 'Shopify app for a local distributor of spinning wheels',
    img: spinner,
    img2: '',
    gitLink: '',
    demoLink: '',
    skills: [
      'React Custom Hooks',
      'GraphQL Hooks',
      'JWT and OAuth flow',
      'SSR',
      'Processing Webhooks',
    ],
    libs: ['NextJS', 'Koa', 'React', 'Polaris', 'Sequelize'],
    langs: 'JavaScript, GraphQL, Liquid',
  },
};
