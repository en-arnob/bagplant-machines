import * as React from "react";
import { Link } from "react-router";
import { LogOut } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { actionEntries, pageEntries, type NavEntry } from "@/lib/nav";

function MenuEntryItem({ entry }: { entry: NavEntry }) {
  const Icon = entry.icon;
  return (
    <DropdownMenuItem
      render={<Link to={entry.to} />}
      className="flex items-start gap-3 rounded-lg px-2 py-2"
    >
      <span className="mt-0.5 flex size-8 shrink-0 items-center justify-center rounded-md bg-primary/10 text-primary">
        <Icon className="size-4" aria-hidden />
      </span>
      <span className="flex min-w-0 flex-col">
        <span className="text-sm font-medium leading-tight">{entry.label}</span>
        <span className="text-xs text-muted-foreground">
          {entry.description}
        </span>
      </span>
    </DropdownMenuItem>
  );
}

type NavMenuProps = {
  trigger: React.ReactElement;
  children: React.ReactNode;
  align?: "start" | "center" | "end";
  side?: "top" | "bottom" | "left" | "right";
  sideOffset?: number;
  onOpenChange?: (open: boolean) => void;
};

export function NavMenu({
  trigger,
  children,
  align = "end",
  side = "bottom",
  sideOffset = 8,
  onOpenChange,
}: NavMenuProps) {
  return (
    <DropdownMenu onOpenChange={onOpenChange}>
      <DropdownMenuTrigger render={trigger}>{children}</DropdownMenuTrigger>
      <DropdownMenuContent
        align={align}
        side={side}
        sideOffset={sideOffset}
        className="w-72 rounded-xl border border-border/60 bg-popover/95 p-2 shadow-xl ring-1 ring-black/5 backdrop-blur-md"
      >
        <DropdownMenuGroup>
          <DropdownMenuLabel className="px-2 pt-1 pb-1 text-[0.7rem] font-semibold tracking-wider text-muted-foreground uppercase">
            Navigate
          </DropdownMenuLabel>
          {pageEntries.map((entry) => (
            <MenuEntryItem key={entry.to} entry={entry} />
          ))}
        </DropdownMenuGroup>

        <DropdownMenuSeparator className="my-2" />

        <DropdownMenuGroup>
          <DropdownMenuLabel className="px-2 pt-1 pb-1 text-[0.7rem] font-semibold tracking-wider text-muted-foreground uppercase">
            Quick Actions
          </DropdownMenuLabel>
          {actionEntries.map((entry) => (
            <MenuEntryItem key={entry.to} entry={entry} />
          ))}
        </DropdownMenuGroup>

        <DropdownMenuSeparator className="my-2" />

        <DropdownMenuItem
          render={<Link to="/login" />}
          className="flex items-center gap-3 rounded-lg px-2 py-2"
        >
          <span className="flex size-8 shrink-0 items-center justify-center rounded-md bg-destructive/10 text-destructive">
            <LogOut className="size-4" aria-hidden />
          </span>
          <span className="text-sm font-medium">Logout</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
