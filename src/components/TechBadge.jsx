import React, { useContext } from 'react'
import { SiTypescript } from "react-icons/si"
import { FaReact } from "react-icons/fa"
import { RiNextjsFill } from "react-icons/ri"
import { ThemeContext } from '../context/ThemeContext'
import { RiTailwindCssFill } from "react-icons/ri"
import { SiLangchain } from "react-icons/si";
import { FaFigma } from "react-icons/fa";

const TECHS = {
    ts: {
        name: "Typescript",
        icon: <SiTypescript />,
        color: {
            light: "#3178c6",
            dark: "#61b0fb"
        }
    },
    react: {
        name: "React",
        icon: <FaReact />,
        color: {
            light: "#22a8cd",
            dark: "#61dafb"
        }
    },
    next: {
        name: "Next.js",
        icon: <RiNextjsFill />,
        color: {
            light: "#000",
            dark: "#fff"
        }
    },
    tailwind: {
        name: "Tailwind CSS",
        icon: <RiTailwindCssFill />,
        color: {
            light: "#38bdf8",
            dark: "#38bdf8"
        }
    },
    langchain: {
        name: "Langchain",
        icon: <SiLangchain />,
        color: {
            light: "#009c7d",
            dark: "#00b590"
        }
    },
    figma: {
        name: "Figma",
        icon: <FaFigma />,
        color: {
            light: "#f8217b",
            dark: "#f8217b"
        }
    }
}

export default function TechBadge({ tech }) {
    const { theme } = useContext(ThemeContext)

    const techData = TECHS[tech]

    const name = techData?.name || tech
    const icon = techData?.icon || null
    const colorValue = techData?.color?.[theme] || "#888"

    return (
        <span
            className="tech-badge"
            style={{
                backgroundColor: `${colorValue}20`,
                color: colorValue,
                border: `1px solid ${colorValue}`
            }}
        >
            {icon}
            {name}
        </span>
    )
}