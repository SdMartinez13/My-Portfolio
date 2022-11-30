import aboutpic from "./components/Access/mePhoto.jpeg"

const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://thestephenmartinez.com/',
  title: 'JS.',
}

const about = {
  photo:aboutpic,
  // all the properties are optional - can be left empty or deleted
  name: 'Stephen Martinez',
  role: 'Full stack developer',
  description:
    'Code Fellows graduate where I received my Certificate of Training in Advanced Software Development with Javascript.  I\'m looking for a career where I can help others in the world of tech.',
  resume: 'https://docs.google.com/document/d/1ePw0fRU3exmrkEOQbym396Q6V7oSaxNNxIln60uy6Ls/edit?usp=sharing',
  social: {
    linkedin: 'https://www.linkedin.com/in/sdmartinez/',
    github: 'https://github.com/SdMartinez13',
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'WenJobs',
    description: 'WenJobs gives you the tools to find in-network Web3 opportunities and identify the connections that can help you land your next role.',
    stack: ['React.js, Figma, Ant Design, Firebase, Puppeteer'],
    sourceCode: 'https://github.com/Wen-Jobs',
    livePreview: 'https://wenjobs.xyz/',
  },
  {
    name: 'Schoolhouse Talk (Backend)',
    description: 'School House Talk will act as a single source of truth for communication and information about school activities and events between faculty and parents',
    stack: ['AuthO, Node.JS, Axios, Base-64, BCrypt, Chance, Express, Heroku, Inquirer, Postgres, Sequelize, Jest, Socket.io, Socket.io-client, Supertest'],
    sourceCode: 'https://github.com/Team-Midterm/School-House-Talk',
    livePreview: 'https://school-house-talk.herokuapp.com/',
  },
  {
    name: 'Music Locator',
    description: 'Users can search for live music events in the area of their choosing.  Users can save events, mark events as attended, and delete events they no longer want to attend.',
    stack: ['React.js, Auth0, MongoDB, Ticketmaster API, CSS'],
    sourceCode: 'https://github.com/Team-Magenta',
    livePreview: 'https://music-locator.netlify.app/',
  },
  
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'HTML',
  'CSS',
  'JavaScript',
  'Express',
  'MySQL',
  'MongoDB',
  'React',
  'Redux',
  'SASS',
  'Material UI',
  'Ant Design',
  'Firebase',
  'Git',
  'MERN',
  'Heroku',
  'Netlify',
  'AWS'
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'smartimar21@gmail.com',
}

export { header, about, projects, skills, contact }
