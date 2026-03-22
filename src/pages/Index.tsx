import { useState, useCallback } from "react";
import {
  DndContext,
  closestCenter,
  PointerSensor,
  useSensor,
  useSensors,
  type DragEndEvent,
} from "@dnd-kit/core";
import {
  SortableContext,
  useSortable,
  rectSortingStrategy,
  arrayMove,
} from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { Pencil, X, GripVertical } from "lucide-react";

import ProfileCard from "@/components/ProfileCard";
import SocialLinkCard from "@/components/SocialLinkCard";
import ContentShowcase from "@/components/ContentShowcase";
import NewsletterCard from "@/components/NewsletterCard";
import MapCard from "@/components/MapCard";

import avatarImg from "@/assets/avatar.jpg";
import projectCover from "@/assets/project-cover.jpg";

interface Widget {
  id: string;
  type: string;
  size: "1x1" | "2x1" | "2x2";
  content: Record<string, any>;
}

const initialWidgets: Widget[] = [
  {
    id: "profile",
    type: "profile",
    size: "2x2",
    content: {
      name: "Marina Costa",
      bio: "Desenvolvedora full-stack apaixonada por criar experiências digitais que transformam negócios.",
      avatarUrl: avatarImg,
      tags: ["React", "TypeScript", "Figma", "Node.js"],
    },
  },
  {
    id: "instagram",
    type: "social",
    size: "1x1",
    content: { platform: "instagram", url: "https://instagram.com" },
  },
  {
    id: "linkedin",
    type: "social",
    size: "1x1",
    content: { platform: "linkedin", url: "https://linkedin.com" },
  },
  {
    id: "project",
    type: "content",
    size: "2x1",
    content: {
      title: "Dashboard Analytics — Projeto Recente",
      imageUrl: projectCover,
      url: "#",
    },
  },
  {
    id: "github",
    type: "social",
    size: "1x1",
    content: { platform: "github", url: "https://github.com" },
  },
  {
    id: "map",
    type: "map",
    size: "1x1",
    content: { location: "São Paulo, BR" },
  },
  {
    id: "newsletter",
    type: "newsletter",
    size: "2x1",
    content: {},
  },
  {
    id: "youtube",
    type: "social",
    size: "1x1",
    content: { platform: "youtube", url: "https://youtube.com" },
  },
];

const sizeClasses: Record<string, string> = {
  "1x1": "col-span-1",
  "2x1": "col-span-1 sm:col-span-2",
  "2x2": "col-span-1 sm:col-span-2 row-span-2",
};

function SortableWidget({
  widget,
  index,
  isEditing,
}: {
  widget: Widget;
  index: number;
  isEditing: boolean;
}) {
  const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id: widget.id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  const delay = index * 80;

  const renderWidget = () => {
    switch (widget.type) {
      case "profile":
        return (
          <ProfileCard
            name={widget.content.name}
            bio={widget.content.bio}
            avatarUrl={widget.content.avatarUrl}
            tags={widget.content.tags}
            delay={delay}
            isEditing={isEditing}
          />
        );
      case "social":
        return (
          <SocialLinkCard
            platform={widget.content.platform}
            url={widget.content.url}
            delay={delay}
            isEditing={isEditing}
          />
        );
      case "content":
        return (
          <ContentShowcase
            title={widget.content.title}
            imageUrl={widget.content.imageUrl}
            url={widget.content.url}
            delay={delay}
            isEditing={isEditing}
          />
        );
      case "newsletter":
        return <NewsletterCard delay={delay} isEditing={isEditing} />;
      case "map":
        return <MapCard location={widget.content.location} delay={delay} isEditing={isEditing} />;
      default:
        return null;
    }
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      className={`${sizeClasses[widget.size]} relative group`}
    >
      {isEditing && (
        <div
          {...attributes}
          {...listeners}
          className="absolute top-3 right-3 z-20 w-8 h-8 rounded-xl bg-secondary/80 backdrop-blur-sm flex items-center justify-center cursor-grab active:cursor-grabbing border border-border"
        >
          <GripVertical className="w-4 h-4 text-muted-foreground" />
        </div>
      )}
      {renderWidget()}
    </div>
  );
}

const Index = () => {
  const [widgets, setWidgets] = useState<Widget[]>(initialWidgets);
  const [isEditing, setIsEditing] = useState(false);

  const sensors = useSensors(
    useSensor(PointerSensor, { activationConstraint: { distance: 8 } })
  );

  const handleDragEnd = useCallback(
    (event: DragEndEvent) => {
      const { active, over } = event;
      if (over && active.id !== over.id) {
        setWidgets((items) => {
          const oldIndex = items.findIndex((i) => i.id === active.id);
          const newIndex = items.findIndex((i) => i.id === over.id);
          return arrayMove(items, oldIndex, newIndex);
        });
      }
    },
    []
  );

  return (
    <div className="min-h-screen bg-background bg-radial-glow">
      <div className="container max-w-5xl py-8 px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <header className="flex items-center justify-between mb-8 stagger-in" style={{ animationDelay: "0ms" }}>
          <h2 className="text-lg font-bold tracking-tight text-foreground">
            matricule<span className="text-primary">aqui</span>
          </h2>
        </header>

        {/* Bento Grid */}
        <DndContext sensors={sensors} collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
          <SortableContext items={widgets.map((w) => w.id)} strategy={rectSortingStrategy}>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 auto-rows-auto">
              {widgets.map((widget, index) => (
                <SortableWidget
                  key={widget.id}
                  widget={widget}
                  index={index}
                  isEditing={isEditing}
                />
              ))}
            </div>
          </SortableContext>
        </DndContext>

        {/* Footer */}
        <footer className="mt-12 text-center stagger-in" style={{ animationDelay: "800ms" }}>
          <p className="text-xs text-muted-foreground">
            feito com 💜 por <span className="text-primary font-semibold">Amais</span>
          </p>
        </footer>
      </div>

      {/* Edit FAB */}
      <button
        onClick={() => setIsEditing(!isEditing)}
        className={`fixed bottom-6 right-6 z-50 w-14 h-14 rounded-2xl flex items-center justify-center shadow-lg transition-all duration-300 active:scale-95 ${
          isEditing
            ? "bg-destructive text-destructive-foreground"
            : "bg-primary text-primary-foreground"
        }`}
      >
        {isEditing ? <X className="w-6 h-6" /> : <Pencil className="w-5 h-5" />}
      </button>
    </div>
  );
};

export default Index;
