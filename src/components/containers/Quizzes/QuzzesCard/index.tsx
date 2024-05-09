import type { FC } from "react";
import Link from "next/link";

import Panel from "@/components/common/Panel";
import GridPattern from "@/components/common/GridPattern";
import RenderSVG from "@/components/common/RenderSVG";

interface InfoData {
  like?: number;
  view?: number;
  author?: string;
  icon: string;
};

interface QuizzesCardProps {
  title: string;
  info: InfoData[];
  tags: string[];
};

const QuizzesCard: FC<QuizzesCardProps> = ({ title, info, tags }) => {
  return (
    <Link href="/" className="w-full h-full">
      <Panel hasActiveOnHover innerClassName="relative">
        <div className="p-5 flex justify-between flex-wrap gap-3">
          <div className="basis-full sm:basis-auto">
            <h4 className="mb-2">{title}</h4>
            <div className="flex gap-x-6 gap-y-2 flex-wrap">
              {info.map((data, index) => (
                <div key={index} className="flex gap-1">
                  <RenderSVG icon={data.icon} />
                  <span>{data.author || data.like || data.view}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="flex gap-2 flex-wrap">
            {tags.map((tag, index) => (
              <span key={index}>
                <RenderSVG icon={tag} width={55} height={55} />
              </span>
            ))}
          </div>
        </div>
        <GridPattern viewBox="768 350" translate="0" scale="300" radial="2" />
      </Panel>
    </Link>
  );
};

export default QuizzesCard;
