"use client"
import "@iconify/icons-bundle"
import { Icon } from "@iconify/react"
import React, { useEffect, useState } from "react"

interface TechItem {
  logo: string
  name: string
  description: string
  alt?: string
}

interface TechStackProps {
  technologies: TechItem[]
}

const TechStack: React.FC<TechStackProps> = ({ technologies }) => {
  const [selectedTech, setSelectedTech] = useState<TechItem>(technologies[0])
  const [previousTech, setPreviousTech] = useState<TechItem | null>(null)

  const selectTech = (tech: TechItem) => {
    setPreviousTech(selectedTech)
    setSelectedTech(tech)
  }

  useEffect(() => {
    if (previousTech !== selectedTech) {
      // Reset l'état précédent après une transition rapide ou autre logique
      setTimeout(() => setPreviousTech(null), 50) // Ajustez ce délai au besoin
    }
  }, [selectedTech, previousTech])

  return (
    <div>
      <div className="flex justify-center flex-wrap gap-[4px] mt-10 mb-4  -skew-x-6">
        {technologies.map((tech, index) => (
          <button
            key={index}
            className={`text-center cursor-pointer
                      border rounded-md shadow-sm
                      flex flex-col items-center p-4
                      w-28 h-36
                      ${
                        selectedTech.name === tech.name
                          ? "bg-zinc-200/65 border-zinc-600/50"
                          : "bg-zinc-100/20 border-zinc-400/30 hover:bg-zinc-300/20 group hover:border-zinc-400/50"
                      } ${
              previousTech?.name === tech.name
                ? "transition-none"
                : "hover:transition-colors duration-[1500ms] ease-out top-0"
            }`}
            aria-label={tech.alt || tech.name}
            onClick={() => selectTech(tech)}>
            <div>
              <Icon
                icon={tech.logo}
                width={64}
                height={64}
                className="mx-auto blur-2xl absolute"
              />
              <Icon
                icon={tech.logo}
                width={64}
                height={64}
                className="mx-auto"
              />
            </div>
            <p className="font-medium">{tech.name}</p>
          </button>
        ))}
      </div>
      <div className="text-center bg-gradient-to-tl from-zinc-100 via-zinc-50 to-zinc-100 rounded-xl border p-4 my-8">
        <h3 className="mt-4 scroll-m-20 text-2xl font-semibold tracking-tight">
          {selectedTech.name}
        </h3>
        <p className="leading-7 [&:not(:first-child)]:mt-6">
          {selectedTech.description}
        </p>
      </div>
    </div>
  )
}

export default TechStack
