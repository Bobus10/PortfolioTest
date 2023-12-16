import * as icon from './icons'

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
        position: "Trainee",
        duties: "initial hardware diagnostics, repair of damaged components, configuration of network equipment",
        monthStart: "07",
        yearStart: "2022",
        monthEnd: "07",
        yearEnd: "2022",
    },
    {
        companyName: "Alba komputery",
        position: "Trainee",
        duties: "initial hardware diagnostics, repair of damaged components, hardware configuration and uploading the necessary software",
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
        name: "Online Shop",
        route: "https://github.com/Bobus10/Licencjat",
        description: "Main page contains filters by price and product categories, page pagination. Shopping cart with necessary functions (changing the number of purchased products and deleting them). Section with completed orders. Admin panel for managing the store with the functions of adding, editing, previewing and deleting products.",
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
        name: "Todo list",
        route: "https://github.com/Bobus10/ToDoList",
        description: "Adds, deletes and edits added tasks in real time. Completed tasks move to the section with other completed tasks. ",
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
        name: "Online test",
        route: "https://github.com/Bobus10/Bicycle_card_test",
        description: "The application displays one question out of several, collecting the selected answers. After completing the test, the user has a preview of all questions with their own and correct answers",
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
        name: "Portfolio",
        route: "https://github.com/Bobus10/portfolio",
        description: "Frontend side made in Next.js. Fully responsible. This website is intended to bring together all my projects and experience",
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