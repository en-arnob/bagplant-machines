import { NavLink } from "react-router";
import { Home, Activity, User, FileText } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

type Tab = {
  to: string;
  label: string;
  icon: LucideIcon;
  end?: boolean;
};

const tabs: Tab[] = [
  { to: "/", label: "Home", icon: Home, end: true },
  { to: "/machines", label: "Machines", icon: Activity },
  { to: "/reports", label: "Reports", icon: FileText },
  { to: "/account", label: "Account", icon: User },
];

export function BottomNav() {
  return (
    <nav
      aria-label="Primary"
      className="sticky bottom-0 z-30 border-t border-primary/20 bg-primary text-primary-foreground shadow-[0_-1px_3px_rgba(0,0,0,0.08)] md:hidden"
    >
      <ul className="grid grid-cols-4">
        {tabs.map(({ to, label, icon: Icon, end }) => (
          <li key={to}>
            <NavLink
              to={to}
              end={end}
              className={({ isActive }) =>
                cn(
                  "flex h-14 flex-col items-center justify-center gap-0.5 text-xs font-medium text-primary-foreground/70 transition-colors",
                  isActive &&
                    "bg-primary-foreground/15 text-primary-foreground",
                )
              }
            >
              <Icon className="size-5" aria-hidden />
              <span>{label}</span>
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}
