import { Job } from "@localtypes/job"
import Image from "next/image"
import { FunctionComponent } from "react"

type TimelineProps = {
  jobs: Job[]
  activeColor?: string
  inactiveColor?: string
}

export const Timeline: FunctionComponent<TimelineProps> = ({ jobs }) => {
  const createDescriptionList = (description: string) => {
    return description
      .split("- ") // Diviser la chaîne de description en points de puce
      .map((item, index) => item && <li key={index}>{item.trim()}</li>) // Créer des éléments de liste pour chaque point
  }
  return (
    <div className={`flex flex-col overflow-x-auto md:gap-14`}>
      {jobs.map((job, index) => (
        <div
          key={index}
          className={`flex ${
            index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
          } flex-col items-center mb-8 relative md:h-60 gap-4 md:gap-0`}>
          {/* Ligne de connexion pour chaque point de la timeline */}
          {index > 0 && (
            <div
              className={`hidden md:block absolute w-0.5 bg-zinc-300 ${
                index % 2 === 0 ? "left-1/2" : "right-1/2"
              }`}
              style={{
                height: "100%", // La hauteur s'ajuste en fonction du contenu
                transform: "translateY(-75%)",
                borderRadius: "0.5rem",
              }}
            />
          )}
          <div
            className={`flex-1 px-4 ${
              index % 2 === 0 ? "md:text-right" : "md:text-left"
            } md:max-w-xl`}>
            <h3 className="text-xl font-bold text-zinc-200 mb-2">
              {job.title}
            </h3>
            <p className="text-sm italic text-zinc-300 mb-4">{job.duration}</p>
            <div
              className={`text-lm text-zinc-200 grid ${
                index % 2 === 0 ? "text-left md:w-96 ml-auto" : "text-left"
              }`}>
              {job.description.includes("- ") ? (
                <ul className="list-disc list-inside space-y-2">
                  {createDescriptionList(job.description)}
                </ul>
              ) : (
                job.description
              )}
            </div>
          </div>
          <div
            className={`hidden md:flex relative w-14 h-14 rounded-full ${
              job.active ? "bg-zinc-200" : "bg-zinc-300"
            } flex items-center justify-center mx-6 z-10`}>
            <div
              className={`absolute w-20 h-20 rounded-full border-2 ${
                job.active ? "border-zinc-200" : "border-zinc-400"
              } ${job.active ? "animate-breath" : "animate-slowbreath"}`}
            />
            {job.logoSrc && (
              <Image
                src={job.logoSrc}
                alt={job.logoAlt}
                width={34}
                height={34}
              />
            )}
          </div>
          <div className={"flex-1 px-4"}>
            {job.imageSrc && (
              <Image
                src={job.imageSrc}
                alt={job.imageAlt}
                width={400}
                height={170}
                className={`rounded-md mx-auto md:mx-0 md:max-w-md`}
                layout="intrinsic" // Ajouter layout="intrinsic" pour garder les proportions
              />
            )}
          </div>
        </div>
      ))}
    </div>
  )
}
