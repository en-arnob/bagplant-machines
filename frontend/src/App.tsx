import { Outlet } from "react-router";
import { TopNav } from "@/components/top-nav";
import { BottomNav } from "@/components/bottom-nav";

function App() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <TopNav />
      <main className="mx-auto w-full max-w-6xl flex-1 px-4 py-6 pb-20 md:pb-6">
        <Outlet />
      </main>
      <BottomNav />
    </div>
  );
}

export default App;
