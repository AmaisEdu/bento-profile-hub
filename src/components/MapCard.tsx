import { MapPin } from "lucide-react";

interface MapCardProps {
  location: string;
  delay?: number;
  isEditing?: boolean;
}

const MapCard = ({ location, delay = 0, isEditing }: MapCardProps) => {
  return (
    <div
      className={`glass-card glass-card-hover relative overflow-hidden aspect-square flex flex-col items-center justify-center gap-3 stagger-in ${isEditing ? "edit-wiggle" : ""}`}
      style={{ animationDelay: `${delay}ms` }}
    >
      {/* Dark stylized map background */}
      <div className="absolute inset-0 opacity-20">
        <svg viewBox="0 0 200 200" className="w-full h-full text-muted-foreground" fill="none" stroke="currentColor" strokeWidth="0.5">
          {/* Simplified map lines */}
          <path d="M0 40 Q50 30 100 45 T200 35" />
          <path d="M0 80 Q60 70 120 85 T200 75" />
          <path d="M0 120 Q40 110 80 125 T200 115" />
          <path d="M0 160 Q70 150 140 165 T200 155" />
          <path d="M40 0 Q30 50 45 100 T35 200" />
          <path d="M80 0 Q70 60 85 120 T75 200" />
          <path d="M120 0 Q110 40 125 80 T115 200" />
          <path d="M160 0 Q150 70 165 140 T155 200" />
        </svg>
      </div>

      <div className="relative z-10 w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center">
        <MapPin className="w-6 h-6 text-primary" />
      </div>
      <span className="relative z-10 text-xs font-medium text-muted-foreground">{location}</span>
    </div>
  );
};

export default MapCard;
