import type { AnchorHTMLAttributes } from 'react';
import { Icon, type IconName } from './Icon';

type ActionLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  label: string;
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'md' | 'lg';
  icon?: IconName;
  mobileFull?: boolean;
};

export function ActionLink({
  label,
  variant = 'primary',
  size = 'md',
  icon,
  className = '',
  mobileFull = false,
  ...rest
}: ActionLinkProps) {
  const classes = [
    'action-link',
    `action-link--${variant}`,
    `action-link--${size}`,
    mobileFull ? 'action-link--mobile-full' : '',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <a className={classes} {...rest}>
      <span>{label}</span>
      {icon ? <Icon name={icon} className="action-link__icon" /> : null}
    </a>
  );
}
