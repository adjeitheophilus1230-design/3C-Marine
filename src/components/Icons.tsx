/**
 * 3C Marine Engineering — Icon Library
 * Professional stroke-based SVG icons for consistent use across the application.
 */

interface IconProps {
  size?: number;
  color?: string;
  className?: string;
  strokeWidth?: number;
}

const defaults = (props: IconProps) => ({
  width: props.size ?? 24,
  height: props.size ?? 24,
  stroke: props.color ?? "currentColor",
  fill: "none",
  strokeWidth: props.strokeWidth ?? 1.75,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  className: props.className,
});

// ─── SERVICE ICONS ─────────────────────────────────────────────────────────

export function AnchorIcon(p: IconProps) {
  const a = defaults(p);
  return (
    <svg {...a} viewBox="0 0 24 24">
      <circle cx="12" cy="5" r="2" />
      <line x1="12" y1="7" x2="12" y2="22" />
      <path d="M5 15H2a10 10 0 0 0 20 0h-3" />
      <path d="M5 9H2" />
      <path d="M22 9h-3" />
      <line x1="5" y1="9" x2="12" y2="9" />
      <line x1="19" y1="9" x2="12" y2="9" />
    </svg>
  );
}

export function OffshoreIcon(p: IconProps) {
  const a = defaults(p);
  return (
    <svg {...a} viewBox="0 0 24 24">
      <rect x="2" y="14" width="20" height="3" rx="1" />
      <rect x="6" y="10" width="12" height="4" />
      <rect x="9" y="5" width="6" height="5" />
      <line x1="12" y1="2" x2="12" y2="5" />
      <line x1="2" y1="17" x2="2" y2="22" />
      <line x1="22" y1="17" x2="22" y2="22" />
      <path d="M2 22 Q12 19 22 22" />
    </svg>
  );
}

export function FactoryIcon(p: IconProps) {
  const a = defaults(p);
  return (
    <svg {...a} viewBox="0 0 24 24">
      <path d="M2 20V10l6-4v4l6-4v4l6-4v14H2z" />
      <rect x="6" y="14" width="3" height="6" />
      <rect x="11" y="14" width="3" height="6" />
      <rect x="16" y="14" width="3" height="6" />
      <line x1="6" y1="10" x2="6" y2="10" />
      <path d="M4 4v4" />
      <path d="M8 2v6" />
    </svg>
  );
}

export function WrenchIcon(p: IconProps) {
  const a = defaults(p);
  return (
    <svg {...a} viewBox="0 0 24 24">
      <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
    </svg>
  );
}

export function CraneIcon(p: IconProps) {
  const a = defaults(p);
  return (
    <svg {...a} viewBox="0 0 24 24">
      <line x1="4" y1="22" x2="4" y2="4" />
      <line x1="4" y1="4" x2="20" y2="4" />
      <line x1="20" y1="4" x2="20" y2="10" />
      <line x1="4" y1="14" x2="20" y2="4" />
      <line x1="8" y1="4" x2="12" y2="14" />
      <path d="M18 10v8a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2v-2" />
    </svg>
  );
}

export function InspectionIcon(p: IconProps) {
  const a = defaults(p);
  return (
    <svg {...a} viewBox="0 0 24 24">
      <circle cx="11" cy="11" r="8" />
      <line x1="21" y1="21" x2="16.65" y2="16.65" />
      <line x1="11" y1="8" x2="11" y2="14" />
      <line x1="8" y1="11" x2="14" y2="11" />
    </svg>
  );
}

export function CogIcon(p: IconProps) {
  const a = defaults(p);
  return (
    <svg {...a} viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="3" />
      <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
    </svg>
  );
}

export function ClipboardIcon(p: IconProps) {
  const a = defaults(p);
  return (
    <svg {...a} viewBox="0 0 24 24">
      <path d="M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2" />
      <rect x="9" y="3" width="6" height="4" rx="2" />
      <line x1="9" y1="12" x2="15" y2="12" />
      <line x1="9" y1="16" x2="13" y2="16" />
    </svg>
  );
}

export function ShipIcon(p: IconProps) {
  const a = defaults(p);
  return (
    <svg {...a} viewBox="0 0 24 24">
      <path d="M2 20a2.4 2.4 0 0 0 2 1 2.4 2.4 0 0 0 2-1 2.4 2.4 0 0 1 2-1 2.4 2.4 0 0 1 2 1 2.4 2.4 0 0 0 2 1 2.4 2.4 0 0 0 2-1 2.4 2.4 0 0 1 2-1 2.4 2.4 0 0 1 2 1" />
      <path d="M4 18l-1-5h18l-1 5" />
      <path d="M8 13V7a4 4 0 0 1 8 0v6" />
      <path d="M11 7H8" />
      <path d="M11 10H8" />
    </svg>
  );
}

// ─── HSE / GENERAL ICONS ───────────────────────────────────────────────────

export function ShieldIcon(p: IconProps) {
  const a = defaults(p);
  return (
    <svg {...a} viewBox="0 0 24 24">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <polyline points="9 12 11 14 15 10" />
    </svg>
  );
}

export function LeafIcon(p: IconProps) {
  const a = defaults(p);
  return (
    <svg {...a} viewBox="0 0 24 24">
      <path d="M17 8C8 10 5.9 16.17 3.82 19.34L2 22l1-.25C4 21.5 7 21 9 22c0 0 9.17-3.6 11-10 .59-2.09.42-4.25-.44-6.12A8.37 8.37 0 0 0 17 4" />
      <path d="M17 8V4" />
    </svg>
  );
}

export function BadgeCheckIcon(p: IconProps) {
  const a = defaults(p);
  return (
    <svg {...a} viewBox="0 0 24 24">
      <path d="M12 2l2.4 4.8 5.6.8-4 3.9.9 5.5L12 14.5 7.1 17l.9-5.5L4 7.6l5.6-.8L12 2z" />
      <polyline points="9 12 11 14 15 10" />
    </svg>
  );
}

// ─── CAREERS / BENEFIT ICONS ────────────────────────────────────────────────

export function GlobeIcon(p: IconProps) {
  const a = defaults(p);
  return (
    <svg {...a} viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="10" />
      <line x1="2" y1="12" x2="22" y2="12" />
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    </svg>
  );
}

export function TrendingUpIcon(p: IconProps) {
  const a = defaults(p);
  return (
    <svg {...a} viewBox="0 0 24 24">
      <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
      <polyline points="17 6 23 6 23 12" />
    </svg>
  );
}

export function GraduationCapIcon(p: IconProps) {
  const a = defaults(p);
  return (
    <svg {...a} viewBox="0 0 24 24">
      <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
      <path d="M6 12v5c3 3 9 3 12 0v-5" />
    </svg>
  );
}

// ─── CONTACT / UI ICONS ─────────────────────────────────────────────────────

export function MapPinIcon(p: IconProps) {
  const a = defaults(p);
  return (
    <svg {...a} viewBox="0 0 24 24">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

export function PhoneIcon(p: IconProps) {
  const a = defaults(p);
  return (
    <svg {...a} viewBox="0 0 24 24">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.27h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.37a16 16 0 0 0 6.72 6.72l1.46-1.47a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

export function EnvelopeIcon(p: IconProps) {
  const a = defaults(p);
  return (
    <svg {...a} viewBox="0 0 24 24">
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
      <polyline points="22,6 12,13 2,6" />
    </svg>
  );
}

export function ChatIcon(p: IconProps) {
  const a = defaults(p);
  return (
    <svg {...a} viewBox="0 0 24 24">
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      <line x1="9" y1="10" x2="15" y2="10" />
      <line x1="9" y1="14" x2="13" y2="14" />
    </svg>
  );
}

export function ClockIcon(p: IconProps) {
  const a = defaults(p);
  return (
    <svg {...a} viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  );
}

export function TimerIcon(p: IconProps) {
  const a = defaults(p);
  return (
    <svg {...a} viewBox="0 0 24 24">
      <circle cx="12" cy="13" r="8" />
      <path d="M12 9v4l2 2" />
      <path d="M5 3 2 6" />
      <path d="M22 6l-3-3" />
      <path d="M6.38 18.7 4 21" />
      <path d="M17.64 18.67 20 21" />
    </svg>
  );
}

export function SearchIcon(p: IconProps) {
  const a = defaults(p);
  return (
    <svg {...a} viewBox="0 0 24 24">
      <circle cx="11" cy="11" r="8" />
      <line x1="21" y1="21" x2="16.65" y2="16.65" />
    </svg>
  );
}

export function ArrowRightIcon(p: IconProps) {
  const a = defaults(p);
  return (
    <svg {...a} viewBox="0 0 24 24">
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12 5 19 12 12 19" />
    </svg>
  );
}

export function CheckIcon(p: IconProps) {
  const a = defaults(p);
  return (
    <svg {...a} viewBox="0 0 24 24">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

export function ChevronRightIcon(p: IconProps) {
  const a = defaults(p);
  return (
    <svg {...a} viewBox="0 0 24 24">
      <polyline points="9 18 15 12 9 6" />
    </svg>
  );
}

export function UsersIcon(p: IconProps) {
  const a = defaults(p);
  return (
    <svg {...a} viewBox="0 0 24 24">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  );
}

export function BuildingIcon(p: IconProps) {
  const a = defaults(p);
  return (
    <svg {...a} viewBox="0 0 24 24">
      <rect x="2" y="3" width="20" height="18" rx="2" />
      <path d="M8 3v18" />
      <path d="M16 3v18" />
      <path d="M2 9h4" />
      <path d="M2 15h4" />
      <path d="M18 9h4" />
      <path d="M18 15h4" />
    </svg>
  );
}

export function UploadIcon(p: IconProps) {
  const a = defaults(p);
  return (
    <svg {...a} viewBox="0 0 24 24">
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <polyline points="17 8 12 3 7 8" />
      <line x1="12" y1="3" x2="12" y2="15" />
    </svg>
  );
}

export function AttachIcon(p: IconProps) {
  const a = defaults(p);
  return (
    <svg {...a} viewBox="0 0 24 24">
      <path d="M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48" />
    </svg>
  );
}

export function StarIcon(p: IconProps) {
  const a = defaults(p);
  return (
    <svg {...a} viewBox="0 0 24 24">
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  );
}

// ─── SERVICE ICON MAP ────────────────────────────────────────────────────────
// Maps string keys (from mock.ts) to icon components

export const SERVICE_ICONS: Record<string, (p: IconProps) => JSX.Element> = {
  anchor: AnchorIcon,
  offshore: OffshoreIcon,
  factory: FactoryIcon,
  wrench: WrenchIcon,
  crane: CraneIcon,
  search: InspectionIcon,
  cog: CogIcon,
  clipboard: ClipboardIcon,
  ship: ShipIcon,
};
