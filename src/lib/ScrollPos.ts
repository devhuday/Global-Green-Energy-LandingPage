import { useState, useEffect } from "react";

export const useScrollPosition = (): number => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    // Agregamos el evento cuando el componente se monta
    window.addEventListener("scroll", handleScroll);

    // Ejecutamos una vez al inicio para tener el valor correcto si ya hay scroll
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return scrollPosition;
};