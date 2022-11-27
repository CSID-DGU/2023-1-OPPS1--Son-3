import { useState, useEffect } from "react";
const useDetectClose = (elem, initialState) => {
  const [isOpen, setIsOpen] = useState(initialState);

  useEffect(() => {
    const onClick = (e) => {
      if (isOpen !== false && elem.current.contains(e.target)) {
        setIsOpen(!isOpen);
      }
    };

    if (isOpen) {
      window.addEventListener("click", onClick);
    }
    return () => {
      window.removeEventListener("click", onClick);
    };
  }, [isOpen, elem]);
  return [isOpen, setIsOpen];
};

export default useDetectClose;
