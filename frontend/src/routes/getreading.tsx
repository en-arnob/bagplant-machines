import { useState } from "react";
import {
  QrCode,
  Monitor,
  Camera,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";

const GetReading = () => {
  const [selectedMachine, setSelectedMachine] = useState<string | null>(null);
  const [mode, setMode] = useState<"scan" | "select">("scan");

  return (
    <div className="flex flex-col gap-6 max-w-xl mx-auto px-1">
      {/* Header */}

      {/* Minimal Tab Selector */}
      <nav className="flex p-1 bg-muted rounded-xl gap-1">
        <button
          onClick={() => {
            setMode("scan");
            setSelectedMachine(null);
          }}
          className={cn(
            "flex-1 flex items-center justify-center gap-2 py-2 text-sm font-medium transition-all rounded-lg",
            mode === "scan"
              ? "bg-background text-foreground shadow-sm"
              : "text-muted-foreground hover:text-foreground",
          )}
        >
          <QrCode className="size-4" />
          Scan QR
        </button>
        <button
          onClick={() => setMode("select")}
          className={cn(
            "flex-1 flex items-center justify-center gap-2 py-2 text-sm font-medium transition-all rounded-lg",
            mode === "select"
              ? "bg-background text-foreground shadow-sm"
              : "text-muted-foreground hover:text-foreground",
          )}
        >
          <Monitor className="size-4" />
          Select Machine
        </button>
      </nav>

      {/* Dynamic Content Area */}
      <section className="space-y-6">
        {mode === "scan" ? (
          <Card className="border-dashed bg-muted/30">
            <CardContent className="flex flex-col items-center justify-center py-12 text-center gap-4">
              <div className="flex size-12 items-center justify-center rounded-full bg-background border">
                <Camera className="size-6 text-muted-foreground" />
              </div>
              <div className="space-y-1">
                <p className="text-sm font-medium leading-none">
                  Camera Access Required
                </p>
                <p className="text-xs text-muted-foreground">
                  Scanner permission needed for machine detection.
                </p>
              </div>
              <Button
                size="sm"
                variant="outline"
                className="rounded-lg h-9 px-6"
                onClick={() => {
                  /* Simulation Only: No state change to selectedMachine */
                  console.log("Permission requested...");
                }}
              >
                Grant Permission
              </Button>
            </CardContent>
          </Card>
        ) : (
          <div className="flex flex-col gap-2">
            <Label className="text-[10px] uppercase font-bold tracking-wider text-muted-foreground ml-1">
              Machine List
            </Label>
            <Select onValueChange={setSelectedMachine}>
              <SelectTrigger className="h-12 rounded-xl  ring-emerald-500/10">
                <SelectValue placeholder="Pick machine from list..." />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="BagPlant Machine A1">
                  BagPlant Machine A1
                </SelectItem>
                <SelectItem value="BagPlant Machine B2">
                  BagPlant Machine B2
                </SelectItem>
                <SelectItem value="BagPlant Machine C3">
                  BagPlant Machine C3
                </SelectItem>
              </SelectContent>
            </Select>
          </div>
        )}

        {/* Reading Form - Only visible once machine is identified via Select */}
        {selectedMachine && (
          <div className="animate-in fade-in slide-in-from-top-2 duration-300">
            <Card className="overflow-hidden border-none ring-1 ring-zinc-200 bg-white shadow-sm">
              <CardContent className="flex flex-col gap-6 p-3">
                {/* Updated Header with Timestamp on New Line */}
                <div className="flex flex-col gap-1 pb-3 border-b border-zinc-100">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="size-4 text-emerald-600" />
                    <span className="text-xs font-bold uppercase tracking-widest text-zinc-800">
                      {selectedMachine}
                    </span>
                  </div>
                  <p className="text-[10px] text-zinc-500 font-medium">
                    Last Logged: 22-04-2026 02:54 PM
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label
                      htmlFor="r1"
                      className="text-[10px] uppercase font-bold text-zinc-400"
                    >
                      Value 01
                    </Label>
                    <Input
                      id="r1"
                      type="number"
                      placeholder="0.00"
                      className="bg-zinc-50/50 h-10 rounded-lg border-zinc-200 focus-visible:ring-zinc-400"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label
                      htmlFor="r2"
                      className="text-[10px] uppercase font-bold text-zinc-400"
                    >
                      Value 02
                    </Label>
                    <Input
                      id="r2"
                      type="number"
                      placeholder="0.00"
                      className="bg-zinc-50/50 h-10 rounded-lg border-zinc-200 focus-visible:ring-zinc-400"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label
                    htmlFor="notes"
                    className="text-[10px] uppercase font-bold text-zinc-400"
                  >
                    Operator Observations
                  </Label>
                  <Input
                    id="notes"
                    placeholder="operator notes (optional)"
                    className="bg-zinc-50/50 h-10 rounded-lg border-zinc-200 focus-visible:ring-zinc-400"
                  />
                </div>

                {/* Button Stack */}
                <div className="flex flex-col gap-2 pt-2">
                  <Button
                    variant="outline"
                    className="w-full h-11 border-zinc-200 text-zinc-600 hover:bg-zinc-50 rounded-xl font-medium text-sm"
                  >
                    Machine Log History
                  </Button>
                  <Button className="w-full h-11 bg-zinc-900 hover:bg-zinc-800 text-white rounded-xl gap-2 font-semibold transition-transform active:scale-[0.98]">
                    Submit Reading <ArrowRight className="size-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        )}
      </section>
    </div>
  );
};

export default GetReading;
