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
        <Project.Body>
          Morbi et aliquet elit. Aliquam ultricies blandit lectus, vitae posuere
          mi vestibulum nec. Vestibulum sit amet risus scelerisque sapien
          rhoncus molestie. Suspendisse ut quam nisi. Phasellus auctor, leo
          laoreet vestibulum facilisis, tellus ante fringilla velit, eget
          egestas sem nisi vitae mi. Maecenas nec mi sit amet velit dignissim
          lacinia vel nec mauris. Donec non interdum lacus.
        </Project.Body>
      </Project>
      <div className="bg-[#dadada] h-0.5 w-full rounded-full my-10"></div>
      <Project reversed>
        <Project.Title>Project</Project.Title>
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
};

const Project: React.FunctionComponent<Props> & ProjectSubComponents = (
  props: Props
) => {
  const children = Children.map(props.children, (child) => {
    if (React.isValidElement(child)) {
      return React.cloneElement(child, { reversed: props.reversed } as any);
    }
  });
  return <div>{children}</div>;
};

const Title = ({ ...props }: Props) => {
  return (
    <h3
      className={`text-2xl font-semibold mb-2 lg:w-full ${
        props.reversed ? "text-end" : ""
      }`}
    >
      {props.children}
    </h3>
  );
};

Project.Title = Title;

const Body = ({ ...props }: Props) => {
  return (
    <div
      className={`flex w-full drop-shadow-2xl ${
        props.reversed ? "justify-end" : ""
      }`}
    >
      <p
        className={`bg-not-black rounded-md p-5 text-not-white lg:w-2/3 ${
          props.reversed ? "text-end" : ""
        }`}
      >
        {props.children}
      </p>
    </div>
  );
};

Project.Body = Body;

const Tags = ({ ...props }: Props) => {
  return (
    <div
      className={`flex w-full gap-5 mt-3 ${
        props.reversed ? "justify-end" : ""
      }`}
    >
      {props.children}
    </div>
  );
};

Project.Tags = Tags;

const Tag = ({ ...props }: Props) => {
  return <span className="text-accent">{props.children}</span>;
};

Project.Tag = Tag;
