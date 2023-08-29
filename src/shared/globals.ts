/**
 * file for creating global types + variables used by tsx files
 */

export type Link = {
    text: string,
    src: string,
};

export type navLinkItem = {
    type: "default",
    link: Link,
} | 
{
    type: "dropdown",
    header: string, 
    dropdownLinks: Link[]
};

export const navLinks: navLinkItem[] = [{
    type: "default",
    link: {
        text: "About",
        src: ""
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