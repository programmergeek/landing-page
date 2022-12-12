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
      <div className={`${styles[`card-${props.size? props.size: "md"}`]} rounded-md relative overflow-hidden`} onMouseEnter={() => updateMouseHover(true)} onMouseLeave={() => updateMouseHover(false)}>
        <div className="overflow-hidden w-12/12 h-[500px]" style={{backgroundImage: `url(${props.thumbnail})`, backgroundPosition: "center center", backgroundRepeat: "no-repeat"}}></div>
        <div className={`w-full h-full rounded-xl bg-black absolute top-0 opacity-50 ${mouseHover? "": "hidden"}`}></div>
        <div className={`absolute top-0 h-full w-full ${mouseHover? "": "hidden"} grid`}>
          <div className="w-fit h-fit place-self-center px-10">
            <h1 className="text-3xl text-white text-center font-roboto"> {props.title} </h1>
            <p className="text-white text-center font-roboto my-5"> {props.description} </p>
            <div className="max-w-[500px] flex flex-wrap gap-3 justify-center mb-5 mx-auto">
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
