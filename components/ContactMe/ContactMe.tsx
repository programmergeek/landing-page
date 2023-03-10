import React from "react";

export const ContactMe: React.FC = () => {
  return (
    <section id="contact" className="min-h-screen grid place-content-center">
      <div className="w-fit flex flex-col gap-5">
        <h1 className="text-6xl font-semibold text-center">Get in touch</h1>
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
