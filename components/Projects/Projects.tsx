import React, { Children } from "react";
import { ProjectCard } from "../Cards/Cards";
import { Header } from "../Header";
import styles from "./Projects.module.css";

export const Projects: React.FC = () => {
  return (
    <section
      className="min-h-screen pt-5 md:pt-10 lg:pt-20 xl:pt-40"
      id="projects"
    >
      <Header>Projects</Header>
      <Project>
        <Project.Title>Project</Project.Title>
        <Project.Img src="https://picsum.photos/1920/1080" />
        <Project.Body>
          Morbi et aliquet elit. Aliquam ultricies blandit lectus, vitae posuere
          mi vestibulum nec. Vestibulum sit amet risus scelerisque sapien
          rhoncus molestie. Suspendisse ut quam nisi. Phasellus auctor, leo
          laoreet vestibulum facilisis, tellus ante fringilla velit, eget
          egestas sem nisi vitae mi. Maecenas nec mi sit amet velit dignissim
          lacinia vel nec mauris. Donec non interdum lacus.
        </Project.Body>
        <Project.Tags>
          <Project.Tag>HTML</Project.Tag>
          <Project.Tag>React</Project.Tag>
          <Project.Tag>TypeScript</Project.Tag>
          <Project.Tag>Tailwindcss</Project.Tag>
        </Project.Tags>
      </Project>
      <div className="h-0.5 w-full rounded-full my-3 md:my-0 lg:my-10"></div>
      <Project reversed>
        <Project.Title>Project</Project.Title>
        <Project.Img src="https://picsum.photos/1920/1080" />
        <Project.Body>
          Morbi et aliquet elit. Aliquam ultricies blandit lectus, vitae posuere
          mi vestibulum nec. Vestibulum sit amet risus scelerisque sapien
          rhoncus molestie. Suspendisse ut quam nisi. Phasellus auctor, leo
          laoreet vestibulum facilisis, tellus ante fringilla velit, eget
          egestas sem nisi vitae mi. Maecenas nec mi sit amet velit dignissim
          lacinia vel nec mauris. Donec non interdum lacus.
        </Project.Body>
        <Project.Tags>
          <Project.Tag>HTML</Project.Tag>
          <Project.Tag>React</Project.Tag>
          <Project.Tag>TypeScript</Project.Tag>
          <Project.Tag>Tailwindcss</Project.Tag>
        </Project.Tags>
      </Project>
    </section>
  );
};

type Props = {
  children: React.ReactNode;
  reversed?: boolean;
};

type ProjectSubComponents = {
  Title: typeof Title;
  Body: typeof Body;
  Tags: typeof Tags;
  Tag: typeof Tag;
  Img: typeof Img;
};

const Project: React.FunctionComponent<Props> & ProjectSubComponents = (
  props: Props
) => {
  const children = Children.map(props.children, (child) => {
    if (React.isValidElement(child)) {
      return React.cloneElement(child, { reversed: props.reversed } as any);
    }
  });
  return (
    <div className="grid grid-cols-12 md:grid-rows-[50px_minmax(0,_1fr)_100px] xl:grid-rows-3 gap-y-4 w-full">
      {children}
    </div>
  );
};

const Title = ({ ...props }: Props) => {
  const baseStyles =
    "row-start-1 row-span-1 col-span-3 text-3xl mt-auto font-semibold";
  const reversedStyles =
    "row-start-1 col-end-13 col-span-3 text-3xl mt-auto font-semibold text-end z-20";
  return (
    <h1 className={props.reversed ? reversedStyles : baseStyles}>
      {" "}
      {props.children}{" "}
    </h1>
  );
};

Project.Title = Title;

const Body = ({ ...props }: Props) => {
  const baseStyles =
    "bg-not-black text-not-white px-5 py-4 rounded-md shadow-xl col-start-1 col-span-full sm:col-span-11 sm:col-start-1 md:col-span-7 md:col-start-1 row-start-2 row-span-1 z-10 hover:shadow-2xl transition duration-150 ease-in-out";
  const reverseStyles =
    "bg-not-black text-not-white px-5 py-4 rounded-md shadow-xl text-end col-end-13 col-span-full sm:col-span-10 sm:col-end-13 md:col-span-7 md:col-end-13 row-start-2 row-span-1 z-10 hover:shadow-2xl transition duration-150 ease-in-out";
  return (
    <p className={props.reversed ? reverseStyles : baseStyles}>
      {props.children}
    </p>
  );
};

Project.Body = Body;

const Tags = ({ ...props }: Props) => {
  const baseStyles =
    "flex flex-wrap gap-5 row-start-3 col-start-1 col-span-full md:col-start-1 md:col-span-6 justify-start";
  const reverseStyles =
    "flex flex-wrap gap-5 row-start-3 col-end-13 col-span-full md:col-end-13 md:col-span-6 justify-end";
  return (
    <div className={props.reversed ? reverseStyles : baseStyles}>
      {" "}
      {props.children}{" "}
    </div>
  );
};

Project.Tags = Tags;

const Tag = ({ ...props }: Props) => {
  return <span className="text-accent"> {props.children} </span>;
};

Project.Tag = Tag;

type ImgProps = {
  src: string;
  alt?: string;
  reversed?: boolean;
};

const Img = ({ ...props }: ImgProps) => {
  const baseStyles =
    "hidden md:block row-span-full col-start-5 lg:col-start-6 col-span-8 lg:col-span-7 rounded-md transition duration-300 grayscale hover:grayscale-0 hover:scale-[1.025] ease-in-out z-0";
  const reverseStyles =
    "hidden md:block row-span-full col-end-9 lg:col-end-8 col-span-8 lg:col-span-7 rounded-md transition duration-300 grayscale hover:grayscale-0 hover:scale-[1.025] ease-in-out z-0";
  return (
    <img
      src={props.src}
      alt={props.alt}
      className={props.reversed ? reverseStyles : baseStyles}
    />
  );
};

Project.Img = Img;
