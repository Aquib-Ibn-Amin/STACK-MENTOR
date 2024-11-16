import { BotMessageSquare } from "lucide-react";
import { BatteryCharging } from "lucide-react";
import { Fingerprint } from "lucide-react";
import { ShieldHalf } from "lucide-react";
import { PlugZap } from "lucide-react";
import { GlobeLock } from "lucide-react";

import user1 from "../assets/profile-pictures/user1.jpg";
import user2 from "../assets/profile-pictures/user2.jpg";
import user3 from "../assets/profile-pictures/user3.jpg";
import user4 from "../assets/profile-pictures/user4.jpg";
import user5 from "../assets/profile-pictures/user5.jpg";
import user6 from "../assets/profile-pictures/user6.jpg";

export const navItems = [
  { label: "Home", href: "#" },
  { label: "About Us", href: "#" },
  { label: "Courses", href: "#" },
  { label: "FAQ", href: "#" },
  { label: "How We Work", href: "#" },
  { label: "Contact Us", href: "#" },
];

export const testimonials = [
  {
    user: "John Doe",
    company: "Stellar Solutions",
    image: user1,
    text: "I am extremely satisfied with the services provided. The team was responsive, professional, and delivered results beyond my expectations.",
  },
  {
    user: "Jane Smith",
    company: "Blue Horizon Technologies",
    image: user2,
    text: "I couldn't be happier with the outcome of our project. The team's creativity and problem-solving skills were instrumental in bringing our vision to life",
  },
  {
    user: "David Johnson",
    company: "Quantum Innovations",
    image: user3,
    text: "Working with this company was a pleasure. Their attention to detail and commitment to excellence are commendable. I would highly recommend them to anyone looking for top-notch service.",
  },
  {
    user: "Ronee Brown",
    company: "Fusion Dynamics",
    image: user4,
    text: "Working with the team at XYZ Company was a game-changer for our project. Their attention to detail and innovative solutions helped us achieve our goals faster than we thought possible. We are grateful for their expertise and professionalism!",
  },
  {
    user: "Michael Wilson",
    company: "Visionary Creations",
    image: user5,
    text: "I am amazed by the level of professionalism and dedication shown by the team. They were able to exceed our expectations and deliver outstanding results.",
  },
  {
    user: "Emily Davis",
    company: "Synergy Systems",
    image: user6,
    text: "The team went above and beyond to ensure our project was a success. Their expertise and dedication are unmatched. I look forward to working with them again in the future.",
  },
];

export const features = [
  {
    icon: <BotMessageSquare />,
    text: "We are Open Source",
    description:
      "Empowering Innovation, Collaboration, and Freedom.",
  },
  {
    icon: <Fingerprint />,
    text: "Problem Solvers",
    description:
      "Empowering You with Solutions That Work, Every Time.",
  },
  {
    icon: <ShieldHalf />,
    text: "Highly-Rated Support",
    description:
      "Trusted Support That Goes Above and Beyond, Every Step of the Way.",
  },
  {
    icon: <BatteryCharging />,
    text: "Feature-Rich Free & Pro Plugins",
    description:
      "Packed with Powerful Features, Free and Pro Plugins for Every Need.",
  },
  {
    icon: <PlugZap />,
    text: "Regular Updates & Bug fixes",
    description:
      "Seamless Performance with Regular Updates and Reliable Bug Fixes.",
  },
  {
    icon: <GlobeLock />,
    text: "Extensions to step up your game",
    description:
      "Boost Your Productivity with Powerful Extensions to Step Up Your Game.",
  },
];

export const checklistItems = [
  {
    title: "Code merge made easy",
    description:
      "Track the performance of your VR apps and gain insights into user behavior.",
  },
  {
    title: "Review code without worry",
    description:
      "Track the performance of your VR apps and gain insights into user behavior.",
  },
  {
    title: "AI Assistance to reduce time",
    description:
      "Track the performance of your VR apps and gain insights into user behavior.",
  },
  {
    title: "Share work in minutes",
    description:
      "Track the performance of your VR apps and gain insights into user behavior.",
  },
];

export const pricingOptions = [
  {
    title: "Lifetime Support",
    price: "৳0",
    features: [
      "Unlimited Access",
      "Expert Guidance",
      "Continuous Improvement",
      "Peace of Mind",
    ],
  },
  {
    title: "Career Support",
    price: "৳0",
    features: [
      "Personalized Guidance",
      "Job Placement Assistance",
      "Skill Development",
      "Ongoing Mentorship",
    ],
  },
  {
    title: "Class Videos",
    price: "৳0",
    features: [
      "On-Demand Learning",
      "Expert Instruction",
      "Expert Instruction",
      "Visual and Interactive",
    ],
  },
];

export const resourcesLinks = [
  { href: "#", text: "Getting Started" },
  { href: "#", text: "Documentation" },
  { href: "#", text: "Tutorials" },
  { href: "#", text: "API Reference" },
  { href: "#", text: "Community Forums" },
];

export const platformLinks = [
  { href: "#", text: "Features" },
  { href: "#", text: "Supported Devices" },
  { href: "#", text: "System Requirements" },
  { href: "#", text: "Downloads" },
  { href: "#", text: "Release Notes" },
];

export const communityLinks = [
  { href: "#", text: "Events" },
  { href: "#", text: "Meetups" },
  { href: "#", text: "Conferences" },
  { href: "#", text: "Hackathons" },
  { href: "#", text: "Jobs" },
];