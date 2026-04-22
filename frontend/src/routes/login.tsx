import { useNavigate } from "react-router";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import logo from "@/assets/PREMIERCEM.png";

export default function Login() {
  const navigate = useNavigate();

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    navigate("/");
  }

  return (
    <div className="min-h-screen grid md:grid-cols-2">
      <div className="flex items-center justify-center bg-primary text-primary-foreground p-8 md:p-12">
        <div className="flex flex-col items-center text-center gap-4 max-w-sm">
          <div className="rounded-xl bg-white p-3 shadow-sm">
            <img
              src={logo}
              alt="Premier Cement"
              className="h-16 md:h-24 w-auto"
            />
          </div>
          <h1 className="font-heading text-2xl md:text-3xl font-bold leading-tight">
            Premier Cement
            <br />
            <span className="text-zinc-100 text-xl rounded-md">
              Plant Performance
            </span>
          </h1>
          <p className="hidden md:block text-sm text-primary-foreground/80">
            Machineries Performance Montioring
          </p>
        </div>
      </div>

      <div className="flex items-center justify-center p-6 md:p-12">
        <div className="w-full max-w-sm flex flex-col gap-6">
          <div className="flex flex-col gap-1">
            <h2 className="font-heading text-2xl font-semibold">
              Welcome back
            </h2>
            <p className="text-sm text-muted-foreground">
              Sign in to continue to the control panel.
            </p>
          </div>
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div className="flex flex-col gap-1.5">
              <Label htmlFor="username">Username</Label>
              <Input
                id="username"
                name="username"
                type="text"
                autoComplete="username"
                placeholder="operator@premier"
                required
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                placeholder="••••••••"
                required
              />
            </div>
            <Button type="submit" className="mt-2 w-full">
              Log in
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}
