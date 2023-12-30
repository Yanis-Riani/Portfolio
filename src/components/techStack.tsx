"use client"
import React, { useState } from "react"

interface TechItem {
  logoSrc: string
  name: string
  description: string
  alt?: string
}

interface TechStackProps {
  technologies: TechItem[]
}

const TechStack: React.FC<TechStackProps> = ({ technologies }) => {
  const [selectedTech, setSelectedTech] = useState<TechItem>(technologies[0])

  return (
    <div>
      <div className="flex justify-center space-x-10 mt-10 mb-4">
        {technologies.map((tech, index) => (
          <div
            key={index}
            className="text-center cursor-pointer hover:scale-110 transition-transform duration-300"
            onClick={() => setSelectedTech(tech)}>
            <img
              src={tech.logoSrc}
              alt={tech.alt || tech.name}
              className="h-16 w-16 mx-auto"
            />
            <p className="font-medium text-zinc-900">{tech.name}</p>
          </div>
        ))}
      </div>
      <div className="text-center text-black">
        <h3 className="text-xl font-semibold">{selectedTech.name}</h3>
        <p>{selectedTech.description}</p>
      </div>
    </div>
  )
}

export default TechStack
