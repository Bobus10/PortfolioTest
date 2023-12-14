import * as icon from './icons'
import daneEn from '../messages/en.json'
import danePl from '../messages/pl.json'

export const navLinks = [
    {
        route: "#",
        label: "About Me",
    },
    {
        route: "#",
        label: "Experience",
    },
    {
        route: "#",
        label: "Projects",
    },
];

export const contacts = [
    {
        route: "https://www.linkedin.com/in/rkosieradzki/",
        src: icon.linkedin.src,
        label: icon.linkedin.label,
    },
    {
        route: "https://github.com/Bobus10",
        src: icon.github.src,
        label: icon.github.label,
    },
];

export const experience = [
    {
        companyName: "Zakłady mięsne Zakrzewscy",
        position: {
            en: daneEn.Experience.positions.trainee,
            pl: danePl.Experience.positions.trainee,
        },
        duties: {
            en: daneEn.Experience.duties['0job'],
            pl: danePl.Experience.duties['0job'],
        },
        monthStart: "07",
        yearStart: "2022",
        monthEnd: "07",
        yearEnd: "2022",
    },
    {
        companyName: "Alba komputery",
        position: {
            en: daneEn.Experience.positions.trainee,
            pl: danePl.Experience.positions.trainee,
        },
        duties: {
            en: daneEn.Experience.duties['1job'],
            pl: danePl.Experience.duties['1job'],
        },
        monthStart: "05",
        yearStart: "2019",
        monthEnd: "05",
        yearEnd: "2019",
    },
];

export const cv = {
    route: "./assets/pdf/Kosieradzki_Robert_CV_eng.pdf",
    label: "Kosieradzki_Robert_CV",
};

export const email = {
    email: "robert.kosieradzki@gmail.com",
    label: "Email",
};

export const projects = [
    {
        // name: "Online shop",
        name: { 
            en: daneEn.Projects['0name'], 
            pl: danePl.Projects['0name'],
        },
        route: "https://github.com/Bobus10/Licencjat",
        description: {
            en: daneEn.Projects['0description'],
            pl: danePl.Projects['0description'],
        },
        technologies: [ 
            {
                src: icon.laravel.src,
                label: icon.laravel.label,
            },
            {
                src: icon.bootstrap.src,
                label: icon.bootstrap.label,
            },
            {
                src: icon.mysql.src,
                label: icon.mysql.label,
            },
            {
                src: icon.javascript.src,
                label: icon.javascript.label,
            },
        ],
    },
    {
        name: { 
            en: daneEn.Projects['1name'], 
            pl: danePl.Projects['1name'],
        },
        route: "https://github.com/Bobus10/ToDoList",
        description: {
            en: daneEn.Projects['1description'],
            pl: danePl.Projects['1description'],
        },
        technologies: [ 
            {
                src: icon.laravel.src,
                label: icon.laravel.label,
            },
            {
                src: icon.tailwindcss.src,
                label: icon.tailwindcss.label,
            },
            {
                src: icon.mysql.src,
                label: icon.mysql.label,
            },
            {
                src: icon.laravelLivewire.src,
                label: icon.laravelLivewire.label,
            },
        ],
    },
    {
        name: { 
            en: daneEn.Projects['2name'], 
            pl: danePl.Projects['2name'],
        },
        route: "https://github.com/Bobus10/Bicycle_card_test",
        description: {
            en: daneEn.Projects['2description'],
            pl: danePl.Projects['2description'],
        },
        technologies: [ 
            {
                src: icon.laravel.src,
                label: icon.laravel.label,
            },
            {
                src: icon.tailwindcss.src,
                label: icon.tailwindcss.label,
            },
            {
                src: icon.mysql.src,
                label: icon.mysql.label,
            },
            {
                src: icon.javascript.src,
                label: icon.javascript.label,
            },
        ],
    },
    {
        name: { 
            en: daneEn.Projects['3name'], 
            pl: danePl.Projects['3name'],
        },
        route: "https://github.com/Bobus10/portfolio",
        description: {
            en: daneEn.Projects['3description'],
            pl: danePl.Projects['3description'],
        },
        technologies: [ 
            {
                src: icon.next.src,
                label: icon.next.label,
            },
            {
                src: icon.tailwindcss.src,
                label: icon.tailwindcss.label,
            },
        ],
    },
];