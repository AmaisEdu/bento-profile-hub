import type { Block } from "@/data/demo";

interface Props { block: Block; delay: number; }

const HighlightsBlock = ({ block, delay }: Props) => {
  const highlights = block.config.highlights as Array<{ icon: string; value: string; label: string }>;

  return (
    <div className="block-card p-5 stagger-in" style={{ animationDelay: `${delay}ms` }}>
      <h3 className="text-sm font-bold text-foreground mb-4">{block.title}</h3>
      <div className="grid grid-cols-3 gap-3">
        {highlights.map((h, i) => (
          <div key={i} className="flex flex-col items-center gap-1 text-center p-3 rounded-xl bg-secondary/50">
            <span className="text-2xl">{h.icon}</span>
            <span className="text-lg font-extrabold text-foreground font-mono">{h.value}</span>
            <span className="text-[10px] text-muted-foreground leading-tight">{h.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HighlightsBlock;
