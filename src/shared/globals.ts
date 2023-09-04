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
        src: "/116th-website/about-us"
    },
},
{
    type: "default",
    link: {
        text: "Contact Us",
        src: ""
    },
},
{
    type: "dropdown",
    header: "Resources",
    dropdownLinks: [{
        text: "Publications",
        src: ""
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
        src: ""
    },
},
];