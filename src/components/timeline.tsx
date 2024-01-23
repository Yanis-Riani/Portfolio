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
    <div className={`flex flex-col overflow-x-auto gap-14`}>
      {jobs.map((job, index) => (
        <div
          key={index}
          className={`flex ${
            index % 2 === 0 ? "flex-row" : "flex-row-reverse"
          } items-center my-8 relative h-60`}>
          {/* Ligne de connexion pour chaque point de la timeline */}
          {index > 0 && (
            <div
              className={`absolute w-0.5 bg-zinc-300 ${
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
              index % 2 === 0 ? "text-right" : "text-left"
            } max-w-xl`}>
            <h3 className="text-xl font-bold text-zinc-200 mb-2">
              {job.title}
            </h3>
            <p className="text-sm italic text-zinc-300 mb-4">{job.duration}</p>
            <div
              className={`text-lm text-zinc-200 grid ${
                index % 2 === 0 ? "text-left w-96 ml-auto" : ""
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
            className={`relative w-14 h-14 rounded-full ${
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
                className={`rounded-md ${
                  index % 2 === 0 ? "mr-auto" : "ml-auto"
                } max-w-md`}
              />
            )}
          </div>
        </div>
      ))}
    </div>
  )
}
