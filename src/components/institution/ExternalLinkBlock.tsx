import { ChevronRight } from "lucide-react";
import type { Block } from "@/data/demo";

interface Props {
  block: Block;
  delay: number;
}

const ExternalLinkBlock = ({ block, delay }: Props) => {
  return (
    <a
      href={block.config.url}
      target="_blank"
      rel="noopener noreferrer"
      className="block-card block-card-hover flex items-center gap-4 p-4 stagger-in cursor-pointer"
      style={{
        animationDelay: `${delay}ms`,
        borderLeft: `4px solid ${block.config.accentColor || "hsl(var(--primary))"}`,
      }}
    >
      <div className="flex-1 min-w-0">
        <h3 className="text-sm font-bold text-foreground truncate">{block.title}</h3>
        {block.config.subtitle && (
          <p className="text-xs text-muted-foreground mt-0.5 truncate">{block.config.subtitle}</p>
        )}
      </div>
      <ChevronRight className="w-5 h-5 text-muted-foreground shrink-0" />
    </a>
  );
};

export default ExternalLinkBlock;
