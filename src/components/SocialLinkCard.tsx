import { Instagram, Linkedin, Github, Youtube } from "lucide-react";

interface SocialLinkCardProps {
  platform: "instagram" | "linkedin" | "github" | "youtube";
  url: string;
  delay?: number;
  isEditing?: boolean;
}

const platformConfig = {
  instagram: { icon: Instagram, label: "Instagram", gradient: "from-pink-500/20 to-purple-500/20" },
  linkedin: { icon: Linkedin, label: "LinkedIn", gradient: "from-blue-500/20 to-cyan-500/20" },
  github: { icon: Github, label: "GitHub", gradient: "from-gray-400/20 to-gray-600/20" },
  youtube: { icon: Youtube, label: "YouTube", gradient: "from-red-500/20 to-orange-500/20" },
};

const SocialLinkCard = ({ platform, url, delay = 0, isEditing }: SocialLinkCardProps) => {
  const config = platformConfig[platform];
  const Icon = config.icon;

  return (
    <a
      href={isEditing ? undefined : url}
      target="_blank"
      rel="noopener noreferrer"
      className={`glass-card glass-card-hover flex flex-col items-center justify-center gap-3 p-6 aspect-square stagger-in cursor-pointer ${isEditing ? "edit-wiggle" : ""}`}
      style={{ animationDelay: `${delay}ms` }}
      onClick={isEditing ? (e) => e.preventDefault() : undefined}
    >
      <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${config.gradient} flex items-center justify-center`}>
        <Icon className="w-7 h-7 text-primary" />
      </div>
      <span className="text-xs font-medium text-muted-foreground">{config.label}</span>
    </a>
  );
};

export default SocialLinkCard;
