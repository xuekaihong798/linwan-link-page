import type { SVGProps } from "react";
import { Instagram, Mail } from "lucide-react";
import type { SocialId } from "@/data/profile";

type Props = SVGProps<SVGSVGElement>;

function IconShell({ children, ...props }: Props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.75}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      {children}
    </svg>
  );
}

function IconXiaohongshu(props: Props) {
  return (
    <IconShell {...props}>
      <rect x="5.5" y="3.5" width="13" height="17" rx="2.25" />
      <path d="M9 8.25h6M9 12h6M9 15.75h3.5" />
    </IconShell>
  );
}

function IconX(props: Props) {
  return (
    <IconShell {...props}>
      <path d="M6.5 6.5 17.5 17.5M17.5 6.5 6.5 17.5" />
    </IconShell>
  );
}

function IconWeibo(props: Props) {
  return (
    <IconShell {...props}>
      <path d="M16.2 5.4a3.4 3.4 0 0 1 2.5 2.4" />
      <ellipse cx="11" cy="14.2" rx="6.3" ry="4.5" />
      <circle cx="13.3" cy="13.7" r="1.15" fill="currentColor" stroke="none" />
    </IconShell>
  );
}

function IconBilibili(props: Props) {
  return (
    <IconShell {...props}>
      <path d="M8.5 6.5 6.8 4.6M15.5 6.5l1.7-1.9" />
      <rect x="3.75" y="6.5" width="16.5" height="12.25" rx="2.4" />
      <circle cx="9" cy="12" r="1" fill="currentColor" stroke="none" />
      <circle cx="15" cy="12" r="1" fill="currentColor" stroke="none" />
      <path d="M9.2 15.1c.8.7 1.7 1 2.8 1s2-.3 2.8-1" />
    </IconShell>
  );
}

function IconInstagram(props: Props) {
  return <Instagram aria-hidden="true" strokeWidth={1.75} {...props} />;
}

function IconMail(props: Props) {
  return <Mail aria-hidden="true" strokeWidth={1.75} {...props} />;
}

const icons = {
  xiaohongshu: IconXiaohongshu,
  instagram: IconInstagram,
  x: IconX,
  weibo: IconWeibo,
  bilibili: IconBilibili,
  mail: IconMail,
} as const;

export function SocialIcon({ id, className }: { id: SocialId; className?: string }) {
  const Icon = icons[id];
  return <Icon className={className} />;
}
