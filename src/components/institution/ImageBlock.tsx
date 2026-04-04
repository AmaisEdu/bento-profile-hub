import type { Block } from "@/data/demo";

interface Props { block: Block; delay: number; }

const ImageBlock = ({ block, delay }: Props) => {
  return (
    <div className="block-card overflow-hidden stagger-in" style={{ animationDelay: `${delay}ms` }}>
      <img
        src={block.config.imageUrl}
        alt={block.title}
        className="w-full h-48 object-cover"
      />
      {(block.title || block.config.caption) && (
        <div className="p-4">
          {block.title && <h3 className="text-sm font-bold text-foreground">{block.title}</h3>}
          {block.config.caption && <p className="text-xs text-muted-foreground mt-1">{block.config.caption}</p>}
        </div>
      )}
    </div>
  );
};

export default ImageBlock;
