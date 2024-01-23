"use client"
import "@iconify/icons-bundle"
import { Icon } from "@iconify/react"

interface SkillItem {
  logo: string
  name: string
  alt?: string
}

interface SkillProps {
  technologies: SkillItem[]
}

export const SkillList: React.FC<SkillProps> = ({ technologies }) => {
  return (
    <div>
      <div className="flex justify-center flex-wrap gap-[4px] mt-10 mb-4">
        {technologies.map((tech, index) => (
          <div
            key={index}
            className="text-center cursor-pointer
                      border rounded-md shadow-sm
                      flex flex-col items-center p-4
                      w-28 h-36 bg-zinc-100/20 border-zinc-200/30 hover:bg-zinc-300/20 hover:border-zinc-400/50 hover:transition-colors duration-[1500ms] ease-out top-0
            "
            aria-label={tech.alt || tech.name}>
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
          </div>
        ))}
      </div>
    </div>
  )
}
