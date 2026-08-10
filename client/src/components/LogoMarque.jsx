"use client";

import React from "react";
import {
    SiDocker,
    SiFastapi,
    SiFlask,
    SiNodedotjs,
    SiPostgresql,
    SiTailwindcss,
    SiReact,
    SiDjango,
    SiPython,
    SiTensorflow,
    SiPytorch,
} from "react-icons/si";

const logos1 = [
  {
    id: 1,
    component: <SiReact />,
  },
  {
    id: 2,
    component: <SiFastapi />,
  },
  {
    id: 3,
    component: <SiDjango />,
  },
  {
    id: 4,
    component: <SiNodedotjs />,
  },
  {
    id: 5,
    component: <SiPython />,
  },
  {
    id: 6,
    component: <SiTensorflow />,
  },
  {
    id: 7,
    component: <SiPytorch />,
  },
  {
    id: 8,
    component: <SiDocker />,
  },
  {
    id: 9,
    component: <SiPostgresql />,
  },
  {
    id: 10,
    component: <SiTailwindcss />,
  },
];
const logos2 = [
  {
    id: 1,
    component: <SiReact />,
  },
  {
    id: 2,
    component: <SiFastapi />,
  },
  {
    id: 3,
    component: <SiDjango />,
  },
  {
    id: 4,
    component: <SiNodedotjs />,
  },
  {
    id: 5,
    component: <SiPython />,
  },
  {
    id: 6,
    component: <SiTensorflow />,
  },
  {
    id: 7,
    component: <SiPytorch />,
  },
  {
    id: 8,
    component: <SiDocker />,
  },
  {
    id: 9,
    component: <SiPostgresql />,
  },
  {
    id: 10,
    component: <SiTailwindcss />,
  },
];
function Logomarquee() {
  React.useEffect(() => {
    const styleSheet = document.createElement("style");
    styleSheet.innerText = `
      @keyframes marquee-move {
        to {
          transform: translateX(calc(-100cqw - var(--item-gap)));
        }
      }
    `;
    document.head.appendChild(styleSheet);
    return () => {
      document.head.removeChild(styleSheet);
    };
  }, []);
  const Marquee = ({ logos, direction = "forwards" }) => {
    const numItems = logos.length;
    const speed = "25s";
    const itemWidth = "120px";
    const itemGap = "25px";
    return (
      <div
        className="max-w-full overflow-hidden"
        style={{
          "--speed": speed,
          "--numItems": numItems,
          "--item-width": itemWidth,
          "--item-gap": itemGap,
          "--direction": direction,
          maskImage:
            "linear-gradient(to right, transparent, black 2rem, black calc(100% - 2rem), transparent)",
        }}
      >
        <div
          className="w-max flex"
          style={{
            "--track-width": `calc(var(--item-width) * ${numItems})`,
            "--track-gap": `calc(var(--item-gap) * ${numItems})`,
          }}
        >
          {[...logos, ...logos].map((logo, index) => (
            <div
              key={index}
              className="flex-shrink-0 flex justify-center items-center bg-white/10 border border-black rounded-2xl text-white"
              style={{
                width: "var(--item-width)",
                aspectRatio: "1 / 1.2",
                marginRight: "var(--item-gap)",
                animation: `marquee-move var(--speed) linear infinite ${direction}`,
              }}
            >
              <div className="w-3/5 h-3/5 flex items-center justify-center">
                {React.isValidElement(logo.component)
                  ? React.cloneElement(logo.component, {
                      className: "w-full h-full",
                    })
                  : logo.component}
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };
  return (
    <div className="items-center overflow-hidden">
      <div className="w-full max-w-6xl flex flex-col gap-y-6">
        <Marquee logos={logos1} />
        <Marquee logos={logos2} direction="reverse" />
      </div>
    </div>
  );
}
export default Logomarquee;
