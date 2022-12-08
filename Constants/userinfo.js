//PLEASE FOLLOW THE FORMAT OF THIS FILE.

import {
    faGithubAlt,
    faLinkedinIn,
    faMediumM,
    faFacebook,
    faTwitter,
    faInstagram,
    faYoutube,
    faBehance
} from "@fortawesome/free-brands-svg-icons"


export const userinfo = {
    logoText: "Hamed Abedini", //This text is visible on your navbar and footer like your logo.
    contact: {
        email: 'hamed.abedini68@gmail.com', //It is always a good idea to mention your email on your website. Good platform to communicate.
        phone: '0451291512', //Phone number is optional, if you dont want it, consider leaving it blank .
        countrycode: '+61' //It is advisable to add the country code incase you mention your contact number.
    },
    socials: [
        //For aesthetics, it is advisable for you to mention upto 4 social media links only. Fill in the links.
        //more icons are imported above, use as you like them.
        {type: 'github', link: '', icon: faGithubAlt},
        {type: 'linkedin', link: 'https://www.linkedin.com/in/hamed-abedini-41041bb6/', icon: faLinkedinIn},
        {type: 'medium', link: '', icon: faMediumM},
    ],
    greeting: {
        //this text goes on your landing page
        title: "Hey there, I am Hamed.",
        subtitle: "I am an experienced Electrical Engineer with a demonstrated history of working in various electrical and electronic manufacturing industries. I am also highly skilled in interior & outdoor lighting design, building, Dialux, PLC, and Industrial electrical power as well as installation lighting systems. Qualified with an MSc in electrical engineering, I have a solid background in designing, manufacturing and creating innovative lighting products. I have more than 10 years of experience in providing better light for a better life."
    },
    capabilities: [
        //this text goes on your home page in table format.
        //For aesthetics, it is advisable for you to mention upto 4 catgeories links only.
        //For aesthetics, it is advisable for you to keep similar number of skills in each category
        {
            category: "Lighting Control", // eg.frontend, backend, devops etc
            skills: ["Knowledge", "equipment", "communication"] //eg. react, html, python etc.
        },
        {
            category: "Architectural Lighting",
            skills: ["Tight deadlines", "Colour vision", "Motion pictures"]
        },
        {
            category: "Street Lighting",
            skills: ["Maintenance", "Design", "Improvement"]
        },
        {
            category: "Management",
            skills: ["Listening skills", "Relationship building", "Strategic thinking"]
        },
    ],
    about: {
        //this text goes at the bottom of your home page.
        content: "I am an experienced Electrical Engineer with a demonstrated history of working in various electrical and electronic manufacturing industries. I am also highly skilled in interior & outdoor lighting design, building, Dialux, PLC, and Industrial electrical power as well as installation lighting systems. Qualified with an MSc in electrical engineering, I have a solid background in designing, manufacturing and creating innovative lighting products. I have more than 10 years of experience in providing better light for a better life.",
        resume: "/" //link your resume here. it can be drive link or any other link
    },
    education: {
        visible: true, //set this to false if you want to omit this section
        educationList: [
            {
                time: '2003 May - Oct 2007', //timespan
                title: 'Diploma', //eg. BTech in Compuster Engineering
                organization: 'Bu Ali Sina High School', //eg. VJTI, Mumbai
                description: 'Mathematics' //eg. secured a cgpa of 9.25 in all sems appeared in so far
            },
            {
                time: '2008 May - Oct 2012',
                title: 'Bachelor of Science',
                organization: 'Hamedan University of Technology',
                description: 'Electrical engineering engineering'
            },
            {
                time: '2015 May - Oct 2018',
                title: 'Master of Science',
                organization: 'Islamic Azad University',
                description: 'Electrical engineering '
            },
        ],
    },
    experience: {
        visible: true, //set this to false if you want to omit this section
        experienceList: [
            {
                company: 'Iran Electric Lighting', //company name eg.Microsoft
                companylogo: '', //companylogo
                position: 'CEO', //post you held eg.Senior SDE
                time: 'Jan 2016 - Dec 2021', //timespan
                description: 'My duty as a group manager has been to set up and improve the human resource management system.' //eg. spearheaded the graphics team in designing SASS product UIs
            },
            {
                company: 'Ekbatan Gas Control',
                companylogo: '',
                position: 'Electrical Technician',
                time: 'Nov 2009 - Aug 2018',
                description: 'My duties was design, develop, and test electrical devices and equipment, including communications systems, power generators, motors and navigation systems, and electrical systems for automobiles and aircraft. '
            },
            {
                company: 'Behsa Noor Wholesaler lighting company',
                companylogo: '',
                position: 'CEO',
                time: 'Aug 2020 - Current',
                description: 'My duties was managing a company\'s overall operations. This may include delegating and directing agendas, driving profitability, managing company organizational structure, strategy, and communicating with the board.'
            },
        ],
    },
    blogs: {
        //set this to false if you want to omit this section
        visible: false
    },
}

export const headings = {
    //you can customise all the headings here.
    workHomePage: 'Work',
    workMainPage: 'Projects',
    capabilities: 'Capabilities',
    about: 'About Me',
    education: 'Education',
    experience: 'Experiences',
    blogs: 'I write!',
    contact: 'Contact Me',
}

export const ctaTexts = {
    //you can customise all the cta texts here.
    landingCTA: 'My work',
    workCTA: 'View All',
    capabCTA: 'Get in Touch',
    educationCTA: 'About Me',
    resumeCTA: 'Resume',
    submitBTN: 'Submit'
}