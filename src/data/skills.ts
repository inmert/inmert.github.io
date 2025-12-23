import {
  SiPython,
  SiCplusplus,
  SiTypescript,
  SiGo,
  SiPostgresql,
  SiReact,
  SiTensorflow,
  SiPytorch,
  SiUnrealengine,
  SiAmazon,
  SiDocker,
  SiKubernetes,
  SiTerraform,
  SiMongodb,
  SiSwift,
  SiRust,
  SiNodedotjs,
  SiDjango,
  SiFlask,
  SiOpencv,
  SiNvidia,
  SiRaspberrypi,
  SiArduino,
  SiGit,
  SiGnubash,
  SiR,
  SiUnity,
  SiBlueprint
} from 'react-icons/si';

{/* React icons */}
import { FaJava } from "react-icons/fa6";
import { IoGameController } from "react-icons/io5";
import { FaRobot } from "react-icons/fa";
import { PiLineSegmentsDuotone } from "react-icons/pi";
import { IoLanguageSharp } from "react-icons/io5";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { FaEye } from "react-icons/fa";
import { SiDeepl } from "react-icons/si";

{/* Dev Icons */}
import CsharpOriginal from 'devicons-react/icons/CsharpOriginal';
import RosOriginal from 'devicons-react/icons/RosOriginal';
import JenkinsOriginal from 'devicons-react/icons/JenkinsOriginal';
import GazeboOriginal from 'devicons-react/icons/GazeboOriginal';
import LinuxOriginal from 'devicons-react/icons/LinuxOriginal';
import OpenstackOriginal from 'devicons-react/icons/OpenstackOriginal';


import type { SkillCategory } from '../types';

export const SKILLS: SkillCategory = {
  "Languages": [
    { name: "Python", icon: SiPython, color: "#3776AB" },
    { name: "C++", icon: SiCplusplus, color: "#00599C" },
    { name: "C#", icon: CsharpOriginal, color: "#239120" },
    { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
    { name: "Java", icon: FaJava, color: "#EE4C2C" },
    { name: "Swift", icon: SiSwift, color: "#FA7343" },
    { name: "Go", icon: SiGo, color: "#00ADD8" },
    { name: "Rust", icon: SiRust, color: "#000000" },
    { name: "SQL", icon: SiPostgresql, color: "#4169E1" },
    { name: "Bash", icon: SiGnubash, color: "#4EAA25" },
    { name: "R", icon: SiR, color: "#276DC3" },
  ],
  "Frameworks & Libraries": [
    { name: "TensorFlow", icon: SiTensorflow, color: "#FF6F00" },
    { name: "PyTorch", icon: SiPytorch, color: "#EE4C2C" },
    { name: "OpenCV", icon: SiOpencv, color: "#5C3EE8" },
    { name: "React", icon: SiReact, color: "#61DAFB" },
    { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
    { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
    { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
    { name: "Django", icon: SiDjango, color: "#092E20" },
    { name: "Flask", icon: SiFlask, color: "#000000" }
  ],
  "Robotics & Hardware": [
    { name: "ROS / ROS2", icon: RosOriginal, color: "#22314E" },
    { name: "SLAM", icon: FaRobot, color: "#9C27B0" },
    { name: "NVIDIA Jetson", icon: SiNvidia, color: "#76B900" },
    { name: "Raspberry Pi", icon: SiRaspberrypi, color: "#A22846" },
    { name: "Arduino", icon: SiArduino, color: "#00979D" },
    { name: "CUDA", icon: SiNvidia, color: "#76B900" },
    { name: "Gazebo", icon: GazeboOriginal, color: "#F58025" }
  ],
  "AI & Machine Learning": [
    { name: "Deep Learning", icon: SiDeepl, color: "#EE4C2C" },
    { name: "Computer Vision", icon: FaEye, color: "#5C3EE8" },
    { name: "NLP", icon: IoLanguageSharp, color: "#4285F4" },
    { name: "Image Segmentation", icon: PiLineSegmentsDuotone, color: "#9C27B0" },
    { name: "Object Detection", icon: FaMagnifyingGlass, color: "#00BCD4" }
  ],
  "Cloud & DevOps": [
    { name: "OpenStack", icon: OpenstackOriginal, color: "#FF8C00" },
    { name: "AWS", icon: SiAmazon, color: "#FF9900" },
    { name: "Docker", icon: SiDocker, color: "#2496ED" },
    { name: "Kubernetes", icon: SiKubernetes, color: "#326CE5" },
    { name: "Terraform", icon: SiTerraform, color: "#7B42BC" },
    { name: "CI/CD", icon: JenkinsOriginal, color: "#4CAF50" },
    { name: "Git", icon: SiGit, color: "#F05032" },
    { name: "Linux", icon: LinuxOriginal, color: "#FCC624" }
  ],
  "Game Development": [
    { name: "Unreal Engine", icon: SiUnrealengine, color: "#0E1128" },
    {name: "Unity Engine", icon: SiUnity, color: "#00599C" },
    { name: "Blueprints", icon: SiBlueprint, color: "#0E1128" },
    { name: "Environment Design", icon: IoGameController, color: "#8B5CF6" }
  ]
};