import { useState, useEffect } from "react";

export function useTypewriter(lines, speed = 28, startDelay = 400) {
  const [output, setOutput] = useState([]);
  const [done, setDone] = useState(false);

  useEffect(() => {
    let cancelled = false;
    let timeouts = [];

    const run = async () => {
      await new Promise((r) => (timeouts.push(setTimeout(r, startDelay)), 0));
      for (let i = 0; i < lines.length; i++) {
        const full = lines[i];
        for (let c = 0; c <= full.length; c++) {
          if (cancelled) return;
          await new Promise((r) => timeouts.push(setTimeout(r, speed)));
          setOutput((prev) => {
            const next = [...prev];
            next[i] = full.slice(0, c);
            return next;
          });
        }
      }
      if (!cancelled) setDone(true);
    };
    run();
    return () => {
      cancelled = true;
      timeouts.forEach(clearTimeout);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { output, done };
}
