import { createContext, useState } from "react";

export const CheckboxContext = createContext(null);
export function CheckboxProvider({ children }) {
  const [isEasyMode, setIsEasyMode] = useState(false);

  return <CheckboxContext.Provider value={{ isEasyMode, setIsEasyMode }}>{children}</CheckboxContext.Provider>;
}
