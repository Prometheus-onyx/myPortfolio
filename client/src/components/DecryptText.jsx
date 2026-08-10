import { useEffect, useState } from "react";

const characters =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*";

export default function DecryptText({ text, duration = 2000, className = "" }) {
  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    let frame;
    const startTime = performance.now();

    const animate = (currentTime) => {
      const progress = Math.min((currentTime - startTime) / duration, 1);

      const revealedCount = Math.floor(text.length * progress);

      const nextText = text
        .split("")
        .map((character, index) => {
          if (character === " ") return " ";

          if (index < revealedCount) {
            return character;
          }

          return characters[Math.floor(Math.random() * characters.length)];
        })
        .join("");

      setDisplayText(nextText);

      if (progress < 1) {
        frame = requestAnimationFrame(animate);
      }
    };

    frame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(frame);
  }, [text, duration]);

  return <span className={className}>{displayText}</span>;
}
