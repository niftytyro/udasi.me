import React, { useCallback, useEffect, useRef, useState } from "react";
import ExternalLinkIcon from "../icons/external-link.svg";

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
    if (rect) {
      console.log(isVisible, rect.top, window.innerHeight / 3);
    }
    if (
      rect &&
      rect.top <= window.innerHeight / 2 &&
      rect.bottom >= (2 * window.innerHeight) / 3
    ) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  }, []);

  useEffect(() => {
    document.addEventListener("scroll", onScroll);
    return () => document.removeEventListener("scroll", onScroll);
  }, [onScroll]);

  return (
    <div className="w-full px-24">
      <div className="flex justify-center items-start text-2xl max-w-5xl mx-auto space-x-24">
        <div>
          <h1 className="text-6xl font-bold mb-3">{title}</h1>
          <h3>{subtitle}</h3>
        </div>

        <div className="space-y-3">
          <h4 className="text-gray">Role</h4>
          <h3>{role}</h3>
          <a className="flex items-baseline space-x-2" href={link}>
            <p
              style={{
                textDecorationColor: isVisible ? accentColor : "#FCFCFC",
              }}
              className={`mt-4 underline ${isVisible ? "decoration-4" : ""}`}
            >
              Check it out
            </p>
            <img src={ExternalLinkIcon} />
          </a>
        </div>
      </div>
      <img
        ref={thumbnailRef}
        className={`w-full mt-12 px-24 transition-all duration-700 ${
          isVisible ? "grayscale-0 blur-0" : "grayscale blur-lg"
        }`}
        src={image}
      />
    </div>
  );
};

export default ProjectCard;
