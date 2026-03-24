import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowRight, Sparkles, Users, BookOpen, TrendingUp } from "lucide-react";

const Index = () => {
  const [slug, setSlug] = useState("");
  const navigate = useNavigate();

  const handleCreate = (e: React.FormEvent) => {
    e.preventDefault();
    if (slug.trim()) {
      navigate(`/${slug.trim().toLowerCase().replace(/\s+/g, "-")}`);
    }
  };

  return (
    <div className="min-h-screen bg-[#F8F7FF] relative overflow-hidden">
      {/* Gradient blobs */}
      <div className="gradient-blob w-[500px] h-[500px] rounded-full bg-[#FF6B9D] top-[-150px] right-[-100px]" />
      <div className="gradient-blob w-[400px] h-[400px] rounded-full bg-[#4FACFE] bottom-[-100px] left-[-100px]" />
      <div className="gradient-blob w-[300px] h-[300px] rounded-full bg-[#C44DFF] top-[40%] left-[50%]" />

      <div className="relative z-10">
        {/* Nav */}
        <header className="max-w-5xl mx-auto px-4 py-5 flex items-center justify-between">
          <h2 className="text-xl font-extrabold text-foreground">
            matricule<span className="text-primary">aqui</span>
          </h2>
          <a href="/instituto-futuro" className="text-sm font-semibold text-primary hover:underline">
            Ver demo →
          </a>
        </header>

        {/* Hero */}
        <section className="max-w-3xl mx-auto px-4 pt-16 pb-20 text-center stagger-in">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-semibold mb-6">
            <Sparkles className="w-3.5 h-3.5" />
            Usado por +500 instituições em todo o Brasil
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-foreground leading-tight mb-5">
            O link que <span className="bg-clip-text text-transparent" style={{ backgroundImage: "linear-gradient(135deg, #FF6B9D, #C44DFF)" }}>matricula.</span>
            <br />
            Não só compartilha.
          </h1>

          <p className="text-lg text-muted-foreground max-w-xl mx-auto mb-10">
            Crie sua página em minutos e transforme visitantes em alunos com formulários, agendamentos e vitrine de cursos.
          </p>

          <form onSubmit={handleCreate} className="flex items-center max-w-md mx-auto bg-card border border-border rounded-2xl p-1.5 shadow-lg">
            <span className="text-sm text-muted-foreground pl-4 shrink-0 hidden sm:inline">matriculeaqui.com/</span>
            <input
              value={slug}
              onChange={(e) => setSlug(e.target.value)}
              placeholder="nome-da-instituição"
              className="flex-1 h-11 bg-transparent px-2 text-sm font-medium text-foreground placeholder:text-muted-foreground focus:outline-none min-w-0"
            />
            <button type="submit" className="btn-gradient-primary flex items-center gap-2 text-sm shrink-0">
              Criar página <ArrowRight className="w-4 h-4" />
            </button>
          </form>
        </section>

        {/* Benefits */}
        <section className="max-w-4xl mx-auto px-4 pb-24">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {[
              { icon: Users, title: "Captar", desc: "Formulários inteligentes que captam leads direto na página.", gradient: "linear-gradient(135deg, #FF6B9D, #C44DFF)" },
              { icon: BookOpen, title: "Engajar", desc: "Vitrine de cursos, vídeos e conteúdo que convence.", gradient: "linear-gradient(135deg, #FFD93D, #FF6B35)" },
              { icon: TrendingUp, title: "Converter", desc: "CRM interno para gerenciar leads e agendar visitas.", gradient: "linear-gradient(135deg, #4FACFE, #00F2FE)" },
            ].map((b) => (
              <div key={b.title} className="block-card block-card-hover p-6 text-center flex flex-col items-center gap-4 stagger-in">
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center text-white" style={{ background: b.gradient }}>
                  <b.icon className="w-7 h-7" />
                </div>
                <h3 className="text-lg font-bold text-foreground">{b.title}</h3>
                <p className="text-sm text-muted-foreground">{b.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Final */}
        <section className="mx-4 mb-16 rounded-3xl p-10 text-center text-white" style={{ background: "linear-gradient(135deg, #6C3EFF, #C44DFF)" }}>
          <h2 className="text-2xl sm:text-3xl font-extrabold mb-3">Comece agora, é grátis!</h2>
          <p className="text-white/80 mb-6 text-sm max-w-md mx-auto">Monte sua página de captação em minutos e comece a receber leads hoje mesmo.</p>
          <a href="#" className="inline-flex items-center gap-2 bg-white text-primary font-bold rounded-xl px-8 py-3.5 hover:-translate-y-1 transition-transform shadow-lg">
            Criar minha página <ArrowRight className="w-4 h-4" />
          </a>
        </section>

        {/* Footer */}
        <footer className="text-center pb-8">
          <p className="text-xs text-muted-foreground">
            © 2026 MatriculeAqui · Feito com 💜 por <span className="font-semibold text-primary">Amais</span>
          </p>
        </footer>
      </div>
    </div>
  );
};

export default Index;
