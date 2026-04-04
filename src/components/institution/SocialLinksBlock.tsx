import { Instagram, Youtube, Facebook, Linkedin, MessageCircle, Twitter } from "lucide-react";
import type { Block } from "@/data/demo";

const socialIcons: Record<string, { icon: React.ElementType; color: string; label: string }> = {
  instagram: { icon: Instagram, color: "#E4405F", label: "Instagram" },
  youtube: { icon: Youtube, color: "#FF0000", label: "YouTube" },
  whatsapp: { icon: MessageCircle, color: "#25D366", label: "WhatsApp" },
  facebook: { icon: Facebook, color: "#1877F2", label: "Facebook" },
  linkedin: { icon: Linkedin, color: "#0A66C2", label: "LinkedIn" },
  twitter: { icon: Twitter, color: "#1DA1F2", label: "Twitter" },
  tiktok: { icon: () => <span className="text-sm font-bold">T</span>, color: "#000000", label: "TikTok" },
};

interface Props { block: Block; delay: number; }

const SocialLinksBlock = ({ block, delay }: Props) => {
  const links = block.config.links as Array<{ platform: string; url: string }>;

  return (
    <div className="block-card p-5 stagger-in" style={{ animationDelay: `${delay}ms` }}>
      <h3 className="text-sm font-bold text-foreground mb-4">{block.title}</h3>
      <div className="flex flex-wrap gap-3 justify-center">
        {links.map((link) => {
          const cfg = socialIcons[link.platform];
          if (!cfg) return null;
          const Icon = cfg.icon;
          return (
            <a
              key={link.platform}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-1.5 group"
            >
              <div
                className="w-12 h-12 rounded-2xl flex items-center justify-center text-white transition-transform group-hover:scale-110"
                style={{ backgroundColor: cfg.color }}
              >
                <Icon className="w-5 h-5" />
              </div>
              <span className="text-[10px] font-medium text-muted-foreground">{cfg.label}</span>
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default SocialLinksBlock;
