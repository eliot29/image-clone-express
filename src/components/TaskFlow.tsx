import { Clock, Mail, FileText, Share2, FolderOpen, Search, BarChart3, Image, PhoneCall } from "lucide-react";
import type { LucideIcon } from "lucide-react";

type Task = {
  icon: LucideIcon;
  text: string;
  pending: string;
  done: string;
  wave?: boolean;
};

const tasks: Task[] = [
  { icon: FileText, text: "Devis générés en quelques minutes", pending: "Génération…", done: "Généré" },
  { icon: Search, text: "Informations trouvées instantanément", pending: "Recherche…", done: "Trouvée" },
  { icon: Mail, text: "Relances clients envoyés automatiquement", pending: "Envoi…", done: "Envoyée" },
  { icon: PhoneCall, text: "Appels entrants traités 24h/24", pending: "En ligne…", done: "Traité", wave: true },
  { icon: Share2, text: "Réseaux sociaux alimentés sans effort", pending: "Publication…", done: "Publié" },
  { icon: FolderOpen, text: "Administratif traité sans y toucher", pending: "Classement…", done: "Classé" },
  { icon: Clock, text: "Comparatifs fournisseurs prêts en un clic", pending: "Comparaison…", done: "Comparé" },
  { icon: BarChart3, text: "Fichiers Excel analysés à la demande", pending: "Analyse…", done: "Analysé" },
  { icon: Image, text: "Supports visuels créés sans designer", pending: "Création…", done: "Créé" },
];

const rowA = tasks.filter((_, i) => i % 2 === 0);
const rowB = tasks.filter((_, i) => i % 2 === 1);

const TaskCard = ({ task, delay }: { task: Task; delay: number }) => (
  <div className="shrink-0 inline-flex items-center gap-3 rounded-full border border-navy/10 bg-white/80 px-4 py-2 shadow-sm">
    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-or-mat/10">
      <task.icon size={15} className="text-or-mat" />
    </span>
    <span className="font-dm text-xs sm:text-sm text-ardoise whitespace-nowrap">{task.text}</span>
    <span className="relative inline-flex h-4 min-w-[5.5rem] items-center justify-start">
      <span
        className="task-status task-status--pending absolute inset-y-0 left-0 inline-flex items-center gap-1 font-dm text-[11px] text-ardoise/60 whitespace-nowrap"
        style={{ animationDelay: `${delay}s` }}
      >
        {task.wave ? (
          <span className="inline-flex items-end gap-[2px]" aria-hidden="true">
            {[0, 1, 2, 3].map((b) => (
              <span
                key={b}
                className="task-wave-bar w-[2px] rounded-full bg-or-mat/70"
                style={{ animationDelay: `${delay + b * 0.12}s` }}
              />
            ))}
          </span>
        ) : null}
        {task.pending}
      </span>
      <span
        className="task-status task-status--done absolute inset-y-0 left-0 inline-flex items-center gap-1 font-dm text-[11px] font-medium text-or-mat whitespace-nowrap"
        style={{ animationDelay: `${delay}s` }}
      >
        ✓ {task.done}
      </span>
    </span>
  </div>
);

const Row = ({ items, reverse, duration }: { items: Task[]; reverse?: boolean; duration: number }) => {
  const track = [...items, ...items];
  return (
    <div className="task-flow-row group relative overflow-hidden">
      <div
        className="flex w-max gap-3 sm:gap-4 will-change-transform group-hover:[animation-play-state:paused]"
        style={{
          animation: `${reverse ? "task-marquee-reverse" : "task-marquee"} ${duration}s linear infinite`,
        }}
      >
        {track.map((task, i) => (
          <TaskCard key={i} task={task} delay={(i % items.length) * 0.9} />
        ))}
      </div>
    </div>
  );
};

const TaskFlow = () => (
  <div className="task-flow relative -mx-6 mb-4 space-y-3 overflow-hidden px-6">
    <Row items={rowA} duration={42} />
    <Row items={rowB} duration={54} reverse />
  </div>
);

export default TaskFlow;
