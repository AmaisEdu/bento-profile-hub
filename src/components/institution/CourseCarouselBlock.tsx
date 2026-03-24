import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import type { Block } from "@/data/demo";

interface Props {
  block: Block;
  delay: number;
}

const CourseCarouselBlock = ({ block, delay }: Props) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const courses = block.config.courses as Array<{
    id: string; name: string; area: string; duration: string;
    modality: string; price: string; icon: string; color: string;
  }>;

  const scroll = (dir: number) => {
    scrollRef.current?.scrollBy({ left: dir * 240, behavior: "smooth" });
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

      <div
        ref={scrollRef}
        className="flex gap-3 overflow-x-auto snap-x snap-mandatory pb-2 scrollbar-hide"
        style={{ scrollbarWidth: "none" }}
      >
        {courses.map((course) => (
          <div
            key={course.id}
            className="block-card block-card-hover snap-start shrink-0 w-[200px] flex flex-col overflow-hidden"
          >
            <div
              className="h-24 flex items-center justify-center text-4xl"
              style={{ backgroundColor: course.color + "18" }}
            >
              {course.icon}
            </div>
            <div className="p-4 flex flex-col gap-2 flex-1">
              <h4 className="text-sm font-bold text-foreground leading-tight">{course.name}</h4>
              <span
                className="self-start px-2 py-0.5 text-[10px] font-semibold rounded-full text-white"
                style={{ backgroundColor: course.color }}
              >
                {course.area}
              </span>
              <p className="text-xs text-muted-foreground">{course.duration} · {course.modality}</p>
              <p className="text-base font-extrabold text-primary mt-auto">{course.price}</p>
              <button className="btn-gradient-primary text-xs py-2 px-4 mt-1">
                Saiba Mais
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CourseCarouselBlock;
