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

export const publications: PublicationsCardProps[] =[
{
    title:'Mutual Aid in New York City: Student-led Aid and Efforts, case study by Yeeun Yoo',
    publishedWhere:'UPenn',
    date:"May 2023",
    preview:'Through this study, I will be focusing on college-campus mutual aid by conducting a case study of the 116th Initiative of Barnard College. By analyzing the organizing and mobilizing efforts of the 116th Initiative, I hope to examine the parallels between college campus mutual aid and neighborhood-based initiatives.',
    to:"https://penniur.upenn.edu/uploads/media/Final_Poster_YeeunYoo.pdf"
    
}, {
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
    rsvp?: string,
}

export const eventCards: EventCardType[] = [
{
    title:"116th x BCRW Wealth Redistribution Workshop",
    date: "March 26, April 2, April 9, April 16, 2025 | 6:30-8pm | 6th Fl. Milstein (BCRW)",
    description: "How do we understand wealth and class privilege? What is the difference between philanthropy and mutual aid? What does reparations look like today? Join the 116th Initiative for a three-part workshop series to talk about equitable wealth redistribution.",
    rsvp:""
}, {
    title:"116th x FLI Network Bakesale",
    date: "March 28, 2025 | 12pm | Lerner Ramps",
    description: "Come pick up some sweet treats from the 116th Initiative and FLI Network! All donations go to the 116th mutual aid fund."
}, {
    title:"Repair and Rewear",
    date:"April 7, 2025 | 5:30-7:45pm | Barnard Design Center",
    description: "The 116th Initiative and Barnard Design Center present “Repair & Rewear”, an opportunity to sew, patch, and breathe new life into your wardrobe while promoting sustainability and economic justice. Bring clothes you’d like to refresh and repair, and bring any extra pieces you wish to donate. Learn essential mending skills and give your favorite items a longer life.",
    rsvp:""
}, {
    title:"MUTUAL AID IS LOVE",
    date: "February 28, 2025 | 8–11pm | 501 Dodge",
    description:"Join To Resist is to Love, the 116th Initiative, Postcrypt Coffee House, and WBAR for a mutual aid concert! All ticket proceeds will be donated to the 116th Initiative. Featuring musicians from Postcrypt Coffee House & WBAR, custom To Resist is To Love prints, and festive loving-season goodies. We’re excited to celebrate the season of love by giving back to the community we love.",
    rsvp: "https://www.eventbrite.com/e/116-x-tritl-x-postcrypt-x-wbar-mutual-aid-is-love-tickets-1257308616919?aff=oddtdtcreator",
}, 

/*,
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
