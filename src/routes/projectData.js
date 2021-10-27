import habitPyramid from '/images/habit-pyramid.png';
import sinatraRecord from '/images/sinatra.jpg';
import habitFractV2Img from '/images/habfract-screenshot-masked.png';

export default {
  habitFractV1: {
    title: '1',
    mainText: '',
    subText: '',
    img: '',
    skills: ['Building a UI', 'Session Storage', 'Using new libraries'],
    langs: 'HTML, CSS, JavaScript',
    gitLink: 'https://github.com/nick-stebbings/habit_triangles',
    blogLink:
      'https://n-stebbings.medium.com/from-session-cookie-to-do-list-to-fractal-distributed-listmania-part-1-645911140e53',
  },
  habitFractV2: {
    title: 'HabitFract v2',
    mainText:
      'A development of my first habit tracking app to include hierarchical visualisation of the habits using the d3 library.',
    subText: 'A fractal habit tracking single page application',
    img: habitFractV2Img,
    skills: ['Data Visualisation', 'Using MVC Frameworks'],
    langs: 'Ruby, JavaScript',
    gitLink:
      'https://github.com/nick-stebbings/fractal-habits-SPA-tailwind-mithril',

    // blogLink:
    //   'https://github.com/nick-stebbings/fractal-habit-pyramid-sinatraAPI',
  },
  habitFractV2api: {
    title: 'HabitFract v2 Web API using TDD',
    mainText:
      'This was the API I developed for the single-page-application HabitFract.',
    subText: 'A web API for storing and tracking habits',
    img: sinatraRecord,
    skills: ['Inversion of Control', 'Dependency Injection', 'TDD'],
    langs: 'Ruby',
    gitLink:
      'https://github.com/nick-stebbings/fractal-habit-pyramid-sinatraAPI',
    // blogLink:
    //   'https://github.com/nick-stebbings/fractal-habit-pyramid-sinatraAPI',
  },
  habitFractV3: {
    title: '',
    mainText: '',
    subText: '',
    img: habitPyramid,
    gitLink: '',
    skills: [],
    langs: '',

    // blogLink:
    //   'https://github.com/nick-stebbings/fractal-habit-pyramid-sinatraAPI',
  },
  instagramClone: {
    title: '',
    mainText: '',
    subText: '',
    img: '',
    gitLink: '',
    skills: [],
    langs: '',

    // blogLink:
    //   'https://github.com/nick-stebbings/fractal-habit-pyramid-sinatraAPI',
  },
  auntJenny: {
    title: '',
    mainText: '',
    subText: '',
    img: '',
    gitLink: '',
    skills: [],
    langs: '',

    // blogLink:
    //   'https://github.com/nick-stebbings/fractal-habit-pyramid-sinatraAPI',
  },
};
