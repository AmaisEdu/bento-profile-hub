import { useState } from "react";
import { Play } from "lucide-react";
import type { Block } from "@/data/demo";

interface Props {
  block: Block;
  delay: number;
}

const YouTubeVideoBlock = ({ block, delay }: Props) => {
  const [playing, setPlaying] = useState(false);
  const { videoId, thumbnailUrl } = block.config;

  return (
    <div className="block-card block-card-hover overflow-hidden stagger-in" style={{ animationDelay: `${delay}ms` }}>
      <div className="relative aspect-video bg-muted">
        {playing ? (
          <iframe
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
            className="absolute inset-0 w-full h-full"
            allow="autoplay; encrypted-media"
            allowFullScreen
          />
        ) : (
          <button onClick={() => setPlaying(true)} className="absolute inset-0 w-full h-full group">
            <img
              src={thumbnailUrl}
              alt={block.title}
              className="w-full h-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-foreground/20 group-hover:bg-foreground/30 transition-colors flex items-center justify-center">
              <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                <Play className="w-7 h-7 text-primary-foreground ml-1" fill="currentColor" />
              </div>
            </div>
          </button>
        )}
      </div>
      <div className="p-4">
        <h3 className="text-sm font-bold text-foreground">{block.title}</h3>
      </div>
    </div>
  );
};

export default YouTubeVideoBlock;
