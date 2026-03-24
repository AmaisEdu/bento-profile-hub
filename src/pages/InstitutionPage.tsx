import { useParams } from "react-router-dom";
import { demoInstitution } from "@/data/demo";
import InstitutionHeader from "@/components/institution/InstitutionHeader";
import ExternalLinkBlock from "@/components/institution/ExternalLinkBlock";
import YouTubeVideoBlock from "@/components/institution/YouTubeVideoBlock";
import CourseCarouselBlock from "@/components/institution/CourseCarouselBlock";
import SchedulingFormBlock from "@/components/institution/SchedulingFormBlock";
import CTAButtonBlock from "@/components/institution/CTAButtonBlock";
import type { Block } from "@/data/demo";

const blockRenderers: Record<string, React.ComponentType<{ block: Block; delay: number }>> = {
  "external-link": ExternalLinkBlock,
  "youtube-video": YouTubeVideoBlock,
  "course-carousel": CourseCarouselBlock,
  "scheduling-form": SchedulingFormBlock,
  "cta-button": CTAButtonBlock,
};

const InstitutionPage = () => {
  const { slug } = useParams<{ slug: string }>();

  // For now, only demo institution
  const institution = slug === demoInstitution.slug ? demoInstitution : null;

  if (!institution) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center space-y-2">
          <h1 className="text-2xl font-bold text-foreground">Página não encontrada</h1>
          <p className="text-sm text-muted-foreground">Essa instituição ainda não existe no MatriculeAqui.</p>
        </div>
      </div>
    );
  }

  const activeBlocks = institution.blocks.filter((b) => b.isActive);

  return (
    <div className="min-h-screen bg-[#F8F7FF] relative overflow-hidden">
      {/* Gradient blobs */}
      <div className="gradient-blob w-[400px] h-[400px] rounded-full bg-[#C44DFF] top-[-100px] left-[-100px]" />
      <div className="gradient-blob w-[300px] h-[300px] rounded-full bg-[#4FACFE] top-[200px] right-[-80px]" />

      <div className="relative z-10 max-w-[480px] mx-auto px-4 py-8 flex flex-col gap-5">
        <InstitutionHeader institution={institution} />

        {/* Blocks */}
        {activeBlocks.map((block, i) => {
          const Renderer = blockRenderers[block.type];
          if (!Renderer) return null;
          return <Renderer key={block.id} block={block} delay={200 + i * 80} />;
        })}

        {/* Footer */}
        <footer className="text-center pt-6 pb-4 stagger-in" style={{ animationDelay: `${200 + activeBlocks.length * 80 + 80}ms` }}>
          <p className="text-xs text-muted-foreground">
            Feito com 💜 por{" "}
            <a href="/" className="text-primary font-semibold hover:underline">MatriculeAqui</a>
          </p>
        </footer>
      </div>
    </div>
  );
};

export default InstitutionPage;
