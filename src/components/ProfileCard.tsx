interface ProfileCardProps {
  name: string;
  bio: string;
  avatarUrl: string;
  tags: string[];
  delay?: number;
  isEditing?: boolean;
}

const ProfileCard = ({ name, bio, avatarUrl, tags, delay = 0, isEditing }: ProfileCardProps) => {
  return (
    <div
      className={`glass-card glass-card-hover flex flex-col items-center justify-center gap-5 p-8 stagger-in ${isEditing ? "edit-wiggle" : ""}`}
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="relative">
        <div className="w-28 h-28 rounded-[2rem] overflow-hidden ring-2 ring-primary/30 ring-offset-2 ring-offset-background">
          <img src={avatarUrl} alt={name} className="w-full h-full object-cover" />
        </div>
        <div className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full bg-green-500 border-2 border-background" />
      </div>

      <div className="text-center space-y-2">
        <h1 className="text-2xl font-extrabold tracking-tight text-foreground">{name}</h1>
        <p className="text-sm text-muted-foreground leading-relaxed max-w-[280px]">{bio}</p>
      </div>

      <div className="flex flex-wrap justify-center gap-2">
        {tags.map((tag) => (
          <span
            key={tag}
            className="px-3 py-1 text-xs font-semibold rounded-full bg-primary/10 text-primary border border-primary/20"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
};

export default ProfileCard;
