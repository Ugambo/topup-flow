import { useState } from "react";
import { Smartphone, Zap, Tv, Wifi, ArrowRight, CheckCircle2 } from "lucide-react";
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
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { toast } from "sonner";

type ServiceType = "airtime" | "data" | "electricity" | "tv";

export function RechargeForm() {
  const [service, setService] = useState<ServiceType>("airtime");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [amount, setAmount] = useState("");
  const [network, setNetwork] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!phoneNumber || !amount || (service !== "electricity" && !network)) {
      toast.error("Please fill in all required fields");
      return;
    }

    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      setIsSuccess(true);
      toast.success("Transaction initiated successfully!");
    }, 2000);
  };

  const handleReset = () => {
    setPhoneNumber("");
    setAmount("");
    setNetwork("");
    setIsSuccess(false);
  };

  if (isSuccess) {
    return (
      <Card className="w-full max-w-md mx-auto animate-in fade-in zoom-in duration-300">
        <CardContent className="pt-10 pb-10 text-center">
          <div className="mb-6 flex justify-center">
            <div className="h-16 w-16 rounded-full bg-green-100 flex items-center justify-center">
              <CheckCircle2 className="h-10 w-10 text-green-600" />
            </div>
          </div>
          <h2 className="text-2xl font-bold mb-2">Success!</h2>
          <p className="text-muted-foreground mb-8 text-sm">
            Your {service} recharge of ₦{amount} for {phoneNumber} has been processed successfully.
          </p>
          <Button onClick={handleReset} className="w-full">
            Perform Another Recharge
          </Button>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader className="pb-4">
        <div className="flex justify-between items-center mb-2">
          <CardTitle className="text-xl">Quick Recharge</CardTitle>
          <div className="flex gap-2">
            <button
              onClick={() => setService("airtime")}
              className={`p-2 rounded-md transition-colors ${service === "airtime" ? "bg-primary text-primary-foreground" : "bg-muted hover:bg-muted/80"}`}
              title="Airtime"
            >
              <Smartphone className="h-4 w-4" />
            </button>
            <button
              onClick={() => setService("data")}
              className={`p-2 rounded-md transition-colors ${service === "data" ? "bg-primary text-primary-foreground" : "bg-muted hover:bg-muted/80"}`}
              title="Data Bundle"
            >
              <Wifi className="h-4 w-4" />
            </button>
            <button
              onClick={() => setService("electricity")}
              className={`p-2 rounded-md transition-colors ${service === "electricity" ? "bg-primary text-primary-foreground" : "bg-muted hover:bg-muted/80"}`}
              title="Electricity"
            >
              <Zap className="h-4 w-4" />
            </button>
            <button
              onClick={() => setService("tv")}
              className={`p-2 rounded-md transition-colors ${service === "tv" ? "bg-primary text-primary-foreground" : "bg-muted hover:bg-muted/80"}`}
              title="Cable TV"
            >
              <Tv className="h-4 w-4" />
            </button>
          </div>
        </div>
        <CardDescription>
          Instantly recharge your services with a few clicks.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          {service !== "electricity" && (
            <div className="space-y-2">
              <Label htmlFor="network">Select Provider</Label>
              <Select onValueChange={setNetwork} value={network}>
                <SelectTrigger id="network">
                  <SelectValue placeholder="Choose provider" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="mtn">MTN</SelectItem>
                  <SelectItem value="airtel">Airtel</SelectItem>
                  <SelectItem value="glo">Glo</SelectItem>
                  <SelectItem value="9mobile">9mobile</SelectItem>
                </SelectContent>
              </Select>
            </div>
          )}

          {service === "electricity" && (
            <div className="space-y-2">
              <Label htmlFor="disco">Select DisCo</Label>
              <Select onValueChange={setNetwork} value={network}>
                <SelectTrigger id="disco">
                  <SelectValue placeholder="Choose DisCo" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="ikeja">Ikeja Electric</SelectItem>
                  <SelectItem value="eko">Eko Electric</SelectItem>
                  <SelectItem value="kano">Kano Electric</SelectItem>
                  <SelectItem value="ph">Port Harcourt Electric</SelectItem>
                </SelectContent>
              </Select>
            </div>
          )}

          <div className="space-y-2">
            <Label htmlFor="phone">
              {service === "electricity" ? "Meter Number" : "Phone Number"}
            </Label>
            <div className="relative">
              <Input
                id="phone"
                placeholder={service === "electricity" ? "Enter meter number" : "e.g. 08123456789"}
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                className="pl-3"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="amount">Amount (₦)</Label>
            <Input
              id="amount"
              type="number"
              placeholder="e.g. 1000"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
            />
          </div>

          <Button type="submit" className="w-full gap-2" disabled={isLoading}>
            {isLoading ? "Processing..." : `Recharge ${service.charAt(0).toUpperCase() + service.slice(1)}`}
            {!isLoading && <ArrowRight className="h-4 w-4" />}
          </Button>

          <p className="text-[10px] text-center text-muted-foreground mt-4">
            By clicking recharge, you agree to our Terms and Conditions.
          </p>
        </form>
      </CardContent>
    </Card>
  );
}