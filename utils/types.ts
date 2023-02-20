export type SwipeDirection = "left" | "right" | "up" | "down";

export type Position =
  | "top-left"
  | "top-right"
  | "bottom-left"
  | "bottom-right"
  | "top"
  | "bottom";

export type CommandAction = {
  type: ActionType;
  payload?: any;
};

export enum ActionType {
  SET_SEARCH = "SET_SEARCH",
  SET_PAGES = "SET_PAGES",
  SET_TOAST = "SET_TOAST",
  SET_TOAST_VISIBLE = "SET_TOAST_VISIBLE",
  SET_SEQUENCE = "SET_SEQUENCE",
}

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

export interface ToastProps {
  position?: Position;
  duration?: number;
  title?: React.ReactNode;
  description?: React.ReactNode;
  textOnly?: boolean;
  open?: boolean;
  setOpen?: (open: boolean) => void;
}

export interface CommandStateType {
  search: string;
  pages: string[];
  toast: string;
  toastVisible: boolean;
  sequence: string;
  setSearch: (search: string) => void;
  setPages: (pages: string[]) => void;
  setToast: (toast: string) => void;
  setToastVisible: (toastVisible: boolean) => void;
  setSequence: (sequence: string) => void;
}
