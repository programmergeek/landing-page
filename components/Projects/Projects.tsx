import React, { Children } from "react";
import { Header } from "../Header";
import { BsGithub } from "react-icons/bs";
import { RxExternalLink } from "react-icons/rx";

export const Projects: React.FC = () => {
  return (
    <section
      className="min-h-screen pt-5 md:pt-10 lg:pt-20 xl:pt-40"
      id="projects"
    >
      <Header>Projects</Header>
      <Project>
        <Project.Title>Blog</Project.Title>
        <Project.Img src="images/Blog.png" />
        <Project.Body>
          This project came was inspired by the idea that I have heard being
          repeated in most tech spaces on the internet, "Document everything".
          The blog acts as public repository of the things I have learned. It
          was built using the Next UI which was challenging as I was/am learning
          how to use component libraries and how to customize them. It might not
          be the best looking website out there but I did learn a lot from this
          project.
        </Project.Body>
        <Project.Tags>
          <Project.Tag>React</Project.Tag>
          <Project.Tag>Next.js</Project.Tag>
          <Project.Tag>TypeScript</Project.Tag>
          <Project.Tag>Next UI</Project.Tag>
        </Project.Tags>
        <Project.Links
          repoHref="https://github.com/programmergeek/Blog"
          href="https://blog.willjoseph.xyz"
        />
      </Project>
      <div className="h-0.5 w-full rounded-full my-3 md:my-0 lg:my-10"></div>
      <Project reversed>
        <Project.Title>Markdown Editor</Project.Title>
        <Project.Img src="images/markdownEditor.png" />
        <Project.Body>
          This projet came to be out of frustration with the contentful rich
          text editor that provided no distinction between inline code and code
          blocks. This project is supposed to act as a prototype for an add-on
          to replace the default rich text editor.
        </Project.Body>
        <Project.Tags>
          <Project.Tag>React</Project.Tag>
          <Project.Tag>Next.js</Project.Tag>
          <Project.Tag>TypeScript</Project.Tag>
          <Project.Tag>Material UI</Project.Tag>
          <Project.Tag>Git</Project.Tag>
        </Project.Tags>
        <Project.Links
          repoHref="https://github.com/programmergeek/md-editor"
          href="https://simple-markdown-editor-demo.netlify.app/"
        />
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
  Links: typeof Links;
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
    <div className="grid grid-cols-12 md:grid-rows-[50px_minmax(0,_1fr)_auto_auto] xl:grid-rows-[200px_minmax(0,_1fr)_auto_auto] gap-y-4 w-full">
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

type LinkProps = {
  reversed?: boolean;
  repoHref: string;
  href?: string;
};

const Links = ({ ...props }: LinkProps) => {
  const baseStyles = "row-start-4 col-start-1 col-span-5 flex gap-10";
  const reversedStyles =
    "row-start-4 col-end-13 col-span-5 flex gap-10 justify-end";
  return (
    <div className={props.reversed ? reversedStyles : baseStyles}>
      <span>
        <a href={props.repoHref} target="_blank" rel="noreferrer">
          <BsGithub
            className="hover:text-accent transition duration-300 ease-in-out"
            fontSize={24}
          />
        </a>
      </span>
      <span>
        <a href={props.href} target="_blank" rel="noreferrer">
          <RxExternalLink
            className="hover:text-accent transition duration-300 ease-in-out"
            fontSize={24}
          />
        </a>
      </span>
    </div>
  );
};

Project.Links = Links;
