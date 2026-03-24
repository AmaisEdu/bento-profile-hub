import { MessageCircle, Phone, ExternalLink } from "lucide-react";
import type { Block } from "@/data/demo";

const iconMap: Record<string, React.ElementType> = {
  whatsapp: MessageCircle,
  phone: Phone,
  link: ExternalLink,
};

interface Props {
  block: Block;
  delay: number;
}

const CTAButtonBlock = ({ block, delay }: Props) => {
  const Icon = iconMap[block.config.icon] || ExternalLink;

  return (
    <a
      href={block.config.url}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center justify-center gap-3 rounded-[16px] py-4 px-6 text-white font-bold text-base shadow-lg transition-all duration-200 hover:-translate-y-1 hover:shadow-xl stagger-in"
      style={{
        background: block.config.gradient,
        animationDelay: `${delay}ms`,
      }}
    >
      <Icon className="w-6 h-6" />
      {block.title}
    </a>
  );
};

export default CTAButtonBlock;
