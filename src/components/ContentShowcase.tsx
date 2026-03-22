interface ContentShowcaseProps {
  title: string;
  imageUrl: string;
  url?: string;
  delay?: number;
  isEditing?: boolean;
}

const ContentShowcase = ({ title, imageUrl, url, delay = 0, isEditing }: ContentShowcaseProps) => {
  const Wrapper = isEditing ? "div" : "a";
  const wrapperProps = isEditing
    ? {}
    : { href: url, target: "_blank" as const, rel: "noopener noreferrer" };

  return (
    <Wrapper
      {...(wrapperProps as any)}
      className={`glass-card glass-card-hover relative overflow-hidden min-h-[180px] flex items-end stagger-in cursor-pointer ${isEditing ? "edit-wiggle" : ""}`}
      style={{ animationDelay: `${delay}ms` }}
    >
      <img
        src={imageUrl}
        alt={title}
        className="absolute inset-0 w-full h-full object-cover opacity-60"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/30 to-transparent" />
      <div className="relative z-10 p-6">
        <h3 className="text-lg font-bold text-foreground">{title}</h3>
      </div>
    </Wrapper>
  );
};

export default ContentShowcase;
