import { Navigation } from "@components/nav"
import Particles from "@components/particles"
import { SkillList } from "@components/skillList"
import { Timeline } from "@components/timeline"
import Image from "next/image"
import React from "react"

const jobsData = [
  {
    title: "DOMAP - Développeur Full Stack (stage)",
    duration: "Mai 2023 - Août 2023",
    description:
      "- Modernisation de l'interface utilisateur. - Renforcement de la sécurité du site.- Restructuration et optimisation du code source.",
    imageSrc: "/resume/DomapRep.avif",
    imageAlt:
      "Image représentative de l'emploi chez DOMAP en tant que stagiaire",
    logoSrc: "/resume/Domap.svg",
    logoAlt: "Logo de DOMAP",
    active: false,
  },
  {
    title: "DOMAP - Développeur Full Stack (alternance)",
    duration: "Septembre 2023 - Aujourd'hui",
    description:
      "Intégration de la template et adaptation de l'authentification.- Optimisation des requêtes API pour les données des États-Unis. - Amélioration continue et maintenance de la version de production.",
    imageSrc: "/resume/DomapRep.avif",
    imageAlt:
      "Image représentative de l'emploi chez DOMAP en tant qu'alternant",
    logoSrc: "/resume/Domap.svg",
    logoAlt: "Logo de DOMAP",
    active: true,
  },
]

const webSkills = [
  {
    logo: "logos-html-5",
    name: "HTML5",
  },
  {
    logo: "logos-css-3",
    name: "CSS3",
  },
  {
    logo: "logos-javascript",
    name: "Javascript",
  },
  {
    logo: "logos-react",
    name: "React",
  },
  {
    logo: "devicon-nextjs",
    name: "Next.js",
  },
  {
    logo: "devicon-express",
    name: "Express",
  },
  {
    logo: "logos-vue",
    name: "Vue.js",
  },
  {
    logo: "devicon-tailwindcss",
    name: "TailwindCSS",
  },
  {
    logo: "logos-nodejs-icon",
    name: "Node.js",
  },
  {
    logo: "devicon-mongodb",
    name: "MongoDB",
  },
  {
    logo: "logos-redis",
    name: "Redis",
  },
  {
    logo: "logos-docker-icon",
    name: "Docker",
  },
  {
    logo: "logos-visual-studio-code",
    name: "VS Code",
  },
]
const softwareSkills = [
  {
    logo: "devicon-c",
    name: "C",
  },
  {
    logo: "devicon-cplusplus",
    name: "C++",
  },
  {
    logo: "devicon-csharp",
    name: "C#",
  },
  {
    logo: "logos-java",
    name: "Java",
  },
  {
    logo: "logos-python",
    name: "Python",
  },
  {
    logo: "logos-rust",
    name: "Rust",
  },
  {
    logo: "logos-qt",
    name: "QT",
  },
  {
    logo: "devicon-androidstudio",
    name: "Android Studio",
  },
  {
    logo: "logos-visual-studio",
    name: "Visual Studio",
  },
]

const InfoGSkills = [
  {
    logo: "devicon-3dsmax",
    name: "3Ds Max",
  },
  {
    logo: "custom-substancepainter",
    name: "Substance",
  },
  {
    logo: "logos-unity",
    name: "Unity",
  },
  {
    logo: "logos-unrealengine-icon",
    name: "Unreal Engine",
  },
]

const ResumePage: React.FC = () => {
  return (
    <div>
      <Navigation />
      <div className="flex flex-col px-6 pt-16 mx-auto space-y-8 max-w-7xl lg:px-8 md:space-y-16 md:pt-24 lg:pt-32 overflow-hidden bg-gradient-to-tl from-black/20 via-zinc-600/20 to-black/20">
        <Particles
          className="absolute inset-0 -z-10 animate-fade-in h-auto"
          quantity={200}
        />
        <div className="flex flex-col items-center justify-center space-y-4 text-center max-w-5xl mx-auto">
          <div>
            <h1
              className="z-10 text-4xl text-transparent duration-1000 bg-white cursor-default text-edge-outline animate-title font-display sm:text-6xl md:text-9xl whitespace-nowrap bg-clip-text"
              style={{ textRendering: "optimizeLegibility" }}>
              Yanis Riani
            </h1>
          </div>
          <section className="flex flex-col">
            <a
              href="/resume/Resume.pdf"
              download
              className="px-6 py-3 text-zinc-200 rounded-md border-2 border-zinc-200 hover:bg-zinc-300/30 hover:transition-colors duration-[1000ms] ease-out">
              Télécharger mon CV
            </a>
          </section>
          <section>
            <h1 className="text-4xl font-bold tracking-tight text-zinc-200 sm:text-6xl mb-14 mt-4">
              Parcours professionnel
            </h1>
            <Timeline jobs={jobsData} />
          </section>
          <section className="flex flex-col gap-4">
            <h1 className="text-4xl font-bold tracking-tight text-zinc-200 sm:text-6xl mb-10">
              Formations
            </h1>
            <h2 className="text-2xl font-bold tracking-tight text-zinc-200 sm:text-4xl flex flex-row flex-nowrap justify-center gap-4 mb-4">
              <span>
                <Image
                  src={"/resume/LogoButInfoG.webp"}
                  alt={"Logo du BUT Informatique Graphique"}
                  width={32}
                  height={32}
                />
              </span>
              BUT Informatique Graphique
              <span className="text-xl text-zinc-300 align-top">
                2021 - 2024
              </span>
            </h2>
            <div className="flex flex-row max-w-4xl">
              <Image
                src={"/resume/ButInfoG.avif"}
                alt={"Image représentative du BUT Informatique Graphique"}
                width={400}
                height={170}
              />
              <div className="flex flex-col text-left ml-4 gap-2">
                <h3 className="text-xl font-bold text-zinc-200 sm:text-2xl">
                  IUT du Puy-en-Velay, <br />
                  Université Clermont-Auvergne
                </h3>
                <p className="text-md italic tracking-tight text-zinc-300 mb-4">
                  📍Le Puy-en-Velay, France
                </p>
                <div className="text-lg tracking-tight text-zinc-300">
                  <ul className="mb-1">
                    📚 Algorithmique et programmation (C, C++, Java, Python,
                    Rust)
                  </ul>
                  <ul className="mb-1">
                    🎨 Infographie (3Ds Max, Substance, Zephyr)
                  </ul>
                  <ul className="mb-1">
                    🌐 Développement Web (HTML/CSS, Javascript, PHP)
                  </ul>
                  <ul className="mb-1">
                    📱 Développement d'applications (Android studio, QT)
                  </ul>
                  <ul className="mb-1">
                    🎮 Conception de jeux-vidéos avec Unity, Unreal Engine 5
                  </ul>
                  <ul>📢 Communication et gestion de projet</ul>
                </div>
              </div>
            </div>
          </section>
          <section>
            <h1 className="text-4xl font-bold tracking-tight text-zinc-200 sm:text-6xl mb-14 mt-14">
              Compétences
            </h1>
            <div>
              <h2 className="text-2xl font-bold tracking-tight text-zinc-200 sm:text-4xl mb-4">
                Dévelopement Web
              </h2>
              <SkillList technologies={webSkills} />
            </div>
            <div>
              <h2 className="text-2xl font-bold tracking-tight text-zinc-200 sm:text-4xl mb-4">
                Dévelopement Logiciels
              </h2>
              <SkillList technologies={softwareSkills} />
            </div>
            <div>
              <h2 className="text-2xl font-bold tracking-tight text-zinc-200 sm:text-4xl mb-4">
                3D et Jeux-Vidéos
              </h2>
              <SkillList technologies={InfoGSkills} />
            </div>
            <div className="flex flex-col">
              <h2 className="text-2xl font-bold tracking-tight text-zinc-200 sm:text-4xl mb-10">
                Compétences supplémentaires
              </h2>
              <div className="flex justify-center mb-36 gap-10">
                <div>
                  <h3 className="text-2xl font-bold tracking-tight text-zinc-200 mb-4">
                    Compétences Transversales
                  </h3>
                  <ul className="text-xl text-left list-disc list-inside space-y-2 tracking-tight text-zinc-300">
                    <li>✉️ Communication efficace</li>
                    <li>⏰ Gestion du temps et des priorités</li>
                    <li>🤝 Esprit d'équipe et collaboration</li>
                    <li>🧩 Résolution de problèmes</li>
                    <li>🎨 Créativité et innovation</li>
                    <li>🌟 Adaptabilité et flexibilité</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-2xl font-bold tracking-tight text-zinc-200 mb-4">
                    Compétences Générales
                  </h3>
                  <ul className="text-xl text-left list-disc list-inside space-y-2 tracking-tight text-zinc-300">
                    <li>🤔 Esprit critique et analytique</li>
                    <li>⚔️ Résolution de conflits</li>
                    <li>📅 Organisation et planification</li>
                    <li>🚀 Leadership et prise de décision</li>
                    <li>📚 Curiosité et apprentissage continu</li>
                    <li>⏳ Respect des délais et des objectifs</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
          {/* <section>
            <h1 className="text-4xl font-bold tracking-tight text-zinc-200 sm:text-6xl mb-10">
              Centres d'intérêt
            </h1>
          </section> */}
        </div>
      </div>
    </div>
  )
}

export default ResumePage
