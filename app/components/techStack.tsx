import React from 'react';

interface TechItem {
  logoSrc: string;
  name: string;
  alt?: string;
}

interface TechStackProps {
  technologies: TechItem[];
}

const TechStack: React.FC<TechStackProps> = ({ technologies }) => {
  return (
    <div className="flex justify-center space-x-10 mt-10 mb-10">
      {technologies.map((tech, index) => (
        <div key={index} className="text-center">
          <img src={tech.logoSrc} alt={tech.alt || tech.name} className="h-16 w-16 mx-auto" />
          <p className="font-medium text-zinc-900">{tech.name}</p>
        </div>
      ))}
    </div>
  );
}

export default TechStack;