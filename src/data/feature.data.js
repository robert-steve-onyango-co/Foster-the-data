import { Users } from "lucide-react";
import { Layers } from "lucide-react";
import { Star } from "lucide-react";
import { Shield } from "lucide-react";
import { BarChart } from "lucide-react";
import { Zap } from "lucide-react";

const features = [
  {
    title: "Managed Hosting",
    description:
      "High-performance web hosting with predictable latency and low operational overhead.",
    icon: <Layers className="size-5" />,
  },
  {
    title: "Managed Databases",
    description:
      "Managed SQL and NoSQL databases tuned for low-latency queries and high availability.",
    icon: <BarChart className="size-5" />,
  },
  {
    title: "Storage & Backups",
    description:
      "Durable, cost-efficient storage with lifecycle and backup policies for production data.",
    icon: <Users className="size-5" />,
  },
  {
    title: "Integrations & API",
    description:
      "Connect data sources and automate pipelines with our developer-first APIs.",
    icon: <Zap className="size-5" />,
  },
  {
    title: "Enterprise Security",
    description:
      "Role-based access, encryption, and compliance controls for peace of mind.",
    icon: <Shield className="size-5" />,
  },
  {
    title: "Dedicated Support",
    description:
      "Onboarding, SLA-backed support, and professional services to scale.",
    icon: <Star className="size-5" />,
  },
];

export default features;
