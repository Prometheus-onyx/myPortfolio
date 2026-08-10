function DynamicText({
  words = [],
  className = "inline-block",
  interval = 2500,
}) {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const t = setInterval(() => {
      setIndex((i) => (i + 1) % words.length);
    }, interval);
    return () => clearInterval(t);
  }, [words.length, interval]);

  const word = words[index] || "";

  return (
    <span className={className} aria-live="polite">
      <AnimatePresence mode="wait">
        <motion.span
          key={word}
          initial={{ opacity: 0, y: 6, scale: 0.98, ["--blur"]: "6px" }}
          animate={{ opacity: 1, y: 0, scale: 1, ["--blur"]: "0px" }}
          exit={{ opacity: 0, y: -6, scale: 0.98, ["--blur"]: "6px" }}
          transition={{ type: "spring", stiffness: 160, damping: 18 }}
          style={{
            display: "inline-block",
            filter: "blur(var(--blur))",
            willChange: "transform, opacity, filter",
          }}
        >
          {word}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}