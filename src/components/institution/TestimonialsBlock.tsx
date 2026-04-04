import { useRef } from "react";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";
import type { Block } from "@/data/demo";

interface Props { block: Block; delay: number; }

const TestimonialsBlock = ({ block, delay }: Props) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const testimonials = block.config.testimonials as Array<{
    name: string; role: string; text: string; rating: number; avatarUrl?: string;
  }>;

  const scroll = (dir: number) => {
    scrollRef.current?.scrollBy({ left: dir * 280, behavior: "smooth" });
  };

  return (
    <div className="stagger-in" style={{ animationDelay: `${delay}ms` }}>
      <div className="flex items-center justify-between mb-3 px-1">
        <h3 className="text-base font-bold text-foreground">{block.title}</h3>
        <div className="flex gap-1">
          <button onClick={() => scroll(-1)} className="w-8 h-8 rounded-lg bg-secondary flex items-center justify-center hover:bg-border transition-colors">
            <ChevronLeft className="w-4 h-4 text-muted-foreground" />
          </button>
          <button onClick={() => scroll(1)} className="w-8 h-8 rounded-lg bg-secondary flex items-center justify-center hover:bg-border transition-colors">
            <ChevronRight className="w-4 h-4 text-muted-foreground" />
          </button>
        </div>
      </div>
      <div ref={scrollRef} className="flex gap-3 overflow-x-auto snap-x snap-mandatory pb-2" style={{ scrollbarWidth: "none" }}>
        {testimonials.map((t, i) => (
          <div key={i} className="block-card snap-start shrink-0 w-[260px] p-5 flex flex-col gap-3">
            <Quote className="w-6 h-6 text-primary/30" />
            <p className="text-sm text-foreground leading-relaxed flex-1">"{t.text}"</p>
            <div className="flex gap-0.5">
              {Array.from({ length: 5 }).map((_, si) => (
                <Star key={si} className={`w-3.5 h-3.5 ${si < t.rating ? "text-yellow-400 fill-yellow-400" : "text-border"}`} />
              ))}
            </div>
            <div className="flex items-center gap-2 pt-1 border-t border-border">
              <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-xs font-bold text-primary">
                {t.name.charAt(0)}
              </div>
              <div>
                <p className="text-xs font-bold text-foreground">{t.name}</p>
                <p className="text-[10px] text-muted-foreground">{t.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TestimonialsBlock;
