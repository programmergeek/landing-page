import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { IconButton, PrimaryButton, SecondaryButton } from "../Buttons";
import styles from "./ContactMe.module.css";
import { HiOutlineXCircle, HiOutlineMail } from "react-icons/hi";
import { FaGithubAlt, FaLinkedinIn } from "react-icons/fa";

export const ContactMe: React.FC = () => {
  return (
    <section id="contact" className="min-h-screen grid place-content-center">
      <div className="w-fit flex flex-col gap-5">
        <h1 className="text-6xl font-semibold text-center">Get in touch</h1>
        <p className="text-center max-w-lg">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio
          molestias enim omnis ea mollitia temporibus blanditiis veritatis
          autem. Quae ducimus maiores consectetur harum ipsum dolores, ullam
          quaerat odio voluptatem impedit.
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
