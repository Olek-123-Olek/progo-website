import { type ReactNode, type SVGProps } from "react";

type IconName =
  | "portals"
  | "status"
  | "documents"
  | "chat"
  | "excel"
  | "payment"
  | "map"
  | "plan"
  | "driver"
  | "docs"
  | "messages"
  | "accounting"
  | "sos"
  | "collab"
  | "fleet"
  | "monitor"
  | "arrow"
  | "facebook"
  | "tiktok"
  | "instagram"
  | "email"
  | "platform"
  | "logo"
  | "spark"
  | "check";

interface IconProps extends SVGProps<SVGSVGElement> {
  name: IconName;
  size?: number;
}

export function Icon({ name, size = 24, className = "", ...props }: IconProps) {
  const s = size;

  const icons: Record<IconName, ReactNode> = {
    logo: (
      <>
        <path
          d="M4 18L12 6L20 18"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
        <path
          d="M8 14H16"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </>
    ),
    arrow: (
      <path
        d="M5 12H19M19 12L13 6M19 12L13 18"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    ),
    portals: (
      <>
        <rect x="3" y="3" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="1.5" fill="none" />
        <rect x="14" y="3" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="1.5" fill="none" />
        <rect x="3" y="14" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="1.5" fill="none" />
        <rect x="14" y="14" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="1.5" fill="none" />
      </>
    ),
    status: (
      <>
        <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5" fill="none" />
        <path d="M12 7V12L15 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" fill="none" />
      </>
    ),
    documents: (
      <>
        <path d="M8 4H16L20 8V20H8V4Z" stroke="currentColor" strokeWidth="1.5" fill="none" />
        <path d="M16 4V8H20" stroke="currentColor" strokeWidth="1.5" fill="none" />
        <path d="M11 13H17M11 17H15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </>
    ),
    chat: (
      <>
        <path d="M4 6H20V16H8L4 20V6Z" stroke="currentColor" strokeWidth="1.5" fill="none" />
        <path d="M8 10H16M8 13H13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </>
    ),
    excel: (
      <>
        <rect x="4" y="4" width="16" height="16" rx="2" stroke="currentColor" strokeWidth="1.5" fill="none" />
        <path d="M4 10H20M4 14H20M10 4V20M14 4V20" stroke="currentColor" strokeWidth="1.5" />
      </>
    ),
    payment: (
      <>
        <rect x="3" y="6" width="18" height="12" rx="2" stroke="currentColor" strokeWidth="1.5" fill="none" />
        <path d="M3 10H21" stroke="currentColor" strokeWidth="1.5" />
        <path d="M7 15H11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </>
    ),
    map: (
      <>
        <path d="M3 8L9 5L15 8L21 5V19L15 16L9 19L3 16V8Z" stroke="currentColor" strokeWidth="1.5" fill="none" />
        <circle cx="12" cy="11" r="2" fill="currentColor" />
      </>
    ),
    plan: (
      <>
        <rect x="4" y="4" width="16" height="16" rx="2" stroke="currentColor" strokeWidth="1.5" fill="none" />
        <path d="M8 9H16M8 12H14M8 15H12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </>
    ),
    driver: (
      <>
        <circle cx="12" cy="8" r="3" stroke="currentColor" strokeWidth="1.5" fill="none" />
        <path d="M6 20C6 16 8.5 14 12 14C15.5 14 18 16 18 20" stroke="currentColor" strokeWidth="1.5" fill="none" />
        <path d="M16 6L19 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </>
    ),
    docs: (
      <>
        <path d="M6 4H14L18 8V20H6V4Z" stroke="currentColor" strokeWidth="1.5" fill="none" />
        <path d="M14 4V8H18" stroke="currentColor" strokeWidth="1.5" fill="none" />
        <circle cx="12" cy="14" r="3" stroke="currentColor" strokeWidth="1.5" fill="none" />
      </>
    ),
    messages: (
      <>
        <path d="M5 5H19V15H10L5 19V5Z" stroke="currentColor" strokeWidth="1.5" fill="none" />
        <path d="M9 9H15M9 12H13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </>
    ),
    accounting: (
      <>
        <path d="M4 18V8L12 4L20 8V18L12 22L4 18Z" stroke="currentColor" strokeWidth="1.5" fill="none" />
        <path d="M12 12V22M8 10V16M16 10V16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </>
    ),
    sos: (
      <>
        <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5" fill="none" />
        <path d="M12 7V13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <circle cx="12" cy="16.5" r="0.5" fill="currentColor" />
      </>
    ),
    collab: (
      <>
        <circle cx="8" cy="10" r="3" stroke="currentColor" strokeWidth="1.5" fill="none" />
        <circle cx="16" cy="10" r="3" stroke="currentColor" strokeWidth="1.5" fill="none" />
        <path d="M5 18C5 15 6.5 14 8 14C9.5 14 11 15 11 18M13 18C13 15 14.5 14 16 14C17.5 14 19 15 19 18" stroke="currentColor" strokeWidth="1.5" fill="none" />
      </>
    ),
    fleet: (
      <>
        <rect x="2" y="8" width="14" height="10" rx="1" stroke="currentColor" strokeWidth="1.5" fill="none" />
        <path d="M16 11H20L22 14V18H16V11Z" stroke="currentColor" strokeWidth="1.5" fill="none" />
        <circle cx="7" cy="18" r="2" stroke="currentColor" strokeWidth="1.5" fill="none" />
        <circle cx="19" cy="18" r="2" stroke="currentColor" strokeWidth="1.5" fill="none" />
      </>
    ),
    monitor: (
      <>
        <rect x="3" y="5" width="18" height="12" rx="2" stroke="currentColor" strokeWidth="1.5" fill="none" />
        <path d="M8 21H16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M12 17V21" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="12" cy="11" r="2" fill="currentColor" className="animate-pulse-glow" />
      </>
    ),
    facebook: (
      <path
        d="M18 2H15C13.6739 2 12.4021 2.52678 11.4645 3.46447C10.5268 4.40215 10 5.67392 10 7V10H7V14H10V22H14V14H17L18 10H14V7C14 6.73478 14.1054 6.48043 14.2929 6.29289C14.4804 6.10536 14.7348 6 15 6H18V2Z"
        fill="currentColor"
      />
    ),
    tiktok: (
      <path
        d="M16.5 5.5C15.5 4.5 15 3.2 15 2H12V14.5C12 15.88 10.88 17 9.5 17C8.12 17 7 15.88 7 14.5C7 13.12 8.12 12 9.5 12C9.78 12 10.05 12.05 10.3 12.13V9.07C9.87 9.02 9.44 9 9 9C6.24 9 4 11.24 4 14C4 16.76 6.24 19 9 19C11.76 19 14 16.76 14 14V8.5C15.17 9.45 16.63 10 18.2 10V7C17.5 7 16.9 6.7 16.5 5.5Z"
        fill="currentColor"
      />
    ),
    instagram: (
      <>
        <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="1.5" fill="none" />
        <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.5" fill="none" />
        <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
      </>
    ),
    email: (
      <>
        <rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="1.5" fill="none" />
        <path d="M3 7L12 13L21 7" stroke="currentColor" strokeWidth="1.5" fill="none" />
      </>
    ),
    platform: (
      <>
        <rect x="3" y="3" width="18" height="18" rx="3" stroke="currentColor" strokeWidth="1.5" fill="none" />
        <path d="M8 12L11 15L16 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      </>
    ),
    spark: (
      <path
        d="M12 2L13.5 9.5L21 11L13.5 12.5L12 20L10.5 12.5L3 11L10.5 9.5L12 2Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
        fill="none"
      />
    ),
    check: (
      <path
        d="M5 12L10 17L19 7"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    ),
  };

  return (
    <svg
      width={s}
      height={s}
      viewBox="0 0 24 24"
      className={className}
      aria-hidden="true"
      {...props}
    >
      {icons[name]}
    </svg>
  );
}
