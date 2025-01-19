import {
  benefitIcon1,
  benefitIcon2,
  benefitIcon3,
  benefitIcon4,
  benefitImage2,
  chromecast,
  disc02,
  discord,
  discordBlack,
  facebook,
  figma,
  file02,
  framer,
  homeSmile,
  instagram,
  notification2,
  notification3,
  notification4,
  notion,
  photoshop,
  plusSquare,
  protopie,
  raindrop,
  recording01,
  recording03,
  roadmap1,
  roadmap2,
  searchMd,
  slack,
  sliders04,
  telegram,
  twitter,
  yourlogo,
  biekwanLogo,
  gaspeiBlank,
} from "../assets";

export const navigation = [
  {
    id: "0",
    title: "Our Services",
    url: "services",
  },
  {
    id: "1",
    title: "About Us",
    url: "about",
  },
  {
    id: "2",
    title: "Contact Us",
    url: "contact",
  },
  {
    id: "3",
    title: "Get Started",
    url: "started",
    onlyMobile: true,
  },
];

export const heroIcons = [homeSmile, file02, searchMd, plusSquare];

export const notificationImages = [notification4, notification3, notification2];

export const companyLogos = [yourlogo, yourlogo, yourlogo, yourlogo, yourlogo];

export const brainwaveServices = [
  "Photo generating",
  "Photo enhance",
  "Seamless Integration",
];

export const brainwaveServicesIcons = [
  recording03,
  recording01,
  disc02,
  chromecast,
  sliders04,
];

export const roadmap = [
  {
    id: "0",
    title: "Biekwan Navigation Architecture",
    text: "Empower your applications with Biekwan's robust technology for navigation and routing. Biekwan provides accurate and reliable data to developers, enabling them to build innovative location-based services and applications.",
    date: "Started Sep 2024",
    status: "done",
    imageUrl: biekwanLogo,
    colorful: false,
    link: "#",
  },
  {
    id: "1",
    title: "G-Schools",
    text: "G-Schools is a school management system that helps schools manage their operations efficiently. With features like attendance tracking, grade management, and parent communication, G-Schools simplifies school administration and enhances the learning experience.",
    date: "Started Jan 2025",
    status: "progress",
    imageUrl: roadmap2,
    colorful: true,
    link: "#",
  },
];

export const collabText =
  "At Gaspei, we specialize in designing innovative software solutions that drive business growth. With years of experience in crafting scalable and efficient solutions, our team is dedicated to helping companies across industries build reliable, future-proof systems. We believe in a collaborative approach, working closely with clients to understand their unique needs and deliver tailored solutions that empower their success.";

export const collabContent = [
  {
    id: "0",
    title: "Our Vision",
    text: "To be a leading provider of innovative software architectures that empower businesses to achieve sustainable growth and technological excellence.",
  },
  {
    id: "1",
    title: "Our Mission",
    text: "To design and deliver scalable, secure, and efficient software solutions tailored to our clients' needs, driving success through cutting-edge technology and strategic partnerships.",
  },
];

export const collabApps = [
  {
    id: "0",
    title: "Figma",
    icon: figma,
    width: 26,
    height: 36,
  },
  {
    id: "1",
    title: "Notion",
    icon: notion,
    width: 34,
    height: 36,
  },
  {
    id: "2",
    title: "Discord",
    icon: discord,
    width: 36,
    height: 28,
  },
  {
    id: "3",
    title: "Slack",
    icon: slack,
    width: 34,
    height: 35,
  },
  {
    id: "4",
    title: "Photoshop",
    icon: photoshop,
    width: 34,
    height: 34,
  },
  {
    id: "5",
    title: "Protopie",
    icon: protopie,
    width: 34,
    height: 34,
  },
  {
    id: "6",
    title: "Framer",
    icon: framer,
    width: 26,
    height: 34,
  },
  {
    id: "7",
    title: "Raindrop",
    icon: raindrop,
    width: 38,
    height: 32,
  },
];

export const pricing = [
  {
    id: "0",
    title: "Basic",
    description: "AI chatbot, personalized recommendations",
    price: "0",
    features: [
      "An AI chatbot that can understand your queries",
      "Personalized recommendations based on your preferences",
      "Ability to explore the app and its features without any cost",
    ],
  },
  {
    id: "1",
    title: "Premium",
    description: "Advanced AI chatbot, priority support, analytics dashboard",
    price: "9.99",
    features: [
      "An advanced AI chatbot that can understand complex queries",
      "An analytics dashboard to track your conversations",
      "Priority support to solve issues quickly",
    ],
  },
  {
    id: "2",
    title: "Enterprise",
    description: "Custom AI chatbot, advanced analytics, dedicated account",
    price: null,
    features: [
      "An AI chatbot that can understand your queries",
      "Personalized recommendations based on your preferences",
      "Ability to explore the app and its features without any cost",
    ],
  },
];

export const benefits = [
  {
    id: "0",
    title: "Custom Architecture",
    text: "We create software solutions that are tailored to your needs, ensuring scalability, security, and efficiency. Our goal is to help your business grow smoothly.",
    backgroundUrl: "./src/assets/benefits/card-1.svg",
    iconUrl: benefitIcon1,
    imageUrl: gaspeiBlank,
  },
  {
    id: "1",
    title: "System Integration",
    text: "We make sure all your systems work together seamlessly. This helps maximize efficiency and ensures smooth communication across your business.",
    backgroundUrl: "./src/assets/benefits/card-2.svg",
    iconUrl: benefitIcon2,
    imageUrl: gaspeiBlank,
    light: true,
  },
  {
    id: "2",
    title: "Consulting Services",
    text: "Our experts offer advice on choosing the right technology, optimizing workflows, and solving complex challenges with smart solutions.",
    backgroundUrl: "./src/assets/benefits/card-3.svg",
    iconUrl: benefitIcon3,
    imageUrl: gaspeiBlank,
  },
  {
    id: "3",
    title: "Microservices",
    text: "We design microservices architectures that make systems easier to manage, faster, and more scalable. This approach is ideal for modern businesses.",
    backgroundUrl: "./src/assets/benefits/card-4.svg",
    iconUrl: benefitIcon4,
    imageUrl: gaspeiBlank,
    light: true,
  },
  {
    id: "4",
    title: "Custom APIs",
    text: "We develop custom APIs that connect your systems, allowing for smooth communication between platforms and unlocking new possibilities for your business.",
    backgroundUrl: "./src/assets/benefits/card-5.svg",
    iconUrl: benefitIcon1,
    imageUrl: gaspeiBlank,
  },
  {
    id: "5",
    title: "Tech Modernization",
    text: "We help you upgrade old systems so they stay competitive and efficient. Our goal is to use the latest technologies for better performance and reliability.",
    backgroundUrl: "./src/assets/benefits/card-6.svg",
    iconUrl: benefitIcon2,
    imageUrl: gaspeiBlank,
  },
];

export const socials = [
  {
    id: "0",
    title: "Discord",
    iconUrl: discordBlack,
    url: "#",
  },
  {
    id: "1",
    title: "Twitter",
    iconUrl: twitter,
    url: "#",
  },
  {
    id: "2",
    title: "Instagram",
    iconUrl: instagram,
    url: "#",
  },
  {
    id: "3",
    title: "Telegram",
    iconUrl: telegram,
    url: "#",
  },
  {
    id: "4",
    title: "Facebook",
    iconUrl: facebook,
    url: "#",
  },
];
