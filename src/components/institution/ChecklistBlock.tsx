import { useState } from "react";
import { CheckSquare, Square } from "lucide-react";
import type { Block } from "@/data/demo";

interface Props { block: Block; delay: number; }

const ChecklistBlock = ({ block, delay }: Props) => {
  const items = block.config.items as Array<{ text: string; checked?: boolean }>;
  const [checks, setChecks] = useState<boolean[]>(items.map((it) => it.checked ?? false));

  const toggle = (i: number) => {
    setChecks((prev) => prev.map((c, idx) => (idx === i ? !c : c)));
  };

  return (
    <div className="block-card p-5 stagger-in" style={{ animationDelay: `${delay}ms` }}>
      <h3 className="text-sm font-bold text-foreground mb-4">{block.title}</h3>
      <ul className="space-y-2">
        {items.map((item, i) => (
          <li
            key={i}
            onClick={() => toggle(i)}
            className="flex items-center gap-3 p-2.5 rounded-xl cursor-pointer hover:bg-secondary/50 transition-colors"
          >
            {checks[i] ? (
              <CheckSquare className="w-5 h-5 text-primary shrink-0" />
            ) : (
              <Square className="w-5 h-5 text-muted-foreground shrink-0" />
            )}
            <span className={`text-sm ${checks[i] ? "line-through text-muted-foreground" : "text-foreground"}`}>
              {item.text}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ChecklistBlock;
