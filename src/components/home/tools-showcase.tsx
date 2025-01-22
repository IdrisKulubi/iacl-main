import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  LayoutDashboard,
  FileText,
  Users,
  Calendar,
  Settings,
  Database,
} from "lucide-react";

const tools = [
  {
    icon: <LayoutDashboard className="h-6 w-6" />,
    title: "Dashboard",
    description: "Access your personalized overview and key metrics",
  },
  {
    icon: <FileText className="h-6 w-6" />,
    title: "Documents",
    description: "Manage and access company documents and resources",
  },
  {
    icon: <Users className="h-6 w-6" />,
    title: "Team Management",
    description: "Organize teams and manage permissions",
  },
  {
    icon: <Calendar className="h-6 w-6" />,
    title: "Calendar",
    description: "Schedule and manage company events and meetings",
  },
  {
    icon: <Database className="h-6 w-6" />,
    title: "Data Tools",
    description: "Access data analysis and reporting tools",
  },
  {
    icon: <Settings className="h-6 w-6" />,
    title: "Settings",
    description: "Configure your workspace and preferences",
  },
];

export function ToolsShowcase() {
  return (
    <section className="container py-20">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {tools.map((tool, index) => (
          <Card key={index} className="transition-all hover:shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                {tool.icon}
                <span>{tool.title}</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">{tool.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
