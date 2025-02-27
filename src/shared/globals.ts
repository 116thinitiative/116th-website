/**
 * file for creating global types + variables used by tsx files
 */

import { ReactNode } from 'react';

export type LinkType = {
    text: string,
    src: string,
};

export type navLinkItem = {
    type: "default",
    link: LinkType,
} ;
export const navLinks: navLinkItem[] = [{
    type: "default",
    link: {
        text: "About",
        src: "/about-us"
    },
},
{
    type: "default",
    link: {
        text: "Contact",
        src: "/contact-us"
    },
},
{
    type: "default",
    link: {
        text: "Events",
        src: "/events"
    },
},
{
    type: "default",
    link: {
        text: "Press",
        src: "/publications"
    },
   
},
{
    type: "default",
    link: {
        text: "Gallery",
        src: "/gallery"
    },
},
];

export type footerLinkItem = {
    type: "default",
    link: LinkType,
} | 
{
    type: "dropdown",
    header: string, 
    dropdownLinks: LinkType[]
};

export const footerLinks: footerLinkItem[] = [{
    type: "default",
    link: {
        text: "Instagram",
        src: "https://www.instagram.com/the116thinitiative/"
    },
}, { type: "default",
    link: {
        text: "Linktree",
        src: "https://linktr.ee/barnardmutualaid"
    }, 
},{ type: "default",
    link: {
    text: "116thinitiative@gmail.com",
    src: "mailto:116thinitiative@gmail.com"
    },
}, {
    type: "default",
    link: {
        text: "Join our mailing list!",
        src: "https://docs.google.com/forms/d/e/1FAIpQLSf-wrx773V5_mtBLkF0Rj6RDvYdyFKe8a9_NFpryXApG0Sl7A/viewform"
    },
},
];

export type PublicationsCardProps = {
    title: string,
    publishedWhere: string,
    date: string,
    preview: string,
    to: string,
};

export const publications: PublicationsCardProps[] =[{
    title:'Columbia Community Responds As SCOTUS Strikes Down Affirmative Action',
    publishedWhere:'Bwog',
    date: 'Jul 14, 2023',
    preview:'In addition to publicly condemning the Court’s decision, some student groups are taking action to combat potential effects of the ruling. The 116th Initiative, a mutual aid society run by Barnard and Columbia students, has released a resource guide containing information about a variety of educational opportunity programs serving low-income students of color. ',
    to:'https://bwog.com/2023/07/columbia-community-responds-as-scotus-strikes-down-affirmative-action/',             
}, {
    title:'Barnard Mutual Aid Builds A Culture Of Community Care',
    publishedWhere:'Bwog',
    date: 'Oct 28, 2021',
    preview:'“Students feel compelled to give to others,” she says, “even when they’re struggling, because the systems that are in place to support them aren’t working the way they’re supposed to, or at least the way they’re credited to.” ',
    to:'https://bwog.com/2021/10/barnard-mutual-aid-builds-a-culture-of-community-care/'
},

{
    title:'After Barnard fire, students come together to support those in need',
    publishedWhere:'Spec',
    date: 'Oct 23, 2021',
    preview:'“Twenty four hours ago, I was just like, ‘How is my friend going to pay for all [of] this?’” de Castro Basto said. “[I am] still in disbelief.” Zborovsky-Fenster started the Barnard Mutual Aid Network last summer to raise and distribute funds to Barnard students in need of financial assistance. In less than 24 hours, Barnard Mutual Aid had raised over $10,000 for the victims of the fire and other students in financial need; according to its Instagram account, it is aiming for $15,000."',
    to:'https://www.columbiaspectator.com/news/2021/10/22/after-barnard-fire-students-come-together-to-support-those-in-need/'
},

]

export type EventCardType = {
    title: string,
    date: string,
    description: string,
    imgLink?: string,
    rsvp?: string,
}

export const eventCards: EventCardType[] = [{
    title:"MUTUAL AID IS LOVE",
    date: "February 28, 2025 | 8pm–11pm | 501 Dodge",
    description:"Join To Resist is to Love, the 116th Initiative, Postcrypt Coffee House, and WBAR for a mutual aid concert! All ticket proceeds will be donated to the 116th Initiative. Featuring musicians from Postcrypt Coffee House & WBAR, custom To Resist is To Love prints, and festive loving-season goodies. We’re excited to celebrate the season of love by giving back to the community we love.",
    imgLink: "../../assets/images/events/event1.jpg",
    rsvp: "https://www.eventbrite.com/e/116-x-tritl-x-postcrypt-x-wbar-mutual-aid-is-love-tickets-1257308616919?aff=oddtdtcreator",
}/*,
{
    title:"Community Closet Sort and Pop-Up",
    startDate: new Date(2023, 9, 7),
    endDate: new Date(2023, 9, 8),
    description:"Hosted alongside the Columbia First-Generation Low Income Network and the Columbia Housing Equity Project, students – specifically those that face financial burdens – are invited to bring in their clothes and exchange them with others. This event provides a welcoming and non-judgemental way for them to get assistance, while encouraging cyclicality on campus. Many students are able to find stylish and unique pieces that reaffirm their identities and help them make friends in the process!",
},
{
    title:"Art Fair",
    startDate: new Date(2023, 11, 2),
    endDate: new Date(2023, 11, 2),
    description:"A fundraiser for the Mutual Aid Fund where we invite local artists, designers and performers to sell their goods all in one place and donate a portion of their proceeds to the initiative. ",
},
{
    title:"Community Closet Sort and Pop-Up",
    startDate: new Date(2023, 10, 4),
    endDate: new Date(2023, 10, 5),
    description:"Hosted alongside the Columbia First-Generation Low Income Network and the Columbia Housing Equity Project, students – specifically those that face financial burdens – are invited to bring in their clothes and exchange them with others. This event provides a welcoming and non-judgemental way for them to get assistance, while encouraging cyclicality on campus. Many students are able to find stylish and unique pieces that reaffirm their identities and help them make friends in the process!",
},
{
    title:"Community Closet Sort and Pop-Up",
    startDate: new Date(2023, 11, 9),
    endDate: new Date(2023, 11, 10),
    description:"Hosted alongside the Columbia First-Generation Low Income Network and the Columbia Housing Equity Project, students – specifically those that face financial burdens – are invited to bring in their clothes and exchange them with others. This event provides a welcoming and non-judgemental way for them to get assistance, while encouraging cyclicality on campus. Many students are able to find stylish and unique pieces that reaffirm their identities and help them make friends in the process!",
},*/]

export type AccordionData = {
    title: string;
    content: ReactNode;
  };
