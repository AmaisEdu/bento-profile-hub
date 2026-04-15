import { useState, useMemo } from "react";
import {
  ExternalLink, ArrowLeft, ArrowRight, Calendar, MessageCircle,
  Link as LinkIcon, BookOpen, BarChart3, BarChart2, Mail, Search,
  Globe, Phone, MapPin, Star, Heart, Home, Settings, User, Camera,
  FileText, Download, Upload, Share2, Bell, Clock, Shield, Zap,
  Gift, Award, Target, Bookmark, Music, Video, Image, Mic, 
  ShoppingCart, CreditCard, Truck, Package, Tag, Percent,
  TrendingUp, PieChart, Activity, Layers, Grid, List,
  ChevronRight, X, Eye
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";

const ALL_ICONS = [
  { name: "Link externo", key: "external-link", icon: ExternalLink },
  { name: "Seta esquerda", key: "arrow-left", icon: ArrowLeft },
  { name: "Seta direita", key: "arrow-right", icon: ArrowRight },
  { name: "Link", key: "link", icon: LinkIcon },
  { name: "Calendário", key: "calendar", icon: Calendar },
  { name: "Chat", key: "chat", icon: MessageCircle },
  { name: "Livro", key: "book", icon: BookOpen },
  { name: "Gráfico de linha", key: "bar-chart-3", icon: BarChart3 },
  { name: "Gráfico de colunas", key: "bar-chart-2", icon: BarChart2 },
  { name: "Email", key: "mail", icon: Mail },
  { name: "Globe", key: "globe", icon: Globe },
  { name: "Telefone", key: "phone", icon: Phone },
  { name: "Localização", key: "map-pin", icon: MapPin },
  { name: "Estrela", key: "star", icon: Star },
  { name: "Coração", key: "heart", icon: Heart },
  { name: "Home", key: "home", icon: Home },
  { name: "Configurações", key: "settings", icon: Settings },
  { name: "Usuário", key: "user", icon: User },
  { name: "Câmera", key: "camera", icon: Camera },
  { name: "Documento", key: "file-text", icon: FileText },
  { name: "Download", key: "download", icon: Download },
  { name: "Upload", key: "upload", icon: Upload },
  { name: "Compartilhar", key: "share", icon: Share2 },
  { name: "Notificação", key: "bell", icon: Bell },
  { name: "Relógio", key: "clock", icon: Clock },
  { name: "Segurança", key: "shield", icon: Shield },
  { name: "Raio", key: "zap", icon: Zap },
  { name: "Presente", key: "gift", icon: Gift },
  { name: "Prêmio", key: "award", icon: Award },
  { name: "Alvo", key: "target", icon: Target },
  { name: "Favorito", key: "bookmark", icon: Bookmark },
  { name: "Música", key: "music", icon: Music },
  { name: "Vídeo", key: "video", icon: Video },
  { name: "Imagem", key: "image", icon: Image },
  { name: "Microfone", key: "mic", icon: Mic },
  { name: "Carrinho", key: "cart", icon: ShoppingCart },
  { name: "Cartão", key: "credit-card", icon: CreditCard },
  { name: "Entrega", key: "truck", icon: Truck },
  { name: "Pacote", key: "package", icon: Package },
  { name: "Tag", key: "tag", icon: Tag },
  { name: "Desconto", key: "percent", icon: Percent },
  { name: "Tendência", key: "trending", icon: TrendingUp },
  { name: "Pizza", key: "pie-chart", icon: PieChart },
  { name: "Atividade", key: "activity", icon: Activity },
  { name: "Camadas", key: "layers", icon: Layers },
  { name: "Grade", key: "grid", icon: Grid },
  { name: "Lista", key: "list", icon: List },
];

const POPULAR_KEYS = ["external-link", "link", "calendar", "chat", "mail", "globe", "phone", "book"];

function IconPicker({ selected, onSelect }: { selected: string; onSelect: (key: string) => void }) {
  const [search, setSearch] = useState("");
  const [open, setOpen] = useState(false);

  const filtered = useMemo(() => {
    if (!search) return [];
    const q = search.toLowerCase();
    return ALL_ICONS.filter(i => i.name.toLowerCase().includes(q) || i.key.includes(q));
  }, [search]);

  const popular = ALL_ICONS.filter(i => POPULAR_KEYS.includes(i.key));
  const selectedIcon = ALL_ICONS.find(i => i.key === selected);
  const SelectedComp = selectedIcon?.icon || ExternalLink;

  const displayList = search ? filtered : popular;
  const showAllButton = !search;

  return (
    <div className="space-y-2">
      <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">Ícone</label>
      <div className="flex items-center gap-2">
        {/* Selected icon preview */}
        <div className="w-10 h-10 rounded-xl border border-border bg-secondary/50 flex items-center justify-center shrink-0">
          <SelectedComp className="w-5 h-5 text-primary" />
        </div>
        <span className="text-sm text-foreground font-medium flex-1">{selectedIcon?.name || "Selecionar"}</span>
        <Popover open={open} onOpenChange={setOpen}>
          <PopoverTrigger asChild>
            <Button variant="outline" size="sm" className="text-xs">
              Alterar
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-72 p-3" align="end">
            <div className="space-y-3">
              <div className="relative">
                <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input
                  placeholder="Buscar ícone..."
                  value={search}
                  onChange={e => setSearch(e.target.value)}
                  className="pl-8 h-9 text-sm"
                />
                {search && (
                  <button
                    onClick={() => setSearch("")}
                    className="absolute right-2.5 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                  >
                    <X className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>

              {!search && (
                <p className="text-[10px] font-semibold text-muted-foreground uppercase tracking-wider">Populares</p>
              )}
              {search && filtered.length === 0 && (
                <p className="text-xs text-muted-foreground text-center py-4">Nenhum ícone encontrado</p>
              )}

              <div className="grid grid-cols-5 gap-1.5">
                {displayList.map(item => {
                  const Icon = item.icon;
                  const isSelected = item.key === selected;
                  return (
                    <Tooltip key={item.key}>
                      <TooltipTrigger asChild>
                        <button
                          onClick={() => { onSelect(item.key); setOpen(false); setSearch(""); }}
                          className={`w-full aspect-square rounded-lg flex items-center justify-center transition-all ${
                            isSelected
                              ? "bg-primary text-primary-foreground ring-2 ring-primary/30"
                              : "hover:bg-secondary text-muted-foreground hover:text-foreground"
                          }`}
                        >
                          <Icon className="w-5 h-5" />
                        </button>
                      </TooltipTrigger>
                      <TooltipContent side="bottom" className="text-xs">
                        {item.name}
                      </TooltipContent>
                    </Tooltip>
                  );
                })}
              </div>

              {showAllButton && (
                <button
                  onClick={() => setSearch(" ")}
                  className="w-full text-xs text-primary hover:underline text-center pt-1"
                >
                  Ver todos os ícones
                </button>
              )}
            </div>
          </PopoverContent>
        </Popover>
      </div>
    </div>
  );
}

function SimpleLinkEditor() {
  const [text, setText] = useState("Conheça nossa escola");
  const [url, setUrl] = useState("https://");
  const [icon, setIcon] = useState("external-link");

  const selectedIcon = ALL_ICONS.find(i => i.key === icon);
  const IconComp = selectedIcon?.icon || ExternalLink;

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      {/* Editor Panel */}
      <div className="bg-card rounded-2xl border border-border p-6 space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-lg font-bold text-foreground">Editar link simples</h2>
            <p className="text-sm text-muted-foreground mt-0.5">
              Um botão em destaque na bio. Texto, URL e ícone ficam guardados no rascunho.
            </p>
          </div>
          <button className="w-8 h-8 rounded-lg hover:bg-secondary flex items-center justify-center text-muted-foreground">
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="h-px bg-border" />

        <div className="space-y-5">
          <div className="space-y-2">
            <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">
              Texto do botão
            </label>
            <Input
              value={text}
              onChange={e => setText(e.target.value)}
              placeholder="Ex: Visite nosso site"
              className="h-11"
            />
          </div>

          <div className="space-y-2">
            <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">
              URL
            </label>
            <Input
              value={url}
              onChange={e => setUrl(e.target.value)}
              placeholder="https://exemplo.com"
              className="h-11"
            />
          </div>

          <IconPicker selected={icon} onSelect={setIcon} />
        </div>

        <div className="h-px bg-border" />

        <div className="flex gap-3">
          <Button className="flex-1 h-11 font-semibold">Concluir</Button>
          <Button variant="outline" className="h-11">Cancelar</Button>
        </div>
      </div>

      {/* Live Preview */}
      <div className="space-y-4">
        <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide">Preview</h3>
        <div className="bg-secondary/30 rounded-2xl p-8 flex items-center justify-center min-h-[200px]">
          <div className="w-full max-w-[380px]">
            <a
              href="#"
              onClick={e => e.preventDefault()}
              className="flex items-center gap-4 p-4 rounded-2xl bg-card border border-border shadow-sm hover:shadow-md transition-all hover:-translate-y-0.5 cursor-pointer"
              style={{ borderLeft: "4px solid hsl(var(--primary))" }}
            >
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                <IconComp className="w-5 h-5 text-primary" />
              </div>
              <span className="text-sm font-bold text-foreground flex-1 truncate">
                {text || "Texto do botão"}
              </span>
              <ChevronRight className="w-5 h-5 text-muted-foreground shrink-0" />
            </a>
          </div>
        </div>
        <p className="text-xs text-muted-foreground text-center">
          Visualização em tempo real do bloco
        </p>
      </div>
    </div>
  );
}

const WidgetEditorShowcase = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-5xl mx-auto px-6 py-12">
        <div className="mb-10">
          <h1 className="text-2xl font-bold text-foreground">Design System — Editores de Widget</h1>
          <p className="text-muted-foreground mt-1">
            Referência visual dos formulários de edição de cada bloco.
          </p>
        </div>

        {/* Link Simples */}
        <section className="space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
              <ExternalLink className="w-4 h-4 text-primary" />
            </div>
            <h2 className="text-lg font-bold text-foreground">Link Simples</h2>
          </div>
          <SimpleLinkEditor />
        </section>
      </div>
    </div>
  );
};

export default WidgetEditorShowcase;
