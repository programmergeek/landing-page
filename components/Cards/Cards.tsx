import React, {useState} from "react";
import { PrimaryButton, SecondaryButton } from "../Buttons";
import styles from './Cards.module.css'
import { Tags } from "../Tags";

type Props = {
  children?: React.ReactNode;
  className?: string
};

type ProjectCardProps = {
  title:string,
  description: string,
  size?: "sm" | "md" | "lg" | "full",
  thumbnail: string,
  tags: string[],
  links: {
    repo: string,
    project?: string,
    blogPost?: string
  }
};

export const Card: React.FC<Props> = ({ ...props }) => {
  return (
    <div className={`${props.className} min-h-[150px] p-5 bg-card-paper rounded-md border-2 border-black shadow-hardShadowLeft`}>
      {props.children}
    </div>
  );
};

export const ProjectCard: React.FC<ProjectCardProps> = ({ ...props }) => {

  const [mouseHover, updateMouseHover] = useState<boolean>(false)

    return (
      <div className={`${styles[`card-${props.size? props.size: "md"}`]} rounded-md relative`} onMouseEnter={() => updateMouseHover(true)} onMouseLeave={() => updateMouseHover(false)}>
        <img src={props.thumbnail} className="rounded-xl h-[500px]" alt="" />
        <div className={`w-full h-full rounded-xl bg-black absolute top-0 opacity-50 ${mouseHover? "": "hidden"}`}></div>
        <div className={`absolute top-0 h-full w-full ${mouseHover? "": "hidden"}`}>
          <div className="w-fit h-fit mt-5 lg:mt-36 mx-auto">
            <header className="text-3xl text-white text-center font-roboto"> {props.title} </header>
            <p className="text-white text-center font-roboto my-5"> {props.description} </p>
            <div className="max-w-[500px] flex flex-wrap gap-3 justify-center mb-5">
              {
                props.tags.map((tag) => (
                  <Tags>{tag}</Tags>
                ))
              }
            </div>
            <div className="flex justify-center gap-5">
              <div className={`${props.links.project ? "": "hidden"}`}>
                <PrimaryButton href={props.links.project}>View Live</PrimaryButton>
              </div>
              <SecondaryButton href={props.links.repo}>Repo</SecondaryButton>
            </div>
          </div>
        </div>
      </div>
    );
};
