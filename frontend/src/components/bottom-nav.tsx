import { useState } from "react";
import { NavLink } from "react-router";
import { Home, Menu as MenuIcon, FileText, QrCode } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { NavMenu } from "@/components/nav-menu";

type Tab = {
  to: string;
  label: string;
  icon: LucideIcon;
  end?: boolean;
};

const tabs: Tab[] = [
  { to: "/", label: "Home", icon: Home, end: true },
  { to: "/get-reading", label: "Log Reading", icon: QrCode },
  { to: "/reports", label: "Reports", icon: FileText },
];

export function BottomNav() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav
      aria-label="Primary"
      className="sticky bottom-0 z-30 border-t border-primary/20 bg-primary pb-[env(safe-area-inset-bottom)] text-primary-foreground shadow-[0_-1px_3px_rgba(0,0,0,0.08)] md:hidden"
    >
      <ul className="grid grid-cols-4">
        {tabs.map(({ to, label, icon: Icon, end }) => (
          <li key={to}>
            <NavLink
              to={to}
              end={end}
              className={({ isActive }) =>
                cn(
                  "flex h-18 flex-col items-center justify-center gap-1 text-xs font-medium text-primary-foreground/70 transition-colors hover:bg-primary-foreground/10 hover:text-primary-foreground",
                  isActive &&
                    !menuOpen &&
                    "bg-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/20",
                )
              }
            >
              <Icon className="size-5" aria-hidden />
              <span>{label}</span>
            </NavLink>
          </li>
        ))}
        <li>
          <NavMenu
            align="end"
            side="top"
            onOpenChange={setMenuOpen}
            trigger={
              <button
                type="button"
                aria-label="Open menu"
                className="flex h-18 w-full flex-col items-center justify-center gap-1 text-xs font-medium text-primary-foreground/70 transition-colors hover:bg-primary-foreground/10 hover:text-primary-foreground data-[popup-open]:bg-primary-foreground/20 data-[popup-open]:text-primary-foreground"
              />
            }
          >
            <MenuIcon className="size-5" aria-hidden />
            <span>Menu</span>
          </NavMenu>
        </li>
      </ul>
    </nav>
  );
}
