/**
 * file for creating global types + variables used by tsx files
 */

export type LinkType = {
    text: string,
    src: string,
};

export type navLinkItem = {
    type: "default",
    link: LinkType,
} | 
{
    type: "dropdown",
    header: string, 
    dropdownLinks: LinkType[]
};

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
        text: "Contact Us",
        src: "/contact-us"
    },
},
{
    type: "dropdown",
    header: "Resources",
    dropdownLinks: [{
        text: "Publications",
        src: "/publications"
    },
    {
        text: "Request Funds",
        src: "https://docs.google.com/forms/d/e/1FAIpQLSc8Cs8eqjovbJHfVpDcl0RySdQ107vwaNiYMNR64IyZ1BY3IQ/viewform"
    },],
},
{
    type: "default",
    link: {
        text: "Events",
        src: "/events"
    },
},
];

export type PublicationsCardProps = {
    title: string,
    publishedWhere: string,
    preview: string,
    to: string,
};

export const publications: PublicationsCardProps[] =[{
    title:'Affirmative Action Statement',
    publishedWhere:'Bwog Article',
    preview:'Leaders at Columbia and Barnard have begun to respond after the Supreme Court’s June 29 ruling that race-conscious college admissions policies are in violation of the Fourteenth Amendment’s Equal Protection Clause. The ruling, made in two companion cases filed by the group Students for Fair Admission against both Harvard and the University of North Carolina, Chapel Hill, effectively struck down affirmative action programs. In the hours after the ruling, both Columbia College Dean Josef Sorrett and Barnard President Laura Rosenbury made statements to their respective student bodies, the full texts of which can be found below. In Rosenbury’s email to students, the newly-inaugurated president stated that, “For the past several months, leaders at the College have been meeting to anticipate and plan for what this ruling might require of us to adapt and fulfill our mission to build a richly diverse student body,” and said the college will continue to provide updates about its strategy moving forward. Similarly, Dean Sorrett shared Columbia’s official statement, and wrote that the college “remain[s] committed to fostering and sustaining a diverse community of students as a core value central to our mission.”',
    to:'https://bwog.com/2023/07/columbia-community-responds-as-scotus-strikes-down-affirmative-action/',             
}, {
    title:'Barnard Mutual Feature',
    publishedWhere:'Bwog Article',
    preview:'If you’re a member of the Barnard community this year, you’ve likely heard of Barnard Mutual Aid. Whether you’ve noticed them from the flyers scattered around campus, or their wildly popular social media posts, the group has become one of the fastest-growing—and arguably most important—organizations on campus. Still, if you’re not directly involved with the organization, you may not be familiar with its remarkable story, or the essential service it provides to low-income students. The idea for Barnard Mutual Aid first came to founder Avalon Zborovsky-Fenster (BC ‘24) in the fall of 2020, when, as a first-year, she noticed a recurring theme emerging in her conversations with fellow students. Again and again, she listened as peers described their struggles with increasing financial need as a result of the COVID-19 pandemic, and a lack of access they faced to resources at Barnard as a result. “Not having enough money for something doesn’t end there,” she explains. “It means not being able to take on an unpaid internship, not being able to buy food, not having transportation or access to basic necessities—it means not having access to a lot of the most important things the college has to offer.” ',
    to:'https://bwog.com/2021/10/barnard-mutual-aid-builds-a-culture-of-community-care/'
},

{
    title:'Barnard Mutual Feature',
    publishedWhere:'Columbia Spectator Article',
    preview:'When a fire broke out on the sixth floor of Barnard’s Brooks Hall on Monday night, Ilana Talamo, BC ’25, had no idea that meant she would not be able to return to her room for up to a week. Talamo was in a Columbia friend’s dorm room and, after hearing about the fire, assumed she would have to spend the night there. But when she heard that the evacuation had lifted and students would be allowed back into the dorm, she headed back toward her room on the fifth floor of Brooks Hall. When Talamo arrived, she was forced to wait in Barnard Hall for an hour before receiving a text from Barnard’s Community Accountability, Response, and Emergency Services. The message alerted Talamo that her dorm room was considered an “affected area” and that she should relocate to LeFrak Center for further instructions. Residents of the fifth, sixth, and seventh floors of Brooks Hall were split into groups and given five to 10 minutes to collect enough personal belongings from their rooms to last “anywhere from 12 to 24 hours.” They were given the option of staying with friends, temporarily moving to Plimpton Hall, or relocating to Barnard housing on 121st Street.',
    to:'https://www.columbiaspectator.com/news/2021/10/22/after-barnard-fire-students-come-together-to-support-those-in-need/'
},

]

export type EventCardType = {
    title: string,
    startDate: Date,
    endDate: Date,
    description: string,
    location?: string,
}

export const eventCards: EventCardType[] = [{
    title:"Potluck Picnic",
    startDate: new Date(2023, 8, 24, 16, 0, 0),
    endDate: new Date(2023, 8, 24, 18, 0, 0),
    description:"Join 116th at our first official meeting of the year! Bring your snacks, bring your friends, and bring yourself! We’ll be chatting about what the 116th Initiative is, who we are, what we aim to do and ways you can get involved/help out. Copies of our zine will also be available for purchase (all sales go straight to the mutual aid fund)!",
    location: "Sakura Park",
},
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
},]
