import React from "react";
import { useLocalStorage } from "./useLocalStorage";

export const usePinkMode = () => {
  const [newValue, setValue] = useLocalStorage("pink-mode");

  React.useEffect(() => {
    const body = window.document.body;
    if (newValue) {
      body.classList.add("pink-mode");
    } else {
      body.classList.remove("pink-mode");
    }
  }, [newValue]);

  return [newValue, setValue];
};