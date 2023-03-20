import { createContext } from "react";

export const MyContext = createContext({
  contextValue: 0,
  setContextValue: () => {},
});
