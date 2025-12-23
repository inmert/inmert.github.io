import type { Project } from '../types';
import genericBG from '../assets/background.jpg';

export const PROJECTS: Project[] = [
  {
    title: "Modular Robotic Inspection System",
    description: "End-to-end robotic platform for automated aircraft and infrastructure inspection with real-time sensor fusion.",
    tags: ["Robotics", "Computer Vision", "AWS", "Python"],
    link: "#",
    image: genericBG
  },
  {
    title: "AntBox Simulator",
    description: "Published game on itch.io featuring realistic ant colony simulation with procedural behavior systems.",
    tags: ["Unreal Engine", "C++", "Game Design"],
    link: "https://itch.io",
    image: genericBG
  },
  {
    title: "Cloud-Native ML Pipeline",
    description: "Scalable machine learning pipeline for anomaly detection processing millions of data points daily.",
    tags: ["Kubernetes", "TensorFlow", "PostgreSQL"],
    link: "#",
    image: genericBG
  },
  {
    title: "Distributed Sensor Network",
    description: "IoT platform for real-time data collection and analysis across multiple edge devices.",
    tags: ["MQTT", "TimescaleDB", "React"],
    link: "#",
    image: genericBG
  }
];