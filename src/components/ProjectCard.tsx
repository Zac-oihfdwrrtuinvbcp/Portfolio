import { Tag } from "./Tag";
import { Button } from "./Button";

interface ProjectCardProps {
  title: string;
  description: string;
  link: string;
  website?: string;
  tags: string[];
  image: string;
}

export function ProjectCard({ title, description, link, website, tags, image }: ProjectCardProps) {
  // Determine the platform based on URL
  const isGitHub = link.includes('github.com');
  
  // Set icon and text based on platform
  const platformIcon = isGitHub ? 'fa-brands fa-github' : 'fa-brands fa-itch-io';
  const platformText = isGitHub ? 'View on GitHub' : 'View on Itch.io';

  return (
    <article className="bg-zinc-900 rounded-3xl overflow-hidden shadow-l hover:shadow-xl transition-all duration-300">
      <div className="md:flex h-full">
        {/* Image Section */}
        <div className="md:w-2/5">
          <img 
            src={image} 
            alt={title}
            className="w-full h-64 md:h-full object-cover p-4 rounded-l-4xl"
          />
        </div>
        
        {/* Content Section */}
        <div className="p-8 md:w-3/5 flex flex-col justify-between">
          <div>
            <h3 className="text-2xl font-bold mb-3">{title}</h3>
            <p className="text-zinc-400 mb-6 leading-relaxed">{description}</p>
            
            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-6">
              {tags.map((tag, index) => (
                <Tag key={index}>{tag}</Tag>
              ))}
            </div>
          </div>
          
          {/* Link */}
          <div className="flex flex-wrap gap-x-5 gap-y-3">
            <Button href={link} icon={platformIcon}>
              {platformText}
            </Button>
            
            {website && (
              <Button href={website} icon="fa-solid fa-arrow-up-right-from-square">
                Visit website
              </Button>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}