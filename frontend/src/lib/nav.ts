import {
  Activity,
  FileText,
  Home as HomeIcon,
  LifeBuoy,
  PlusCircle,
  QrCode,
  User,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

export type NavEntry = {
  to: string;
  label: string;
  description: string;
  icon: LucideIcon;
};

export const pageEntries: NavEntry[] = [
  {
    to: "/",
    label: "Dashboard",
    description: "Overview and status",
    icon: HomeIcon,
  },
  {
    to: "/machines",
    label: "Machines",
    description: "Browse all machines",
    icon: Activity,
  },
  {
    to: "/reports",
    label: "Reports",
    description: "Alerts and insights",
    icon: FileText,
  },
  {
    to: "/account",
    label: "Account",
    description: "Profile and settings",
    icon: User,
  },
];

export const actionEntries: NavEntry[] = [
  {
    to: "/get-reading",
    label: "Log Reading",
    description: "Post a new meter reading",
    icon: QrCode,
  },
  {
    to: "/machines/new",
    label: "Add Machine",
    description: "Register a new machine",
    icon: PlusCircle,
  },
  {
    to: "/help",
    label: "Help",
    description: "Guides and support",
    icon: LifeBuoy,
  },
];

export const pageTitles: Record<string, string> = Object.fromEntries(
  [...pageEntries, ...actionEntries].map((entry) => [entry.to, entry.label]),
);
