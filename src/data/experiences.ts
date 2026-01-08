import type { Experience } from '../types';
import arachnidLogo from '../assets/arachnid.png';
import nokiaLogo from '../assets/nokia.jpg';
import unrealLogo from '../assets/unreal.png';
import shpLogo from '../assets/shp.jpg';
import ucLogo from '../assets/uc.png';

export const EXPERIENCES: Experience[] = [
  {
    logo: arachnidLogo,
    title: "Co-Founder | Chief Operating Officer",
    company: "Arachnid Systems",
    period: "Jul 2025 — Present",
    bullets: [
      "Designed and deployed ROS-based robotic perception systems on NVIDIA Jetson Nano, integrating hyperspectral sensors and Intel RealSense cameras for real-time, edge-based environmental sensing.",
      "Optimized GPU-accelerated sensor fusion and on-device inference pipelines (CUDA/TensorRT), enabling low-latency processing and reduced reliance on cloud-based computation.",
      "Designed and trained deep learning segmentation models to classify terrain, infrastructure, and surface using hyperspectral and RGB-D data for autonomous navigation and inspection.",
      "Utilized Unreal Engine to build high-fidelity robotic and drone simulation environments for sensor modeling, SLAM validation, and machine learning dataset generation, accelerating development and reducing real-world testing risk.",
      "Developed object detection models to identify and track airplanes from aerial and ground-based imagery, supporting autonomous drone navigation and airfield monitoring use cases.",
      "Led operational strategy for robotics and drone-focused initiatives, aligning engineering, product, and business execution to deliver scalable autonomous systems."
    ],
    skills: ["Python", "ROS", "CUDA", "TensorRT", "Unreal Engine", "Computer Vision", "Deep Learning", "NVIDIA Jetson"]
  },
  {
    logo: nokiaLogo,
    title: "Senior Software Architect",
    company: "Nokia",
    period: "Nov 2023 — Aug 2025",
    bullets: [
      "Deployed Nokia Policy Controller on OpenStack in both VNF and CNF architectures, leveraging OpenStack CLI, HEAT templates for configuration management, and Kubernetes for container orchestration.",
      "Designed and implemented health check tools in Python and Bash for Kubernetes clusters for KDDI and T-Mobile, employing prometheus-client, requests, and shell scripting to monitor pod health, node performance, and service uptime.",
      "Developed a DNS automation tool in Python for AT&T, utilizing libraries like zeep for SOAP API interactions, Incorporated large dataset manipulation using polars to efficiently process and manage bulk DNS records.",
      "Created a custom backup management application in Python for PTA Australia's next-generation railway communications project, managing push/pull backups across over 40 nodes using paramiko, rsync and cron."
    ],
    skills: ["Python", "Kubernetes", "OpenStack", "Ansible", "Helm", "Bash", "Prometheus", "Grafana"]
  },
  {
    logo: unrealLogo,
    title: "Freelance Video Game Developer",
    company: "Unreal Engine UG",
    period: "Jan 2023 — Sep 2023",
    bullets: [
      "Designed, developed, and shipped Antbox Simulator using Unreal Engine, implementing core gameplay mechanics, simulation systems, UI, and optimized rendering.",
      "Built custom gameplay systems and editor tools to support sandbox-style interaction, physics-driven behaviors, and smooth performance across target platforms.",
      "Implemented dynamic environment interactions and modular ant colony mechanics, enabling emergent gameplay and realistic simulation within the sandbox world.",
      "Owned the complete development lifecycle—from concept and prototyping to publishing Antbox Simulator on itch.io, delivering updates, fixes, and feature improvements based on player feedback."
    ],
    skills: ["C++", "Unreal Engine", "Game Design", "Physics Systems"]
  },
  {
    logo: shpLogo,
    title: "Software Architect",
    company: "SHP",
    period: "Aug 2019 — Aug 2021",
    bullets: [
      "Developed tools for Autodesk Revit using C# and the Revit API, enabling intelligent layout of building interiors and exteriors to optimize space utilization and enhance Building Information Modeling (BIM) workflows.",
      "Utilized LINQ and asynchronous programming in C# to improve data querying efficiency and enhance plugin responsiveness during complex model operations.",
      "Automated architectural chart generation through custom Revit plugins, integrating seamlessly into BIM processes to reduce manual effort, improve documentation accuracy, and ensure consistency across projects."
    ],
    skills: ["C#", "Revit API", "BIM", "LINQ", ".NET"]
  },
  {
    logo: ucLogo,
    title: "Research Engineer",
    company: "UC CEAS",
    period: "Aug 2018 — Jul 2019",
    bullets: [
      "Developed and implemented three distinct prediction models employing Bagging, Nearest Neighbor, and Linear Regression algorithms.",
      "Published multiple research papers in reputable journals, showcasing comprehensive analyses and comparisons of these models and their respective efficiencies.",
      "Collaborated with cross-functional teams to integrate machine learning models into real-world applications, enhancing predictive maintenance and operational efficiency.",
      "Conducted extensive testing and validation of machine learning models, ensuring robust performance and reliability in real-world applications."
    ],
    skills: ["Matlab", "Machine Learning", "Data Science", "Research"]
  }
];