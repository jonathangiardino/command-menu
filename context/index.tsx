import { useReducer, createContext, FC, ReactNode } from "react";
import { ActionType, CommandAction, CommandStateType } from "@/utils/types";

const initialState: CommandStateType = {
  search: "",
  pages: [],
  toast: "",
  toastVisible: false,
  sequence: "",
  setSearch: () => {},
  setPages: () => {},
  setToast: () => {},
  setToastVisible: () => {},
  setSequence: () => {},
};

const CommandContext = createContext<CommandStateType>(initialState);

function reducer(
  state: CommandStateType,
  action: CommandAction
): CommandStateType {
  switch (action.type) {
    case "SET_SEARCH":
      return {
        ...state,
        search: action.payload,
      };

    case "SET_PAGES":
      return {
        ...state,
        pages: action.payload,
      };

    case "SET_TOAST":
      return {
        ...state,
        toast: action.payload,
      };

    case "SET_TOAST_VISIBLE":
      return {
        ...state,
        toastVisible: !state.toastVisible,
      };

    case "SET_SEQUENCE":
      return {
        ...state,
        sequence: state?.sequence
          ? state.sequence + action.payload
          : action.payload,
      };

    default:
      throw new Error();
  }
}

const CommandProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const value = {
    search: state.search,
    pages: state.pages,
    toast: state.toast,
    toastVisible: state.toastVisible,
    sequence: state.sequence,
    setSearch: (search: string) =>
      dispatch({ type: ActionType.SET_SEARCH, payload: search }),
    setPages: (pages: string[]) =>
      dispatch({ type: ActionType.SET_PAGES, payload: pages }),
    setToast: (toast: string) =>
      dispatch({ type: ActionType.SET_TOAST, payload: toast }),
    setToastVisible: () => dispatch({ type: ActionType.SET_TOAST_VISIBLE }),
    setSequence: (sequence: string) =>
      dispatch({ type: ActionType.SET_SEQUENCE, payload: sequence }),
  };

  return (
    <CommandContext.Provider value={value}>{children}</CommandContext.Provider>
  );
};

export { CommandProvider, CommandContext };
