import React, { useCallback, useEffect, useRef, useState } from "react";
import ExternalLinkIcon from "../icons/external-link.svg";
import { throttle } from "radash";

interface Props {
  title: string;
  subtitle: string;
  role: string;
  image: string;
  link: string;
  accentColor: string;
}

const ProjectCard: React.FC<Props> = ({
  image,
  link,
  role,
  subtitle,
  title,
  accentColor,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const thumbnailRef = useRef<HTMLImageElement>(null);

  const onScroll = useCallback(() => {
    const rect = thumbnailRef?.current?.getBoundingClientRect();
    if (
      rect &&
      rect.top <= window.innerHeight - rect.height / 4 &&
      rect.bottom >= window.innerHeight / 3
    ) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  }, []);

  useEffect(() => {
    document.addEventListener("scroll", throttle({ interval: 100 }, onScroll));
    return () => document.removeEventListener("scroll", onScroll);
  }, [onScroll]);

  return (
    <div className="w-full px-4 sm:px-16 lg:px-24">
      <div className="flex flex-col md:flex-row md:justify-between md:items-start sm:px-16 md:px-24 text-xl lg:text-2xl max-w-5xl mx-auto md:space-x-24">
        <div>
          <h1 className="text-4xl lg:text-6xl font-bold mb-3 text-center md:text-left">
            {title}
          </h1>
          <h3 className="hidden md:block">{subtitle}</h3>
        </div>

        <div className="flex flex-col items-center md:items-start space-y-3 mt-8 md:mt-0">
          <div className="flex flex-row md:flex-col justify-start items-start">
            <h4 className="text-gray mr-4">Role</h4>
            <h3>{role}</h3>
          </div>
          <a className="flex flex-row items-baseline space-x-2" href={link}>
            <p
              style={{
                textDecorationColor: isVisible ? accentColor : "#FCFCFC",
              }}
              className={`md:mt-4 underline transition-all duration-200 text-lg ${
                isVisible ? "decoration-4" : ""
              }`}
            >
              Check it out
            </p>
            <img src={ExternalLinkIcon} className="h-3" />
          </a>
        </div>
      </div>
      <img
        ref={thumbnailRef}
        className={`w-full max-w-7xl mx-auto mt-12 transition-all duration-200 ${
          isVisible ? "grayscale-0 blur-0" : "grayscale blur-lg"
        }`}
        src={image}
      />
    </div>
  );
};

export default ProjectCard;
