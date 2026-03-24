import { useState } from "react";
import { CalendarDays, Check, Loader2 } from "lucide-react";
import { Input } from "@/components/ui/input";
import type { Block } from "@/data/demo";

interface Props {
  block: Block;
  delay: number;
}

const SchedulingFormBlock = ({ block, delay }: Props) => {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1200);
  };

  if (submitted) {
    return (
      <div className="block-card p-6 flex flex-col items-center gap-3 text-center stagger-in" style={{ animationDelay: `${delay}ms` }}>
        <div className="w-14 h-14 rounded-full bg-green-100 flex items-center justify-center">
          <Check className="w-7 h-7 text-green-600" />
        </div>
        <h3 className="text-base font-bold text-foreground">Agendamento enviado!</h3>
        <p className="text-sm text-muted-foreground">Entraremos em contato para confirmar.</p>
      </div>
    );
  }

  return (
    <div className="block-card p-5 stagger-in" style={{ animationDelay: `${delay}ms` }}>
      <div className="flex items-center gap-3 mb-4">
        <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
          <CalendarDays className="w-5 h-5 text-primary" />
        </div>
        <div>
          <h3 className="text-sm font-bold text-foreground">{block.title}</h3>
          <p className="text-xs text-muted-foreground">{block.config.description}</p>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="flex flex-col gap-3">
        <Input placeholder="Nome completo" required className="rounded-xl bg-secondary border-border text-sm h-11" />
        <Input placeholder="WhatsApp" type="tel" required className="rounded-xl bg-secondary border-border text-sm h-11" />
        <Input placeholder="E-mail" type="email" required className="rounded-xl bg-secondary border-border text-sm h-11" />

        <select required className="h-11 rounded-xl bg-secondary border border-border px-3 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring">
          <option value="">Curso de interesse</option>
          <option>Marketing Digital</option>
          <option>Excel Avançado</option>
          <option>Inglês Profissional</option>
          <option>UX/UI Design</option>
        </select>

        <Input type="date" required className="rounded-xl bg-secondary border-border text-sm h-11" />

        <div className="flex gap-2">
          {["Manhã", "Tarde", "Noite"].map((t) => (
            <label key={t} className="flex-1">
              <input type="radio" name="time" value={t} className="peer sr-only" required />
              <div className="text-center py-2.5 rounded-xl border border-border text-xs font-medium text-muted-foreground peer-checked:border-primary peer-checked:text-primary peer-checked:bg-primary/5 cursor-pointer transition-colors">
                {t}
              </div>
            </label>
          ))}
        </div>

        <button type="submit" disabled={loading} className="btn-gradient-primary flex items-center justify-center gap-2 mt-1">
          {loading ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin" />
              Enviando...
            </>
          ) : (
            "Confirmar Agendamento"
          )}
        </button>
      </form>
    </div>
  );
};

export default SchedulingFormBlock;
