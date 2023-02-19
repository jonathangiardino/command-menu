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

export type SwipeDirection = "left" | "right" | "up" | "down";

export type Position =
  | "top-left"
  | "top-right"
  | "bottom-left"
  | "bottom-right"
  | "top"
  | "bottom";
export interface ToastProps {
  position?: Position;
  duration?: number;
  title?: React.ReactNode;
  description?: React.ReactNode;
  textOnly?: boolean;
  open?: boolean;
  setOpen?: React.Dispatch<React.SetStateAction<boolean>>;
}
