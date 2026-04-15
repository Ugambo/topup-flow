import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

interface ServiceCardProps {
  title: string;
  description: string;
  iconUrl: string;
  onClick: () => void;
}

export function ServiceCard({ title, description, iconUrl, onClick }: ServiceCardProps) {
  return (
    <Card className="group relative overflow-hidden transition-all hover:shadow-lg hover:-translate-y-1 cursor-pointer" onClick={onClick}>
      <CardHeader className="flex flex-row items-center gap-4 pb-2">
        <div className="h-12 w-12 shrink-0 overflow-hidden rounded-lg bg-slate-100 p-2 group-hover:bg-primary/10 transition-colors">
          <img src={iconUrl} alt={title} className="h-full w-full object-contain" />
        </div>
        <div>
          <CardTitle className="text-lg">{title}</CardTitle>
          <CardDescription className="text-xs">{description}</CardDescription>
        </div>
      </CardHeader>
      <CardContent className="pt-2">
        <div className="flex items-center justify-end text-sm font-medium text-primary opacity-0 group-hover:opacity-100 transition-all transform translate-x-2 group-hover:translate-x-0">
          Get Started <ChevronRight className="ml-1 h-4 w-4" />
        </div>
      </CardContent>
    </Card>
  );
}