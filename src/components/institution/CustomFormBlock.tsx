import { useState } from "react";
import { FileText, Check, Loader2 } from "lucide-react";
import { Input } from "@/components/ui/input";
import type { Block } from "@/data/demo";

interface Props { block: Block; delay: number; }

const CustomFormBlock = ({ block, delay }: Props) => {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const fields = block.config.fields as Array<{ name: string; type: string; placeholder: string; required?: boolean }>;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => { setLoading(false); setSubmitted(true); }, 1200);
  };

  if (submitted) {
    return (
      <div className="block-card p-6 flex flex-col items-center gap-3 text-center stagger-in" style={{ animationDelay: `${delay}ms` }}>
        <div className="w-14 h-14 rounded-full bg-green-100 flex items-center justify-center">
          <Check className="w-7 h-7 text-green-600" />
        </div>
        <h3 className="text-base font-bold text-foreground">Enviado com sucesso!</h3>
        <p className="text-sm text-muted-foreground">Entraremos em contato em breve.</p>
      </div>
    );
  }

  return (
    <div className="block-card p-5 stagger-in" style={{ animationDelay: `${delay}ms` }}>
      <div className="flex items-center gap-3 mb-4">
        <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
          <FileText className="w-5 h-5 text-primary" />
        </div>
        <div>
          <h3 className="text-sm font-bold text-foreground">{block.title}</h3>
          {block.config.description && <p className="text-xs text-muted-foreground">{block.config.description}</p>}
        </div>
      </div>
      <form onSubmit={handleSubmit} className="flex flex-col gap-3">
        {fields.map((field) => (
          field.type === "textarea" ? (
            <textarea
              key={field.name}
              placeholder={field.placeholder}
              required={field.required}
              rows={3}
              className="rounded-xl bg-secondary border border-border px-3 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring resize-none"
            />
          ) : (
            <Input
              key={field.name}
              type={field.type}
              placeholder={field.placeholder}
              required={field.required}
              className="rounded-xl bg-secondary border-border text-sm h-11"
            />
          )
        ))}
        <button type="submit" disabled={loading} className="btn-gradient-primary flex items-center justify-center gap-2 mt-1">
          {loading ? <><Loader2 className="w-4 h-4 animate-spin" /> Enviando...</> : (block.config.buttonText || "Enviar")}
        </button>
      </form>
    </div>
  );
};

export default CustomFormBlock;
