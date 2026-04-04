import { Download, FileDown } from "lucide-react";
import type { Block } from "@/data/demo";

interface Props { block: Block; delay: number; }

const DownloadBlock = ({ block, delay }: Props) => {
  return (
    <div className="block-card p-5 stagger-in" style={{ animationDelay: `${delay}ms` }}>
      <div className="flex items-center gap-4">
        <div className="w-14 h-14 rounded-2xl bg-red-50 flex items-center justify-center shrink-0">
          <FileDown className="w-7 h-7 text-red-500" />
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="text-sm font-bold text-foreground truncate">{block.title}</h3>
          {block.config.description && (
            <p className="text-xs text-muted-foreground mt-0.5">{block.config.description}</p>
          )}
          {block.config.fileSize && (
            <span className="text-[10px] text-muted-foreground/70">{block.config.fileSize}</span>
          )}
        </div>
        <a
          href={block.config.fileUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="w-10 h-10 rounded-xl bg-primary text-primary-foreground flex items-center justify-center shrink-0 transition-transform hover:scale-105 active:scale-95"
        >
          <Download className="w-5 h-5" />
        </a>
      </div>
    </div>
  );
};

export default DownloadBlock;
