import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { HelpCircle } from "lucide-react";
import type { Block } from "@/data/demo";

interface Props { block: Block; delay: number; }

const FAQBlock = ({ block, delay }: Props) => {
  const items = block.config.items as Array<{ question: string; answer: string }>;

  return (
    <div className="block-card p-5 stagger-in" style={{ animationDelay: `${delay}ms` }}>
      <div className="flex items-center gap-3 mb-4">
        <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
          <HelpCircle className="w-5 h-5 text-primary" />
        </div>
        <h3 className="text-sm font-bold text-foreground">{block.title}</h3>
      </div>
      <Accordion type="single" collapsible className="space-y-2">
        {items.map((item, i) => (
          <AccordionItem key={i} value={`item-${i}`} className="border border-border rounded-xl px-4 overflow-hidden">
            <AccordionTrigger className="text-sm font-semibold text-foreground py-3 hover:no-underline">
              {item.question}
            </AccordionTrigger>
            <AccordionContent className="text-sm text-muted-foreground pb-3">
              {item.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default FAQBlock;
