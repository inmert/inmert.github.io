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
  SiRedis
} from 'react-icons/si';
import type { SkillCategory } from '../types';

export const SKILLS: SkillCategory = {
  "Languages": [
    { name: "Python", icon: SiPython },
    { name: "C++", icon: SiCplusplus },
    { name: "TypeScript", icon: SiTypescript },
    { name: "Go", icon: SiGo },
    { name: "SQL", icon: SiPostgresql }
  ],
  "Frameworks": [
    { name: "React", icon: SiReact },
    { name: "TensorFlow", icon: SiTensorflow },
    { name: "PyTorch", icon: SiPytorch },
    { name: "ROS", icon: null },
    { name: "Unreal Engine", icon: SiUnrealengine }
  ],
  "Cloud & DevOps": [
    { name: "AWS", icon: SiAmazon },
    { name: "Docker", icon: SiDocker },
    { name: "Kubernetes", icon: SiKubernetes },
    { name: "CI/CD", icon: null },
    { name: "Terraform", icon: SiTerraform }
  ],
  "Robotics & AI": [
    { name: "Computer Vision", icon: null },
    { name: "Path Planning", icon: null },
    { name: "Sensor Fusion", icon: null },
    { name: "ML Ops", icon: null }
  ],
  "Databases": [
    { name: "PostgreSQL", icon: SiPostgresql },
    { name: "MongoDB", icon: SiMongodb },
    { name: "Redis", icon: SiRedis },
    { name: "TimescaleDB", icon: null }
  ]
};