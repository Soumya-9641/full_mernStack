import { people01, people02, people03, facebook, instagram, linkedin, twitter, airbnb, binance, coinbase, dropbox, send, shield, star  } from "../assets";
import Login from "../components/Login"
export const navLinks = [
  {
    id: "home",
    link:"/",
    title: "Home",
  },
  {
    id: "contact",
    link:"/contact",
    title: "Contact",
    submenu:[
      {
        title:"Personal Query",
        url:"/personal"
      },
      {
        title:"Corporate Query",
        url:"/corporate"
      },
      {
        title:"Smart donation drive",
        url:"/donation"
      }
  ]
  },
  {
    id: "about",
    link:"/about",
    title: "About Us",
    submenu:[
      {
        title:"Our Story",
        url:"/story"
      },
      {
        title:"How We Work",
        url:"/work"
      },
      {
        title:"What we offer",
        url:"/offer"
      },
      {
        title:"Share points",
        url:"/points"
      }
  ]
  },
  {
    id: "login",
    link:"/login",
    title: "Login",
  },
  {
    id: "campaign",
    link:"/campaign",
    title: "Upcoming Campaign",
  },
  {
    id: "involved",
    link:"/involved",
    title: "Get Involved",
    submenu:[
        {
          title:"Employee Engagement",
          url:"/employee"
        },
        {
          title:"NGO Partner",
          url:"/ngo"
        },
        {
          title:"Brand Partner",
          url:"/brand"
        },
        {
          title:"Volunteer",
          url:"/volunteer"
        },
    ]
  },
  
];



export const work = [
  {
    id: "work-1",
    icon: star,
    title: "Pickup from you",
    content:
      "Enter the pickup location, and schedule a pickup.You can also choose to go for the drop off option in case you want to drop the donations yourself. ",
  },
  {
    id: "work-2",
    icon: shield,
    title: "Donate from your doorstep",
    content:
      "We will come to your doorstep to pick up the donations in the chosen slot and deliver them to the NGO where they can be given a new life..",
  },
  {
    id: "work-3",
    icon: send,
    title: "Get Rewards",
    content:
      "A balance transfer credit card can save you a lot of money in interest charges.",
  },
  
];

export const card = [
  {
    id: "Card1",
    heading:"#Virtual Classroom",
    img: "https://media.istockphoto.com/id/1466767367/vector/back-to-school-template-with-pencils-and-clouds-online-education-banner-ad-landing-page-or.jpg?s=612x612&w=0&k=20&c=NUc2JygkrYIkTHh52vush710egDuy8Qc9J_hd48_ug0=",
    title: "Put your old mobiles, laptops, tablets to good use and help underprivileged kids continue their education online.",
    content:
      "Why stash your old phone, laptops and tablets in a drawer when they could be help underprivileged kids continue their education online? Give your phones new life and help kids attend their classes online. ",
  },
 
  {
    id: "Card2",
    heading:"#KnotsOfCare by Nautica",
    img: "https://sadsindia.org/wp-content/uploads/2020/05/NC-BANNERSArtboard-1_1920x800-1070x446.jpg",
    title: "A digital campaign by Nautica to help people affected by Covid-19",
    content:
      "An initiative by Nautica, #knotsofcare is a digital campaign encouraging people to donate their clothes to Covid-19 affected people in need. All one has to do is sign up for the program and their donations will be picked up by a SADS representative from their doorstep...",
  },
  {
    id: "Card3",
    heading:"# PileForGood",
    img: "https://sadsindia.org/wp-content/uploads/2020/04/Snapdeal-PileForGood-SADS-1070x446.jpg",
    title: "Snapdeal motivates its customers to share their wardrobe for good",
    content:
      "Snapdeal partnered with SADS to create awareness about `fast moving fashion`. This digital campaign in which people shared their wardrobe showing the `Pile of clothes` that they have not used for ages and pledged to donate the same. The campaign reached 6M+ people across India and people availed free donation pickups in selected cities. Tonnes of clothes were donated to NGOs across India by donors and corporates through SADS by availing doorstep donation pickup service free of cost (sponsored by Snapdeal)..",
  },
  {
    id: "Card4",
    heading:"#5 Lakh Acts Of Giving",
    img: "https://sadsindia.org/wp-content/uploads/2020/04/5-Lakh-Acts-Of-Giving-SADS-1070x446.jpg",
    title: "Donation bags distribution with surprises from brand partners (ITC & Narayana Health) to motivate people to donate preloved goods.",
    content:
      "`5 Lakh Acts Of Giving` was an awareness campaign to encourage people to give away their preloved goods to the underprivileged. Donation bags are distributed to 2000+ apartment complexes in Bangalore to motivate them to be a part of the giving movement. Donors received surprise goodies from participating brand partners like Narayana Health, ITC, etc. as a gesture of thanks for making donations.. ",
  },
  {
    id: "Card5",
    heading:"#GoCircular100",
    img: "https://sadsindia.org/wp-content/uploads/2020/04/Go-Circular-100-SADS-1070x446.jpg",
    title: "A climate change initiative engaging 100 environment conscious companies in an innovative manner.",
    content:
      "We are living in the era of excessive consumerism where people are buying much more and discarding goods in just one-third of their lifespan. 85% of these discarded unwanted goods end up into landfills affecting the environment and creating irreversible effects. 100 environment conscious companies come together and take a pledge to a low carbon and circular future. Join this green initiative and create tangible impact together.. ",
  },
];



export const features = [
  {
    id: "feature-1",
    icon: star,
    title: "Rewards",
    content:
      "The best credit cards offer some tantalizing combinations of promotions and prizes",
  },
  {
    id: "feature-2",
    icon: shield,
    title: "100% Secured",
    content:
      "We take proactive steps make sure your information and transactions are secure.",
  },
  {
    id: "feature-3",
    icon: send,
    title: "Balance Transfer",
    content:
      "A balance transfer credit card can save you a lot of money in interest charges.",
  },
];

export const feedback = [
  {
    id: "feedback-1",
    content:
      "Money is only a tool. It will take you wherever you wish, but it will not replace you as the driver.",
    name: "Herman Jensen",
    title: "Founder & Leader",
    img: people01,
  },
  {
    id: "feedback-2",
    content:
      "Money makes your life easier. If you're lucky to have it, you're lucky.",
    name: "Steve Mark",
    title: "Founder & Leader",
    img: people02,
  },
  {
    id: "feedback-3",
    content:
      "It is usually people in the money business, finance, and international trade that are really rich.",
    name: "Kenn Gallagher",
    title: "Founder & Leader",
    img: people03,
  },
];

export const stats = [
  {
    id: "stats-1",
    title: "User Active",
    value: "100+",
  },
  {
    id: "stats-2",
    title: "Trusted by Company",
    value: "20+",
  },
  {
    id: "stats-3",
    title: "Transaction",
    value: "₹10lakhs+",
  },
];

export const footerLinks = [
  {
    id:"1",
    title: "Useful Links",
    links: [
      {
        id:"11",
        name: "Content",
        link: "https://www.hoobank.com/content/",
      },
      {
        id:"22",
        name: "How it Works",
        link: "https://www.hoobank.com/how-it-works/",
      },
      {
        id:"33",
        name: "Create",
        link: "https://www.hoobank.com/create/",
      },
      {
        id:"44",
        name: "Explore",
        link: "https://www.hoobank.com/explore/",
      },
      {
        id:"55",
        name: "Terms & Services",
        link: "https://www.hoobank.com/terms-and-services/",
      },
    ],
  },
  {
    id:"2",
    title: "Community",
    links: [
      {
        name: "Help Center",
        link: "https://www.hoobank.com/help-center/",
      },
      {
        name: "Partners",
        link: "https://www.hoobank.com/partners/",
      },
      {
        name: "Suggestions",
        link: "https://www.hoobank.com/suggestions/",
      },
      {
        name: "Blog",
        link: "https://www.hoobank.com/blog/",
      },
      {
        name: "Newsletters",
        link: "https://www.hoobank.com/newsletters/",
      },
    ],
  },
  {
    id:"3",
    title: "Partner",
    links: [
      {
        name: "Our Partner",
        link: "https://www.hoobank.com/our-partner/",
      },
      {
        name: "Become a Partner",
        link: "https://www.hoobank.com/become-a-partner/",
      },
    ],
  },
];

export const socialMedia = [
  {
    id: "social-media-1",
    icon: instagram,
    link: "https://instagram.com/soumya.hustler?igshid=NzMyMjgxZWIzNw==",
  },
  {
    id: "social-media-2",
    icon: facebook,
    link: "https://www.facebook.com/profile.php?id=100024395213023&mibextid=ZbWKwL",
  },
  {
    id: "social-media-3",
    icon: twitter,
    link: "https://twitter.com/SOUMYADIP_1097?t=Zt0mmd6v5lpOO6douoLhrA&s=09",
  },
  {
    id: "social-media-4",
    icon: linkedin,
    link: "https://www.linkedin.com/in/soumyadip-gantait-04b602220/",
  },
];

export const clients = [
  {
    id: "client-1",
    logo: airbnb,
  },
  {
    id: "client-2",
    logo: binance,
  },
  {
    id: "client-3",
    logo: coinbase,
  },
  {
    id: "client-4",
    logo: dropbox,
  },
];