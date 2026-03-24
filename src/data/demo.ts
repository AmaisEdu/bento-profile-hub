export interface Institution {
  id: string;
  slug: string;
  name: string;
  bio: string;
  logoUrl: string;
  themeColor: string;
  city: string;
  area: string;
  socials: { platform: string; url: string }[];
  blocks: Block[];
}

export type BlockType =
  | "external-link"
  | "youtube-video"
  | "image-cta"
  | "course-carousel"
  | "scheduling-form"
  | "contact-form"
  | "cta-button";

export interface Block {
  id: string;
  type: BlockType;
  title: string;
  config: Record<string, any>;
  isActive: boolean;
}

export const demoInstitution: Institution = {
  id: "1",
  slug: "instituto-futuro",
  name: "Instituto Futuro",
  bio: "Formando profissionais para o mercado digital desde 2018 · São Paulo, SP",
  logoUrl: "",
  themeColor: "#6C3EFF",
  city: "São Paulo, SP",
  area: "Cursos Profissionalizantes",
  socials: [
    { platform: "instagram", url: "https://instagram.com/institutofuturo" },
    { platform: "youtube", url: "https://youtube.com/@institutofuturo" },
    { platform: "whatsapp", url: "https://wa.me/5511999999999" },
    { platform: "facebook", url: "https://facebook.com/institutofuturo" },
    { platform: "linkedin", url: "https://linkedin.com/company/institutofuturo" },
    { platform: "tiktok", url: "https://tiktok.com/@institutofuturo" },
  ],
  blocks: [
    {
      id: "b1",
      type: "external-link",
      title: "🌐 Visite nosso site oficial",
      config: {
        subtitle: "Conheça nossa história e infraestrutura",
        url: "https://institutofuturo.com.br",
        accentColor: "#6C3EFF",
      },
      isActive: true,
    },
    {
      id: "b2",
      type: "youtube-video",
      title: "📹 Conheça o Instituto Futuro",
      config: {
        videoId: "dQw4w9WgXcQ",
        thumbnailUrl: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=640&q=80",
      },
      isActive: true,
    },
    {
      id: "b3",
      type: "course-carousel",
      title: "📚 Nossos Cursos",
      config: {
        courses: [
          {
            id: "c1",
            name: "Marketing Digital",
            area: "Marketing",
            duration: "6 meses",
            modality: "Online",
            price: "R$ 297/mês",
            icon: "📈",
            color: "#FF6B9D",
          },
          {
            id: "c2",
            name: "Excel Avançado",
            area: "Tecnologia",
            duration: "3 meses",
            modality: "Presencial",
            price: "R$ 197/mês",
            icon: "📊",
            color: "#4FACFE",
          },
          {
            id: "c3",
            name: "Inglês Profissional",
            area: "Idiomas",
            duration: "12 meses",
            modality: "Híbrido",
            price: "R$ 249/mês",
            icon: "🌍",
            color: "#FFD93D",
          },
          {
            id: "c4",
            name: "UX/UI Design",
            area: "Design",
            duration: "8 meses",
            modality: "Online",
            price: "R$ 397/mês",
            icon: "🎨",
            color: "#C44DFF",
          },
        ],
      },
      isActive: true,
    },
    {
      id: "b4",
      type: "scheduling-form",
      title: "📅 Agende sua visita",
      config: {
        description: "Venha conhecer nossa estrutura! Escolha o melhor dia e horário.",
      },
      isActive: true,
    },
    {
      id: "b5",
      type: "cta-button",
      title: "Falar no WhatsApp",
      config: {
        icon: "whatsapp",
        url: "https://wa.me/5511999999999?text=Olá! Gostaria de mais informações sobre os cursos.",
        gradient: "linear-gradient(135deg, #25D366, #128C7E)",
      },
      isActive: true,
    },
  ],
};
