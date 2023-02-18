export interface CommandItemProps {
  item: {
    text: string;
    command: Array<{ key: string } | string>;
    icon: string;
  };
}

export interface IconProps {
  name: string;
  className?: string;
}
