import type { FC } from "react";

import Link from "next/link";
import Panel from "@/components/common/Panel";
import GridPattern from "@/components/common/GridPattern";

interface InfoData {
  like?: number;
  view?: number;
  author?: string;
  icon: string;
};

interface ProblemCardProps {
  title: string;
  info: InfoData[];
  tags: string[];
};

const RenderSVG = ({
  icon,
  width = 24,
  height = 24
}: {
  icon: string;
  width?: number;
  height?: number
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill='none'
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule='evenodd'
        clipPath='evenodd'
        d={icon}
        fill="hsl(var(--muted-foreground))"
      />
    </svg>
  );
};

const ProblemCard: FC<ProblemCardProps> = ({ title, info, tags }) => {
  return (
    <Link href="/" className="w-full h-full">
      <Panel hasActiveOnHover innerClassName="relative">
        <div className="p-5 flex justify-between">
          <div>
            <h4>{title}</h4>
            <div>
              {info.map((data, index) => (
                <div key={index}>
                  <RenderSVG icon={data.icon} />
                  <span>{data.author || data.like || data.view}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="flex gap-2">
            {tags.map((tag, index) => (
              <span key={index}>
                <RenderSVG icon={tag} width={55} height={55} />
              </span>
            ))}
          </div>
        </div>
        <GridPattern
          viewBox="768 350"
          translate="0"
          scale="300"
          radial="1.3"
        />
      </Panel>
    </Link >
  );
};

export default ProblemCard;
