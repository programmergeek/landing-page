import React, { useState } from "react";

type Props = {
  children: React.ReactNode;
};

export const Header: React.FC<Props> = ({ ...props }) => {
  const [text, updateText] = useState(props.children?.toString() || "");
  const originalText = props.children?.toString() || "";
  const glitchEffect = () => {
    // create a list of letters and number for the glitch effect
    const letters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890";
    // create a variable to keep track of the iterations
    let iterations = 0;

    const interval = setInterval(() => {
      updateText(() =>
        text
          .split("")
          .map((letter, index) => {
            if (index < iterations) {
              return originalText[index];
            }
            const num = Math.floor(Math.random() * 62);
            return letters[num];
          })
          .join("")
      );
      if (iterations >= text.length) clearInterval(interval);
      iterations += 1 / 3;
    }, 35);
  };

  return (
    <h1
      className="font-bold text-3xl font-mono lg:text-5xl mb-2 md:mb-5 w-fit"
      onMouseOver={glitchEffect}
    >
      {text}
    </h1>
  );
};
