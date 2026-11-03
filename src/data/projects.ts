import { GiAnt } from 'react-icons/gi';
import { SiWebassembly } from 'react-icons/si';
import { TbCamera, TbDrone, TbFocus2, TbMusic, TbPlugConnected } from 'react-icons/tb';
import type { Project } from '../types';

export const PROJECTS: Project[] = [
  {
    title: "DJI Orin Interface",
    description: "Controls a DJI Matrice 210 from an NVIDIA Jetson Orin Nano by speaking DJI's DUML wire protocol directly, with the Orin posing as the DJI Pilot app over USB instead of using DJI's SDKs.",
    tags: ["Rust", "C++", "Protocol Analysis", "NVIDIA Jetson"],
    link: "https://github.com/inmert/dji-orin-interface",
    icon: TbPlugConnected
  },
  {
    title: "Apollo",
    description: "Operates a DJI Matrice 210 from a browser over Wi-Fi through a Jetson Orin running DJI's Onboard SDK, with live telemetry, video, and gimbal and motor control.",
    tags: ["C++", "TypeScript", "DJI OSDK", "NVIDIA Jetson"],
    link: "https://github.com/inmert/Apollo",
    icon: TbDrone
  },
  {
    title: "CHIP-8 Emulator",
    description: "CHIP-8 interpreter in Rust that passes every applicable test in Timendus' test suite, with a browser playground running the same core as a 37 KB WebAssembly module.",
    tags: ["Rust", "WebAssembly", "Emulation"],
    link: "https://github.com/inmert/Chip-8-RS",
    icon: SiWebassembly
  },
  {
    title: "BlackFly Surface Model",
    description: "Real-time surface anomaly detection on live camera streams, with configurable models ranging from traditional crack detection to YOLOv8, DETR, and Mask2Former.",
    tags: ["Python", "Computer Vision", "YOLOv8"],
    link: "https://github.com/inmert/BlackFly-SurfaceModel",
    icon: TbFocus2
  },
  {
    title: "Spin",
    description: "PyQt6 desktop app for controlling multiple FLIR cameras at once, with live streaming, recording, per-camera exposure and gain controls, and performance monitoring.",
    tags: ["Python", "PyQt6", "FLIR Cameras"],
    link: "https://github.com/inmert/Spin",
    icon: TbCamera
  },
  {
    title: "Beethov-EN",
    description: "Senior capstone project: a DALL-E inspired engine that uses deep learning to compose music from user inputs.",
    tags: ["Deep Learning", "Music Generation", "Jupyter"],
    link: "https://github.com/inmert/Beethov-EN",
    icon: TbMusic
  },
  {
    title: "AntBox Simulator",
    description: "Published game on itch.io featuring realistic ant colony simulation with procedural behavior systems.",
    tags: ["Unreal Engine", "C++", "Game Design"],
    link: "#",
    icon: GiAnt
  }
];
