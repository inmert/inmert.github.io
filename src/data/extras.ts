import { FaAward, FaChalkboardTeacher, FaCodeBranch } from 'react-icons/fa';
import type { Extra } from '../types';

export const EXTRAS: Extra[] = [
  {
    title: "Open Source Contributions",
    icon: FaCodeBranch,
    items: [
      "Contributed a macOS relinker fix and AddressSanitizer CI coverage to AnyPS5",
      "Core contributor to ROS navigation stack",
      "Maintained robotics simulation packages",
      "Created ML tooling libraries for computer vision"
    ]
  },
  {
    title: "Speaking & Teaching",
    icon: FaChalkboardTeacher,
    items: [
      "Guest lecturer at UC on robotics and AI",
      "Speaker at Robotics Summit 2024",
      "Workshop facilitator for cloud-native architectures"
    ]
  },
  {
    title: "Certifications & Awards",
    icon: FaAward,
    items: [
      "Completed the NSA Codebreaker Challenge 2026 (all 8 tasks), 10th person to finish out of 1,000",
      "AWS Solutions Architect Professional",
      "Best Innovation Award - Tech Summit 2023",
      "Kubernetes Certified Administrator"
    ]
  }
];