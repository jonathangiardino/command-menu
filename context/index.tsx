import { useReducer, createContext, ReactNode } from "react";
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
        sequence: action.payload,
      };

    default:
      throw new Error();
  }
}

const CommandProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { search, pages, toast, toastVisible, sequence } = state;
  const { SET_SEARCH, SET_PAGES, SET_TOAST, SET_TOAST_VISIBLE, SET_SEQUENCE } =
    ActionType;

  const value = {
    search,
    pages,
    toast,
    toastVisible,
    sequence,
    setSearch: (payload: string) => dispatch({ type: SET_SEARCH, payload }),
    setPages: (payload: string[]) => dispatch({ type: SET_PAGES, payload }),
    setToast: (payload: string) => dispatch({ type: SET_TOAST, payload }),
    setToastVisible: () => dispatch({ type: SET_TOAST_VISIBLE }),
    setSequence: (payload: string) => dispatch({ type: SET_SEQUENCE, payload }),
  };

  return (
    <CommandContext.Provider value={value}>{children}</CommandContext.Provider>
  );
};

export { CommandProvider, CommandContext };
