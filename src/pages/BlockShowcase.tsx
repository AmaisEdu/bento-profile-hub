import SocialLinksBlock from "@/components/institution/SocialLinksBlock";
import ExternalLinkBlock from "@/components/institution/ExternalLinkBlock";
import NewsletterBlock from "@/components/institution/NewsletterBlock";
import SchedulingFormBlock from "@/components/institution/SchedulingFormBlock";
import CourseCarouselBlock from "@/components/institution/CourseCarouselBlock";
import CTAButtonBlock from "@/components/institution/CTAButtonBlock";
import CustomFormBlock from "@/components/institution/CustomFormBlock";
import FAQBlock from "@/components/institution/FAQBlock";
import YouTubeVideoBlock from "@/components/institution/YouTubeVideoBlock";
import ImageBlock from "@/components/institution/ImageBlock";
import TestimonialsBlock from "@/components/institution/TestimonialsBlock";
import HighlightsBlock from "@/components/institution/HighlightsBlock";
import AudioBlock from "@/components/institution/AudioBlock";
import ChecklistBlock from "@/components/institution/ChecklistBlock";
import DownloadBlock from "@/components/institution/DownloadBlock";
import type { Block } from "@/data/demo";

const showcaseBlocks: { label: string; component: React.ComponentType<{ block: Block; delay: number }>; block: Block }[] = [
  {
    label: "Redes Sociais",
    component: SocialLinksBlock,
    block: {
      id: "s1", type: "social-links" as any, title: "🌐 Nossas Redes", isActive: true,
      config: {
        links: [
          { platform: "instagram", url: "#" },
          { platform: "youtube", url: "#" },
          { platform: "whatsapp", url: "#" },
          { platform: "facebook", url: "#" },
          { platform: "linkedin", url: "#" },
          { platform: "tiktok", url: "#" },
        ],
      },
    },
  },
  {
    label: "Link Simples",
    component: ExternalLinkBlock,
    block: {
      id: "s2", type: "external-link", title: "🌐 Visite nosso site oficial", isActive: true,
      config: { subtitle: "Conheça nossa história e infraestrutura", url: "#", accentColor: "#6C3EFF" },
    },
  },
  {
    label: "Newsletter",
    component: NewsletterBlock,
    block: {
      id: "s3", type: "newsletter" as any, title: "📬 Newsletter", isActive: true,
      config: { description: "Receba novidades e promoções exclusivas!" },
    },
  },
  {
    label: "Agendamento de Visita",
    component: SchedulingFormBlock,
    block: {
      id: "s4", type: "scheduling-form", title: "📅 Agende sua visita", isActive: true,
      config: { description: "Venha conhecer nossa estrutura! Escolha o melhor dia e horário." },
    },
  },
  {
    label: "Carrossel de Cursos",
    component: CourseCarouselBlock,
    block: {
      id: "s5", type: "course-carousel", title: "📚 Nossos Cursos", isActive: true,
      config: {
        courses: [
          { id: "c1", name: "Marketing Digital", area: "Marketing", duration: "6 meses", modality: "Online", price: "R$ 297/mês", icon: "📈", color: "#FF6B9D" },
          { id: "c2", name: "Excel Avançado", area: "Tecnologia", duration: "3 meses", modality: "Presencial", price: "R$ 197/mês", icon: "📊", color: "#4FACFE" },
          { id: "c3", name: "Inglês Profissional", area: "Idiomas", duration: "12 meses", modality: "Híbrido", price: "R$ 249/mês", icon: "🌍", color: "#FFD93D" },
          { id: "c4", name: "UX/UI Design", area: "Design", duration: "8 meses", modality: "Online", price: "R$ 397/mês", icon: "🎨", color: "#C44DFF" },
        ],
      },
    },
  },
  {
    label: "Falar no WhatsApp",
    component: CTAButtonBlock,
    block: {
      id: "s6", type: "cta-button", title: "Falar no WhatsApp", isActive: true,
      config: { icon: "whatsapp", url: "#", gradient: "linear-gradient(135deg, #25D366, #128C7E)" },
    },
  },
  {
    label: "Formulário Personalizado (Lead)",
    component: CustomFormBlock,
    block: {
      id: "s7", type: "custom-form" as any, title: "📝 Pré-Matrícula", isActive: true,
      config: {
        description: "Preencha para garantir sua vaga com desconto",
        buttonText: "Garantir Vaga",
        fields: [
          { name: "name", type: "text", placeholder: "Nome completo", required: true },
          { name: "email", type: "email", placeholder: "E-mail", required: true },
          { name: "phone", type: "tel", placeholder: "WhatsApp", required: true },
          { name: "message", type: "textarea", placeholder: "Qual curso tem interesse?", required: false },
        ],
      },
    },
  },
  {
    label: "FAQ",
    component: FAQBlock,
    block: {
      id: "s8", type: "faq" as any, title: "❓ Perguntas Frequentes", isActive: true,
      config: {
        items: [
          { question: "Qual a duração dos cursos?", answer: "Nossos cursos variam de 3 a 12 meses, dependendo da área escolhida." },
          { question: "Existe certificado?", answer: "Sim! Todos os cursos possuem certificado reconhecido pelo MEC." },
          { question: "Posso parcelar o pagamento?", answer: "Sim, aceitamos parcelamento em até 12x no cartão sem juros." },
        ],
      },
    },
  },
  {
    label: "Vídeo (YouTube)",
    component: YouTubeVideoBlock,
    block: {
      id: "s9", type: "youtube-video", title: "📹 Conheça o Instituto", isActive: true,
      config: {
        videoId: "dQw4w9WgXcQ",
        thumbnailUrl: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=640&q=80",
      },
    },
  },
  {
    label: "Imagem",
    component: ImageBlock,
    block: {
      id: "s10", type: "image" as any, title: "📸 Nossa Estrutura", isActive: true,
      config: {
        imageUrl: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=640&q=80",
        caption: "Campus principal com laboratórios modernos e área de convivência.",
      },
    },
  },
  {
    label: "Depoimentos",
    component: TestimonialsBlock,
    block: {
      id: "s11", type: "testimonials" as any, title: "💬 O que dizem nossos alunos", isActive: true,
      config: {
        testimonials: [
          { name: "Ana Silva", role: "Aluna de Marketing Digital", text: "Melhor investimento que fiz na minha carreira. Os professores são incríveis!", rating: 5 },
          { name: "Carlos Souza", role: "Aluno de Excel Avançado", text: "Em 3 meses já consegui uma promoção no trabalho graças ao curso.", rating: 5 },
          { name: "Juliana Mendes", role: "Aluna de Inglês", text: "Metodologia prática e resultados rápidos. Super recomendo!", rating: 4 },
        ],
      },
    },
  },
  {
    label: "Destaques / Métricas",
    component: HighlightsBlock,
    block: {
      id: "s12", type: "highlights" as any, title: "🏆 Nossos Números", isActive: true,
      config: {
        highlights: [
          { icon: "🎓", value: "5.200+", label: "Alunos formados" },
          { icon: "⭐", value: "4.9", label: "Nota média" },
          { icon: "📚", value: "32", label: "Cursos ativos" },
        ],
      },
    },
  },
  {
    label: "Áudio",
    component: AudioBlock,
    block: {
      id: "s13", type: "audio" as any, title: "🎧 Podcast: Dicas de Carreira", isActive: true,
      config: {
        description: "Episódio 12 — Como se preparar para entrevistas",
        audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
      },
    },
  },
  {
    label: "Checklist",
    component: ChecklistBlock,
    block: {
      id: "s14", type: "checklist" as any, title: "✅ Documentos para Matrícula", isActive: true,
      config: {
        items: [
          { text: "RG e CPF (cópia)", checked: false },
          { text: "Comprovante de residência", checked: false },
          { text: "Certificado de conclusão do Ensino Médio", checked: false },
          { text: "2 fotos 3x4 recentes", checked: false },
          { text: "Comprovante de pagamento da taxa", checked: true },
        ],
      },
    },
  },
  {
    label: "Download (Produto Digital)",
    component: DownloadBlock,
    block: {
      id: "s15", type: "download" as any, title: "📄 Guia Completo de Cursos 2025", isActive: true,
      config: {
        description: "PDF com todas as grades curriculares e valores",
        fileUrl: "#",
        fileSize: "2.4 MB · PDF",
      },
    },
  },
];

const BlockShowcase = () => {
  return (
    <div className="min-h-screen bg-[#F8F7FF] relative overflow-hidden">
      <div className="gradient-blob w-[400px] h-[400px] rounded-full bg-[#C44DFF] top-[-100px] left-[-100px]" />
      <div className="gradient-blob w-[300px] h-[300px] rounded-full bg-[#4FACFE] top-[200px] right-[-80px]" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 py-10">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl font-extrabold text-foreground mb-2">Design System — Blocos</h1>
          <p className="text-muted-foreground text-sm">Todos os 15 tipos de blocos disponíveis no MatriculeAqui</p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {showcaseBlocks.map(({ label, component: Component, block }) => (
            <div key={block.id}>
              <span className="inline-block mb-2 px-3 py-1 text-[10px] font-bold uppercase tracking-wider rounded-full bg-primary/10 text-primary">
                {label}
              </span>
              <div className="max-w-[480px]">
                <Component block={block} delay={0} />
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <footer className="text-center pt-12 pb-6">
          <p className="text-xs text-muted-foreground">
            Feito com 💜 por{" "}
            <a href="/" className="text-primary font-semibold hover:underline">MatriculeAqui</a>
          </p>
        </footer>
      </div>
    </div>
  );
};

export default BlockShowcase;
