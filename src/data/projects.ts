import type { Project } from '../types';
import cloudPipeline from '../assets/pipeline.png'; 
import antbox from '../assets/antbox.webp';
import robot from '../assets/walle.jpg';
import sensor from '../assets/sensor.webp';

export const PROJECTS: Project[] = [
  {
    title: "Modular Robotic Inspection System",
    description: "End-to-end robotic platform for automated aircraft and infrastructure inspection with real-time sensor fusion.",
    tags: ["Robotics", "Computer Vision", "AWS", "Python"],
    link: "#",
    image: robot
  },
  {
    title: "AntBox Simulator",
    description: "Published game on itch.io featuring realistic ant colony simulation with procedural behavior systems.",
    tags: ["Unreal Engine", "C++", "Game Design"],
    link: "https://itch.io",
    image: antbox
  },
  {
    title: "Cloud-Native ML Pipeline",
    description: "Scalable machine learning pipeline for anomaly detection processing millions of data points daily.",
    tags: ["Kubernetes", "TensorFlow", "PostgreSQL"],
    link: "#",
    image: cloudPipeline
  },
  {
    title: "Distributed Sensor Network",
    description: "IoT platform for real-time data collection and analysis across multiple edge devices.",
    tags: ["MQTT", "TimescaleDB", "React"],
    link: "#",
    image: sensor
  }
];