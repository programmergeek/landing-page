import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { IconButton, PrimaryButton, SecondaryButton } from "../Buttons";
import styles from "./ContactMe.module.css";
import { HiOutlineXCircle, HiOutlineMail } from "react-icons/hi";
import { FaGithubAlt, FaLinkedinIn } from "react-icons/fa";

export const ContactMe: React.FC = () => {
  const [text, updateText] = useState("Get in touch");
  const originalText = "Get in touch";
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
      if (iterations >= originalText.length) clearInterval(interval);
      iterations += 1 / 2;
    }, 35);
  };

  return (
    <section id="contact" className="min-h-screen grid place-content-center">
      <div className="w-fit flex flex-col gap-5">
        <h1
          className="text-6xl font-semibold text-center"
          onMouseOver={glitchEffect}
        >
          {text}
        </h1>
        <p className="text-center max-w-lg">
          Hey, thanks for reading all the way to end. I am looking for new
          opportunities, if you think that I would be a good match for your
          team, then leave a message. If you just want to say hi, then feel free
          to do so.
        </p>
        <div className="flex justify-center w-full">
          <button className="border-2 border-not-black bg-not-white text-xl py-3 px-4 lg:hover:-translate-y-1 transition ease-in-out duration-150">
            <a href="mailto:contact@willjoseph.xyz">Say Hi.</a>
          </button>
        </div>
      </div>
    </section>
  );
};
