import { Headphones } from "lucide-react";
import type { Block } from "@/data/demo";

interface Props { block: Block; delay: number; }

const AudioBlock = ({ block, delay }: Props) => {
  return (
    <div className="block-card p-5 stagger-in" style={{ animationDelay: `${delay}ms` }}>
      <div className="flex items-center gap-3 mb-4">
        <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
          <Headphones className="w-5 h-5 text-primary" />
        </div>
        <div>
          <h3 className="text-sm font-bold text-foreground">{block.title}</h3>
          {block.config.description && <p className="text-xs text-muted-foreground">{block.config.description}</p>}
        </div>
      </div>
      <audio controls className="w-full rounded-xl" preload="metadata">
        <source src={block.config.audioUrl} type="audio/mpeg" />
        Seu navegador não suporta o player de áudio.
      </audio>
    </div>
  );
};

export default AudioBlock;
