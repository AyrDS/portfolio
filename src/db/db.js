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
import expenseApp from '../assets/expense-app.png';
import github from '../assets/github.png';
import gmail from '../assets/gmail.svg';
import linkedin from '../assets/linkedin.svg';
import wp from '../assets/whatsapp.svg';
import portfolio from '../assets/portfolio.png';
import currencyCorn from '../assets/curr-corn.png';
import styledCompoents from '../assets/styled.svg'
import socketIo from '../assets/socket-io.png';
import ayrdschat from '../assets/ayrds-chat.png';
import nextask from '../assets/demo-next.png';

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
        name: 'Styled Components',
        icon: styledCompoents
    },
    {
        name: 'NodeJS',
        icon: node,
    },
    {
        name: 'Socket.IO',
        icon: socketIo
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
        name: 'NexTask',
        description: 'Web app de gestión de proyectos',
        img: nextask,
        link: 'https://nex-task.netlify.app/',
        github: 'https://github.com/AyrDS/nextTask',
        icons: [
            {
                id: 1,
                icon: react,
            },
            {
                id: 2,
                icon: node
            },
            {
                id: 3,
                icon: mongo
            },
            {
                id: 4,
                icon: socketIo
            }
        ]
    },
    {
        name: 'Ayrds-chat',
        description: 'Aplicación de chat con autenticación',
        img: ayrdschat,
        link: 'https://ayrds-chat.netlify.app/#/auth/register',
        github: 'https://github.com/AyrDS/ayrds-chat',
        icons: [
            {
                id: 1,
                icon: react,
            },
            {
                id: 2,
                icon: node
            },
            {
                id: 3,
                icon: mongo
            },
            {
                id: 4,
                icon: socketIo
            }
        ]
    },
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
        name: 'Expense App',
        description: 'Aplicación de controlador de gastos',
        img: expenseApp,
        link: 'https://expenseapp-ayrds.netlify.app/',
        github: 'https://github.com/AyrDS/expenseApp',
        icons: [
            {
                id: 1,
                icon: react
            },
        ]
    },
    {
        name: 'Portfolio actual',
        description: 'Un vistazo a mi perfil',
        img: portfolio,
        link: undefined,
        github: 'https://github.com/AyrDS/portfolio',
        icons: [
            {
                id: 1,
                icon: react
            }
        ]
    },
    {
        name: 'Currency Convert',
        description: 'Conversión de distintas divisas',
        img: currencyCorn,
        link: 'https://curr-corn.netlify.app/',
        github: 'https://github.com/AyrDS/currency-converter',
        icons: [
            {
                id: 1,
                icon: react
            },
            {
                id: 2,
                icon: typescript
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