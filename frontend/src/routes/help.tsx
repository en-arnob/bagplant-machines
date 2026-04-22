import type { LucideIcon } from "lucide-react";
import {
  Activity,
  FileText,
  QrCode,
  ShieldCheck,
  Sparkles,
  Wrench,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import logo from "@/assets/PREMIERCEM.png";

const APP_VERSION = "0.1.5 (beta)";

type Feature = {
  icon: LucideIcon;
  title: string;
  description: string;
};

const features: Feature[] = [
  {
    icon: ShieldCheck,
    title: "User Manual",
    description: "Knowledge book for this application.",
  },
  {
    icon: Sparkles,
    title: "What's New",
    description: "Release notes of this version.",
  },
  {
    icon: Wrench,
    title: "Report Issues",
    description: "Stay ahead of service schedules.",
  },
];

const Help = () => {
  return (
    <div className="flex flex-col gap-8">
      <header className="flex flex-col items-center gap-4 pt-4 text-center">
        <div className="rounded-2xl bg-white p-3 shadow-md ring-1 ring-black/5">
          <img src={logo} alt="Premier Cement" className="h-12 w-auto" />
        </div>
        <div className="flex flex-col gap-1">
          <h1 className="font-heading text-2xl font-semibold tracking-tight">
            Plant Performance
          </h1>
          <p className="text-sm text-muted-foreground">Help Desk</p>
        </div>

        <div className="mt-2 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm font-medium text-primary">
          <span className="size-1.5 rounded-full bg-primary" />
          Version {APP_VERSION}
        </div>
      </header>

      <section
        aria-label="Features"
        className="grid grid-cols-2 gap-3 md:grid-cols-3"
      >
        {features.map(({ icon: Icon, title, description }) => (
          <Card key={title} size="sm">
            <CardContent className="flex flex-col items-center gap-2 py-2 text-center">
              <div className="flex size-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <Icon className="size-5" aria-hidden />
              </div>
              <span className="font-heading text-sm font-medium">{title}</span>
              <span className="text-xs text-muted-foreground">
                {description}
              </span>
            </CardContent>
          </Card>
        ))}
      </section>

      <footer className="flex flex-col items-center gap-1 pt-2 text-center text-xs text-muted-foreground">
        <span>© {new Date().getFullYear()} Premier Cement Mills PLC.</span>
        <span>All rights reserved.</span>
      </footer>
    </div>
  );
};

export default Help;
