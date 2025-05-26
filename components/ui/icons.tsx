// components/ui/icons.tsx
import {
  ArrowRight,
  Download,
  Github,
  Linkedin,
  Mail,
  Circle,
  type LucideProps,
} from "lucide-react";

export const Icons = {
  // Icône logo utilisée par exemple dans un avatar ou section principale
  logo: (props: LucideProps) => <Circle {...props} />,

  // Icônes diverses réutilisables
  arrowRight: (props: LucideProps) => <ArrowRight {...props} />,
  download: (props: LucideProps) => <Download {...props} />,
  github: (props: LucideProps) => <Github {...props} />,
  linkedin: (props: LucideProps) => <Linkedin {...props} />,
  mail: (props: LucideProps) => <Mail {...props} />,
};
