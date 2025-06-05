import tour1 from "./images/cologne-pic.jpg";
import tour2 from "./images/munich-pic.jpg";
import tour3 from "./images/hamburg-pic.jpg";
import tour4 from "./images/berlin-pic.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXTwitter } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faWallet } from "@fortawesome/free-solid-svg-icons";
import { faTree } from "@fortawesome/free-solid-svg-icons";
import { faSocks } from "@fortawesome/free-solid-svg-icons";

export const pageLinks = [
  { id: 1, href: "#home", text: "home" },
  { id: 2, href: "#about", text: "about" },
  { id: 3, href: "#services", text: "services" },
  { id: 4, href: "#tours", text: "tours" },
];

// export const socialLinks = [
//   { id: 1, href: "https://www.instagram.com", icon: "fab fa-instagram" },
//   { id: 2, href: "https://www.twitter.com", icon: "fab fa-tiktok" },
// ];
export const socialLinks = [
  { id: 1, href: "https://www.instagram.com", icon: faInstagram },
  { id: 2, href: "https://www.twitter.com", icon: faXTwitter },
];

export const services = [
  {
    id: 1,
    icon: faWallet,
    title: "saving money",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit Asperiores, officia.",
  },
  {
    id: 2,
    icon: faTree,
    title: "endless hiking",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit Asperiores, officia.",
  },
  {
    id: 3,
    icon: faSocks,
    title: "amazing comfort",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit Asperiores, officia.",
  },
];

export const tours = [
  {
    id: 1,
    image: tour1,
    date: "June 21th, 2026",
    title: "Kölner Dom",
    info: ` Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.`,
    location: "Cologne",
    duration: 6,
    cost: 1400,
  },
  {
    id: 2,
    image: tour2,
    date: "December 1th, 2025",
    title: "Munich",
    info: ` Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.`,
    location: "Munich",
    duration: 9,
    cost: 3700,
  },
  {
    id: 3,
    image: tour3,
    date: "september 12th, 2026",
    title: "explore Hamburg",
    info: ` Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.`,
    location: "Hamburg",
    duration: 8,
    cost: 2000,
  },
  {
    id: 4,
    image: tour4,
    date: "december 5th, 2026",
    title: "Berlin Capital City",
    info: ` Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.`,
    location: "Berlin",
    duration: 14,
    cost: 4100,
  },
];
