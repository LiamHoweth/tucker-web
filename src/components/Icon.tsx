export type IconName =
  | 'calendar'
  | 'check'
  | 'close'
  | 'dollar'
  | 'leaf'
  | 'location'
  | 'menu'
  | 'message'
  | 'mower'
  | 'phone'
  | 'quote'
  | 'shield'
  | 'spark'
  | 'star'
  | 'trimmer';

type IconProps = {
  name: IconName;
  className?: string;
};

export function Icon({ name, className }: IconProps) {
  const sharedProps = {
    className,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 1.8,
    strokeLinecap: 'round' as const,
    strokeLinejoin: 'round' as const,
    'aria-hidden': true,
  };

  switch (name) {
    case 'calendar':
      return (
        <svg {...sharedProps}>
          <rect x="3.5" y="5" width="17" height="15" rx="3" />
          <path d="M7.5 3.5v3M16.5 3.5v3M3.5 9.5h17M8.5 13h3M8.5 16h7" />
        </svg>
      );
    case 'check':
      return (
        <svg {...sharedProps}>
          <path d="m5 12.5 4.2 4L19 7.5" />
        </svg>
      );
    case 'close':
      return (
        <svg {...sharedProps}>
          <path d="M6 6 18 18M18 6 6 18" />
        </svg>
      );
    case 'dollar':
      return (
        <svg {...sharedProps}>
          <path d="M12 3v18M15.6 7.2c-.7-.9-2-1.7-3.7-1.7-2.3 0-3.9 1.1-3.9 3 0 1.8 1.4 2.6 4 3.2 2.7.6 4.6 1.4 4.6 3.8 0 2.1-1.8 3.5-4.5 3.5-2 0-3.6-.7-4.8-2" />
        </svg>
      );
    case 'leaf':
      return (
        <svg {...sharedProps}>
          <path d="M19.5 4.5c-6.8.6-11.7 4.4-13.3 11.5-.6 2.3.2 4 1.9 4 6.5 0 11.4-4.2 12.5-13.2.1-1.2-.2-2.4-1.1-2.3Z" />
          <path d="M7 17c3.5-3.5 6.6-5.7 10.5-7.5" />
        </svg>
      );
    case 'location':
      return (
        <svg {...sharedProps}>
          <path d="M12 20.5s6.5-5.7 6.5-11.2a6.5 6.5 0 1 0-13 0c0 5.5 6.5 11.2 6.5 11.2Z" />
          <circle cx="12" cy="9.5" r="2.4" />
        </svg>
      );
    case 'menu':
      return (
        <svg {...sharedProps}>
          <path d="M4 7h16M4 12h16M4 17h16" />
        </svg>
      );
    case 'message':
      return (
        <svg {...sharedProps}>
          <path d="M5.5 6.5h13a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2h-8l-4.5 3v-3h-.5a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2Z" />
        </svg>
      );
    case 'mower':
      return (
        <svg {...sharedProps}>
          <path d="M6 15.5h7.5c1.8 0 3.2 1.4 3.2 3.2v1.8M8.5 15.5 7 10.5h4l2.3 5M11 10.5l1.2-2.5h3.3" />
          <circle cx="6.5" cy="18" r="2" />
          <circle cx="17.5" cy="18" r="2" />
        </svg>
      );
    case 'phone':
      return (
        <svg {...sharedProps}>
          <path d="M7.1 4.8h3l1.3 3.6-1.8 1.7c1.1 2.1 2.8 3.8 4.9 4.9l1.7-1.8 3.6 1.3v3c0 1-.8 1.8-1.8 1.8C9.7 20.3 3.7 14.3 3.7 6.6c0-1 .8-1.8 1.8-1.8Z" />
        </svg>
      );
    case 'quote':
      return (
        <svg {...sharedProps}>
          <path d="M7 8.5A2.5 2.5 0 0 0 4.5 11v2A2.5 2.5 0 0 0 7 15.5h1.5v-2H7v-1c0-.6.4-1 1-1h.5v-3H7Zm8 0a2.5 2.5 0 0 0-2.5 2.5v2a2.5 2.5 0 0 0 2.5 2.5h1.5v-2H15v-1c0-.6.4-1 1-1h.5v-3H15Z" />
        </svg>
      );
    case 'shield':
      return (
        <svg {...sharedProps}>
          <path d="M12 3.7 18.5 6v5.4c0 4.2-2.4 7-6.5 8.9-4.1-1.9-6.5-4.7-6.5-8.9V6L12 3.7Z" />
          <path d="m9.1 12.2 1.9 1.9 4-4.2" />
        </svg>
      );
    case 'spark':
      return (
        <svg {...sharedProps}>
          <path d="M12 3.5 13.9 8l4.6 1.9-4.6 1.9-1.9 4.7-1.9-4.7L5.5 9.9 10.1 8 12 3.5Z" />
          <path d="M18.5 15.5 19.4 17.8 21.7 18.7 19.4 19.6 18.5 22 17.6 19.6 15.3 18.7 17.6 17.8 18.5 15.5Z" />
        </svg>
      );
    case 'star':
      return (
        <svg {...sharedProps}>
          <path d="m12 4 2.2 4.5 5 .7-3.6 3.6.9 5.2L12 15.7 7.5 18l.9-5.2-3.6-3.6 5-.7L12 4Z" />
        </svg>
      );
    case 'trimmer':
      return (
        <svg {...sharedProps}>
          <path d="M8 6.5h6.5l-2.3 2.3 1.6 1.6-5.5 5.5a2.1 2.1 0 0 1-3 0 2.1 2.1 0 0 1 0-3L10.8 7.4M14.5 6.5 19 11M17.4 13.6l2.6 2.6M4.8 19.2 2.5 21.5M7.6 22 5 19.4" />
        </svg>
      );
    default:
      return null;
  }
}
