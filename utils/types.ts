export interface CommandItemProps {
  text: string;
  command: Array<{ key: string } | string>;
  icon: string;
  parent?: string;
  onSelect?: () => void;
}

export interface IconProps {
  name: string;
  className?: string;
}
