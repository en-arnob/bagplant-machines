import { Link } from "react-router";
import type { LucideIcon } from "lucide-react";
import { Boxes, Wrench, ShieldAlert, ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { actionEntries, pageEntries, type NavEntry } from "@/lib/nav";

type Tone = "blue" | "amber" | "rose";

type Stat = {
  label: string;
  value: number;
  icon: LucideIcon;
  tone: Tone;
  hint: string;
};

const stats: Stat[] = [
  {
    label: "Total Machines",
    value: 42,
    icon: Boxes,
    tone: "blue",
    hint: "Across all lines",
  },
  {
    label: "Maintenance",
    value: 7,
    icon: Wrench,
    tone: "amber",
    hint: "Service due soon",
  },
  {
    label: "Out of Warranty",
    value: 12,
    icon: ShieldAlert,
    tone: "rose",
    hint: "Coverage expired",
  },
];

const statTones: Record<
  Tone,
  { card: string; iconWrap: string; value: string }
> = {
  blue: {
    card: "bg-gradient-to-br from-sky-50 to-blue-100/60 ring-sky-500/20 dark:from-sky-950/40 dark:to-blue-900/20 dark:ring-sky-400/20",
    iconWrap: "bg-sky-500/15 text-sky-600 dark:bg-sky-400/15 dark:text-sky-300",
    value: "text-sky-700 dark:text-sky-200",
  },
  amber: {
    card: "bg-gradient-to-br from-amber-50 to-orange-100/60 ring-amber-500/20 dark:from-amber-950/40 dark:to-orange-900/20 dark:ring-amber-400/20",
    iconWrap:
      "bg-amber-500/15 text-amber-600 dark:bg-amber-400/15 dark:text-amber-300",
    value: "text-amber-700 dark:text-amber-200",
  },
  rose: {
    card: "bg-gradient-to-br from-rose-50 to-red-100/60 ring-rose-500/20 dark:from-rose-950/40 dark:to-red-900/20 dark:ring-rose-400/20",
    iconWrap:
      "bg-rose-500/15 text-rose-600 dark:bg-rose-400/15 dark:text-rose-300",
    value: "text-rose-700 dark:text-rose-200",
  },
};

type ActionTone = "indigo" | "emerald" | "violet" | "cyan";

const machinesPage = pageEntries.find((entry) => entry.to === "/machines");
const [getReading, addMachine, help] = actionEntries;

const quickActions: { entry: NavEntry; tone: ActionTone }[] = [
  { entry: getReading, tone: "indigo" },
  ...(machinesPage ? [{ entry: machinesPage, tone: "emerald" as const }] : []),
  { entry: addMachine, tone: "violet" },
  { entry: help, tone: "cyan" },
];

const actionTones: Record<ActionTone, { card: string; iconWrap: string }> = {
  indigo: {
    card: "bg-gradient-to-br from-indigo-50 to-blue-100/60 ring-indigo-500/20 hover:from-indigo-100 hover:to-blue-200/70 dark:from-indigo-950/40 dark:to-blue-900/20 dark:ring-indigo-400/20 dark:hover:from-indigo-900/50",
    iconWrap:
      "bg-indigo-500/15 text-indigo-600 dark:bg-indigo-400/20 dark:text-indigo-300",
  },
  emerald: {
    card: "bg-gradient-to-br from-emerald-50 to-teal-100/60 ring-emerald-500/20 hover:from-emerald-100 hover:to-teal-200/70 dark:from-emerald-950/40 dark:to-teal-900/20 dark:ring-emerald-400/20 dark:hover:from-emerald-900/50",
    iconWrap:
      "bg-emerald-500/15 text-emerald-600 dark:bg-emerald-400/20 dark:text-emerald-300",
  },
  violet: {
    card: "bg-gradient-to-br from-violet-50 to-fuchsia-100/60 ring-violet-500/20 hover:from-violet-100 hover:to-fuchsia-200/70 dark:from-violet-950/40 dark:to-fuchsia-900/20 dark:ring-violet-400/20 dark:hover:from-violet-900/50",
    iconWrap:
      "bg-violet-500/15 text-violet-600 dark:bg-violet-400/20 dark:text-violet-300",
  },
  cyan: {
    card: "bg-gradient-to-br from-cyan-50 to-sky-100/60 ring-cyan-500/20 hover:from-cyan-100 hover:to-sky-200/70 dark:from-cyan-950/40 dark:to-sky-900/20 dark:ring-cyan-400/20 dark:hover:from-cyan-900/50",
    iconWrap:
      "bg-cyan-500/15 text-cyan-600 dark:bg-cyan-400/20 dark:text-cyan-300",
  },
};

export default function Home() {
  return (
    <div className="flex flex-col gap-6">
      <header className="flex flex-col gap-1">
        <h1 className="font-heading text-2xl font-semibold tracking-tight">
          Dashboard
        </h1>
        <p className="text-sm text-muted-foreground">
          Overview of bag plant machinery.
        </p>
      </header>

      <section aria-label="Summary" className="grid grid-cols-3 gap-2 sm:gap-3">
        {stats.map(({ label, value, icon: Icon, tone, hint }) => {
          const styles = statTones[tone];
          return (
            <Card key={label} size="sm" className={styles.card}>
              <CardContent className="flex flex-col gap-2 px-3 sm:flex-row sm:items-start sm:gap-3">
                <div
                  className={cn(
                    "flex size-8 items-center justify-center rounded-lg sm:size-10",
                    styles.iconWrap,
                  )}
                >
                  <Icon className="size-4 sm:size-5" aria-hidden />
                </div>
                <div className="flex min-w-0 flex-1 flex-col">
                  <span className="text-[0.7rem] leading-tight font-medium text-muted-foreground sm:text-xs">
                    {label}
                  </span>
                  <span
                    className={cn(
                      "font-heading text-xl leading-tight font-semibold tabular-nums sm:text-2xl",
                      styles.value,
                    )}
                  >
                    {value}
                  </span>
                  <span className="hidden text-xs text-muted-foreground sm:inline">
                    {hint}
                  </span>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </section>

      <section aria-label="Quick actions" className="flex flex-col gap-3">
        <h2 className="font-heading text-sm font-medium text-muted-foreground">
          Quick Actions
        </h2>
        <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
          {quickActions.map(({ entry, tone }) => {
            const { to, label, description, icon: Icon } = entry;
            const styles = actionTones[tone];
            return (
              <Link
                key={to}
                to={to}
                className="group/action rounded-xl outline-none focus-visible:ring-3 focus-visible:ring-ring/50"
              >
                <Card className={cn("h-full transition-colors", styles.card)}>
                  <CardContent className="flex h-full flex-col gap-3">
                    <div className="flex items-center justify-between">
                      <div
                        className={cn(
                          "flex size-10 items-center justify-center rounded-lg",
                          styles.iconWrap,
                        )}
                      >
                        <Icon className="size-5" aria-hidden />
                      </div>
                      <ArrowRight
                        className="size-4 text-muted-foreground transition-transform group-hover/action:translate-x-0.5"
                        aria-hidden
                      />
                    </div>
                    <div className="flex flex-col gap-0.5">
                      <span className="font-heading text-sm font-medium">
                        {label}
                      </span>
                      <span className="text-xs text-muted-foreground">
                        {description}
                      </span>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            );
          })}
        </div>
      </section>
    </div>
  );
}
