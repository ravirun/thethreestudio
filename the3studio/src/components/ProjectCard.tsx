import { Card } from './Card';

interface ProjectCardProps {
  project: {
    id: string;
    title: string;
    client: string;
    description: string;
    image: string;
    technologies: string[];
    features: string[];
    results: string;
    duration: string;
    budget: string;
    featured?: boolean;
  };
  featured?: boolean;
}

export function ProjectCard({ project, featured = false }: ProjectCardProps) {
  return (
    <Card
      padding="lg"
      radius="xl"
      hover={true}
      className={`group relative overflow-hidden ${
        featured ? "hover:border-emerald-500/50" : ""
      } transition-all`}
    >
      <div className="flex items-center gap-3 mb-4">
        <div className="text-4xl">{project.image}</div>
        <div>
          <h3 className="text-2xl font-bold text-zinc-100">{project.title}</h3>
          <p className="text-zinc-400">{project.client}</p>
        </div>
      </div>
      
      <p className="text-zinc-300 mb-6">{project.description}</p>
      
      <div className="flex items-center gap-4 text-sm text-zinc-400 mb-6">
        <span>Duration: {project.duration}</span>
        <span>Budget: {project.budget}</span>
        <span className="px-2 py-1 bg-emerald-500/20 text-emerald-300 rounded-full text-xs">
          {project.results}
        </span>
      </div>

      <div className="flex flex-wrap gap-2 mb-6">
        {project.technologies.slice(0, 3).map((tech, index) => (
          <span key={index} className="px-2 py-1 bg-zinc-800 text-zinc-300 rounded text-xs">
            {tech}
          </span>
        ))}
        {project.technologies.length > 3 && (
          <span className="px-2 py-1 bg-zinc-800 text-zinc-300 rounded text-xs">
            +{project.technologies.length - 3} more
          </span>
        )}
      </div>
    </Card>
  );
}
