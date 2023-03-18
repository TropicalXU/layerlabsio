import standard from '../assets/idea.png';
import packageImg from '../assets/package.png';
import shuttle from '../assets/shuttle.png';
import web from '../assets/front-end.png';
import mobile from '../assets/application.png';
import custom from '../assets/custom-features.png';
import seo from '../assets/performance.png';
import security from '../assets/data-encryption.png';
import support from '../assets/developer.png';
import html from '../assets/html5.png';
import css from '../assets/css3.png';
import bootstrap from '../assets/bootstrap.png';
import figma from '../assets/figma.png';
import git from '../assets/git.png';
import github from '../assets/github.png';
import javascript from '../assets/javascript.png';
import mongodb from '../assets/mongodb.png';
import nodejs from '../assets/nodejs.png';
import tailwind from '../assets/tailwind-css.png';
import react from '../assets/logo512.png';
import express from '../assets/express.png';
import shirleysstudio from '../assets/shirleysstudio1.png';
import krypt from '../assets/krypt.png';
import metaverse from '../assets/metaverse.png';

//project data
export const projects = 
    [
        {
            id: 0,
            featured: true,
            title: 'Shirleys Art Studio',
            intro: 'A small business website built for an artist to showcase their work and passion for art. This website features a built in store with secure visa payments using Stripe. You can easily browse the gallery, find a painting you like view and buy. The checkout experience is quick and easy, make a purchase within seconds.',
            description: "Shirley's Art Studio is an online gallery website with a built in online store which feature secure payments using Stripe. At Layerlabs I wanted to re-create a live art gallery, showcasing and displaying each of Shirley's art pieces. This was key to creating the look and feel of the website. We wanted to make sure the paintings brought out the color while the website theme remained clean. I implemented a responsive design, suitable for all devices as well as clear navigation tools, Search Engine Optimization and security features. With all of this implemented Shirley was thrilled with the end result. Having her own website to showcase and sell her artwork allows Shirley a platform to share her work beyond the gallery and reach even more enthusiastic art lovers who can now get in touch from anywhere in the world.",
            image: `${shirleysstudio}`,
            launch: 'December 2022',
            url: 'https://www.shirleysartstudio.com',
            github: 'https://github.com/TropicalXU/shirleysartstudiov2'

        },
        {
            id: 1,
            featured: true,
            title: 'Krypt',
            intro: 'Easily send transactions to anyone in the world using your Metamask wallet with Krypt. With our platform, you can transfer funds within seconds on the blockchain while also adding a personal touch. Not only can you send funds with Krypt, but you can also include a unique message that generates a randomized gif associated with the message. Make your transactions more engaging and personal with Krypt.',
            description: 'Easily send transactions to anyone in the world using your Metamask wallet with Krypt. With our platform, you can transfer funds within seconds on the blockchain while also adding a personal touch. Not only can you send funds with Krypt, but you can also include a unique message that generates a randomized gif associated with the message. Make your transactions more engaging and personal with Krypt.',
            image: `${krypt}`,
            launch: 'March 2023',
            url: 'https://krypt.layerlabs.io/',
            github: 'https://github.com/TropicalXU/krypt.git'
        },
        {
            id: 2,
            featured: true,
            title: 'Metaversus',
            intro: 'Welcome to Metaversus! Here, you can explore a vast array of virtual worlds that offer unique and immersive experiences. Each world is distinct, with its own set of rules, challenges, and opportunities.',
            description: "Metaversus was built primarly using Framer Motion as the front-end framework for the website. Here you can see beautiful animated designs capturing the users attention from beginning to end. This application is built using both modern React and Next.js frameworks. ",
            image: `${metaverse}`,
            launch: 'March 2023',
            url: 'https://metaversus.layerlabs.io/',
            github: 'https://github.com/TropicalXU/metaversus'
        }
    ];

export const links = [
    {
        id: 'link-1',
        icon: 'fa fa-brands fa-github fa-2xl home-fa text-white px-2 ml-1',
        title: 'Github',
        url: 'https://github.com/TropicalXU'
    },
    {
        id: 'link-2',
        icon: 'fa fa-brands fa-instagram home-fa fa-2xl text-white px-2 ml-1',
        title: 'Instagram',
        url: 'https://www.instagram.com/layerlabs.io'
    },
    {
        id: 'link-3',
        icon: 'fa fa-brands fa-medium  fa-2xl text-white px-2 ml-1',
        title: 'Medium',
        url: 'https://medium.com/@seanhackettdev'
    },
]

export const cardData = 
    [
        {
            id: 1,
            title: 'Pro Custom',
            subtitle: 'Professional, fully custom & responsive websites built from scratch.',
            icon: 'fa fa-cubes fa-lg'
        },
        {
            id: 2,
            title: 'Packages',
            subtitle: 'Choose from 3 different packages: Standard, Advanced & Business +',
            icon: 'fa fa-solid fa-cube fa-lg'
        },
        {
            id: 3,
            title: 'Support',
            subtitle: 'Continued ongoing guided support and advice.',
            icon: 'fa fa-check fa-lg'
        },
    ]


export const packageData = 
    [
        {
            id: 1,
            title: 'Standard',
            subtitle: 'Pre-built custom website',
            list1: 'Up to 5 individually designed pages.',
            list2: 'Mobile optimized design and development.',
            list3: 'Standard SEO integration.',
            img: `${standard}`,
            link: '/standard-package'
        },
        {
            id: 2,
            title: 'Advanced',
            subtitle: 'Flexible custom design & features',
            list1: 'Up to 10 individual fully custom pages.',
            list2: 'Collabarative detail and design.',
            list3: 'High level interactivity & animation.',
            img: `${packageImg}`,
            link: 'advanced-package'
        },
        {
            id: 3,
            title: 'Business +',
            subtitle: 'Flexible custom design, business features and functionality',
            list1: 'Up to 15 individually designed custom pages. ',
            list2: 'Advanced interactivity and animation. ',
            list3: 'Database integration.',
            img: `${shuttle}`,
            link: '/business-package'
        },
    ]

export const includedCards =
    [
        {
            id: 1,
            title: 'Bespoke Web Design',
            img: `${web}`
        },
        {
            id: 2,
            title: 'Mobile Optimized',
            img: `${mobile}`
        },
        {
            id: 3,
            title: 'Custom Development',
            img: `${custom}`
        },
        {
            id: 4,
            title: 'Seo Integration',
            img: `${seo}`
        },
        {
            id: 5,
            title: 'Security',
            img: `${security}`
        },
        {
            id: 6,
            title: 'Support',
            img: `${support}`
        },
    ]

export const techLogos =
    [
        {
            id: 1,
            img: `${html}`,
        },
        {
            id: 2,
            img: `${css}`,
        },
        {
            id: 3,
            img: `${bootstrap}`,
        },
        {
            id: 4,
            img: `${tailwind}`,
        },
        {
            id: 5,
            img: `${react}`,
        },
        {
            id: 6,
            img: `${javascript}`,
        },
        {
            id: 7,
            img: `${figma}`,
        },
        {
            id: 8,
            img: `${github}`,
        },
        {
            id: 9,
            img: `${express}`,
        },
        {
            id: 10,
            img: `${nodejs}`,
        },
        {
            id: 11,
            img: `${mongodb}`,
        },
        {
            id: 12,
            img: `${git}`,
        },
    ]