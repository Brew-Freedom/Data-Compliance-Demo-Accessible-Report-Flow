import { useEffect, useState } from "react";

export function useTypingEffect(text, enabled = true, speed = 20) {
  const [displayed, setDisplayed] = useState("");

  useEffect(() => {
    if (!enabled) {
      setDisplayed(text);
      return;
    }

    let i = 0;
    const interval = setInterval(() => {
      setDisplayed(text.slice(0, i));
      i++;
      if (i > text.length) clearInterval(interval);
    }, speed);

    return () => clearInterval(interval);
  }, [text, enabled]);

  return displayed;
}
