
import { Link } from "react-router-dom";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { LucideIcon } from "lucide-react";

interface ToolCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  href: string;
}

export function ToolCard({ title, description, icon: Icon, href }: ToolCardProps) {
  return (
    <Card className="overflow-hidden transition-all duration-300 hover:shadow-md hover:-translate-y-1">
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <CardTitle className="text-xl">{title}</CardTitle>
          <Icon className="h-6 w-6 text-brand-600" />
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground">{description}</p>
      </CardContent>
      <CardFooter>
        <Button asChild className="w-full bg-gradient-to-r from-brand-500 to-brand-700 hover:from-brand-600 hover:to-brand-800">
          <Link to={href}>Use Tool</Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
