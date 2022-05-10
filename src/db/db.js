import html from '../assets/html.png';
import css from '../assets/css.png';
import js from '../assets/js.png';
import react from '../assets/react.svg';
import sass from '../assets/sass.png';
import node from '../assets/nodejs.png';
import firebase from '../assets/firebase.png';
import redux from '../assets/redux.png';
import mongo from '../assets/mongo.png';
import typescript from '../assets/typescript.png';
import git from '../assets/git.png';
import journal from '../assets/journal.png';
import calendar from '../assets/calendar.png';
import experta from '../assets/experta.png';
import argensteam from '../assets/argensteam.png';
import github from '../assets/github.png';
import gmail from '../assets/gmail.svg';
import linkedin from '../assets/linkedin.svg';
import wp from '../assets/whatsapp.svg';

export const skills = [
    {
        name: 'HTML',
        icon: html,
    },
    {
        name: 'CSS',
        icon: css,
    },
    {
        name: 'SASS',
        icon: sass,
    },
    {
        name: 'JavaScript',
        icon: js,
    },
    {
        name: 'TypeScript',
        icon: typescript,
    },
    {
        name: 'ReactJS',
        icon: react,
    },
    {
        name: 'Redux',
        icon: redux,
    },
    {
        name: 'NodeJS',
        icon: node,
    },
    {
        name: 'MongoDB',
        icon: mongo,
    },
    {
        name: 'Firebase',
        icon: firebase,
    },
    {
        name: 'Git',
        icon: git,
    }
];

export const projects = [
    {
        name: 'Journal App',
        description: 'Creación de notas por días',
        img: journal,
        link: 'https://journal-app-ayrds.netlify.app/',
        github: 'https://github.com/AyrDS/journal-app',
        icons: [
            {
                id: 1,
                icon: react
            },
            {
                id: 2,
                icon: redux
            },
            {
                id: 3,
                icon: firebase
            }
        ]
    },
    {
        name: 'Calendar MERN',
        description: 'Calendario de eventos con MERN',
        img: calendar,
        link: 'https://calendar-ayrds.herokuapp.com/',
        github: 'https://github.com/AyrDS/calendar-mern',
        icons: [
            {
                id: 1,
                icon: react
            },
            {
                id: 2,
                icon: mongo
            },
            {
                id: 3,
                icon: node
            },
            {
                id: 4,
                icon: redux
            }
        ]
    },
    {
        name: 'Minijuego Experta',
        description: 'Minijuego de evitar obstaculos',
        img: experta,
        link: 'https://experta-juego.netlify.app/',
        github: 'https://github.com/AyrDS/minijuego',
        icons: [
            {
                id: 1,
                icon: html
            },
            {
                id: 2,
                icon: css
            },
            {
                id: 3,
                icon: js
            }
        ]
    },
    {
        name: 'Argensteam React',
        description: 'Tienda virtual de juegos y consolas',
        img: argensteam,
        link: undefined,
        github: 'https://github.com/AyrDS/reactCoder',
        icons: [
            {
                id: 1,
                icon: html
            },
            {
                id: 2,
                icon: css
            },
            {
                id: 3,
                icon: react
            },
            {
                id: 4,
                icon: firebase
            }
        ]
    }
];

export const contacts = [
    {
        name: 'Github',
        icon: github,
        link: 'https://github.com/AyrDS'
    },
    {
        name: 'Gmail',
        icon: gmail,
        link: 'https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=ayrtonds97@gmail.com'
    },
    {
        name: 'Linkedin',
        icon: linkedin,
        link: 'https://www.linkedin.com/in/ayrds/'
    },
    {
        name: 'Whatsapp',
        icon: wp,
        link: 'https://wa.me/+541150601057/?text=¡Hola!%20'
    }
];