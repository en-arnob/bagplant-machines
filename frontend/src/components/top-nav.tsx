import { Link, useLocation, useNavigate } from "react-router";
import { ArrowLeft, ChevronDown } from "lucide-react";
import logo from "@/assets/PREMIERCEM.png";
import { pageTitles } from "@/lib/nav";
import { NavMenu } from "@/components/nav-menu";

function getPageTitle(pathname: string) {
  if (pageTitles[pathname]) return pageTitles[pathname];
  const segment = pathname.split("/").filter(Boolean)[0];
  if (!segment) return "Dashboard";
  return segment.charAt(0).toUpperCase() + segment.slice(1);
}

export function TopNav() {
  const location = useLocation();
  const navigate = useNavigate();
  const isRoot = location.pathname === "/";
  const title = getPageTitle(location.pathname);

  return (
    <header className="sticky top-0 z-30 bg-primary text-primary-foreground shadow-md before:pointer-events-none before:absolute before:inset-x-0 before:-bottom-px before:h-px before:bg-gradient-to-r before:from-transparent before:via-primary-foreground/70 before:to-transparent after:pointer-events-none after:absolute after:inset-x-0 after:-bottom-2 after:h-2 after:bg-gradient-to-b after:from-primary-foreground/20 after:to-transparent after:blur-sm relative">
      <div className="mx-auto flex h-14 max-w-6xl items-center gap-3 px-4">
        {isRoot ? (
          <Link to="/" className="flex items-center gap-2">
            <div className="rounded-sm bg-white p-1 shadow-sm">
              <img src={logo} alt="Premier Cement" className="h-6 w-auto" />
            </div>
            <span className="font-heading text-md font-bold sm:inline">
              Plant Performance
            </span>
          </Link>
        ) : (
          <div className="flex min-w-0 items-center gap-2">
            <button
              type="button"
              onClick={() => navigate(-1)}
              aria-label="Go back"
              className="-ml-2 inline-flex size-9 items-center justify-center rounded-md text-primary-foreground transition-colors hover:bg-primary-foreground/10 focus-visible:ring-2 focus-visible:ring-primary-foreground/40 focus-visible:outline-none"
            >
              <ArrowLeft className="size-5" aria-hidden />
            </button>
            <h1 className="truncate font-heading text-base font-semibold">
              {title}
            </h1>
          </div>
        )}

        <div className="ml-auto hidden items-center gap-2 md:flex">
          <NavMenu
            trigger={
              <button
                type="button"
                className="inline-flex h-8 items-center gap-1.5 rounded-md bg-primary-foreground/10 px-3 text-[0.8rem] font-medium text-primary-foreground transition-colors hover:bg-primary-foreground/20 focus-visible:ring-2 focus-visible:ring-primary-foreground/40 focus-visible:outline-none data-[popup-open]:bg-primary-foreground/20"
              />
            }
          >
            Menu
            <ChevronDown
              className="size-4 transition-transform duration-150 data-[popup-open]:rotate-180"
              aria-hidden
            />
          </NavMenu>
        </div>
      </div>
    </header>
  );
}
