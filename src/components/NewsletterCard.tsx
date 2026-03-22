import { useState } from "react";
import { Mail, ArrowRight, Check } from "lucide-react";

interface NewsletterCardProps {
  delay?: number;
  isEditing?: boolean;
}

const NewsletterCard = ({ delay = 0, isEditing }: NewsletterCardProps) => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 3000);
      setEmail("");
    }
  };

  return (
    <div
      className={`glass-card glass-card-hover p-6 flex flex-col justify-center gap-4 stagger-in ${isEditing ? "edit-wiggle" : ""}`}
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
          <Mail className="w-5 h-5 text-primary" />
        </div>
        <div>
          <h3 className="text-sm font-bold text-foreground">Newsletter</h3>
          <p className="text-xs text-muted-foreground">Receba novidades semanais</p>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="flex gap-2">
        <input
          type="email"
          placeholder="seu@email.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={isEditing}
          className="flex-1 h-10 rounded-xl bg-secondary/50 border border-border px-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary/50 transition-all"
        />
        <button
          type="submit"
          disabled={isEditing}
          className="h-10 w-10 rounded-xl bg-primary text-primary-foreground flex items-center justify-center shrink-0 transition-transform active:scale-95"
        >
          {submitted ? <Check className="w-4 h-4" /> : <ArrowRight className="w-4 h-4" />}
        </button>
      </form>
    </div>
  );
};

export default NewsletterCard;
