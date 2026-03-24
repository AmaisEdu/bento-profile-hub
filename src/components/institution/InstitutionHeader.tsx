import { Instagram, Youtube, Facebook, Linkedin, MessageCircle } from "lucide-react";
import type { Institution } from "@/data/demo";

const socialIcons: Record<string, { icon: React.ElementType; color: string }> = {
  instagram: { icon: Instagram, color: "#E4405F" },
  youtube: { icon: Youtube, color: "#FF0000" },
  whatsapp: { icon: MessageCircle, color: "#25D366" },
  facebook: { icon: Facebook, color: "#1877F2" },
  linkedin: { icon: Linkedin, color: "#0A66C2" },
  tiktok: { icon: () => <span className="text-sm font-bold">T</span>, color: "#000000" },
};

interface Props {
  institution: Institution;
}

const InstitutionHeader = ({ institution }: Props) => {
  const initials = institution.name.split(" ").map(w => w[0]).join("").slice(0, 2);

  return (
    <div className="flex flex-col items-center text-center gap-4 stagger-in" style={{ animationDelay: "0ms" }}>
      {/* Logo */}
      <div
        className="w-20 h-20 rounded-full flex items-center justify-center text-2xl font-extrabold text-primary-foreground shadow-lg"
        style={{ background: institution.themeColor }}
      >
        {initials}
      </div>

      {/* Name & Bio */}
      <div className="space-y-1">
        <h1 className="text-[22px] font-extrabold text-foreground leading-tight">{institution.name}</h1>
        <p className="text-sm text-muted-foreground leading-relaxed max-w-[320px]">{institution.bio}</p>
      </div>

      {/* Badges */}
      <div className="flex flex-wrap justify-center gap-2">
        <span className="px-3 py-1 text-xs font-semibold rounded-full bg-primary/10 text-primary">
          {institution.area}
        </span>
        <span className="px-3 py-1 text-xs font-semibold rounded-full bg-secondary text-muted-foreground">
          📍 {institution.city}
        </span>
      </div>

      {/* Social Icons */}
      <div className="flex gap-3">
        {institution.socials.map((s) => {
          const cfg = socialIcons[s.platform];
          if (!cfg) return null;
          const Icon = cfg.icon;
          return (
            <a
              key={s.platform}
              href={s.url}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full flex items-center justify-center text-white transition-transform hover:scale-110"
              style={{ backgroundColor: cfg.color }}
            >
              <Icon className="w-5 h-5" />
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default InstitutionHeader;
