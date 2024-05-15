import type { FC } from "react";
import Link from "next/link";

import Panel from "@/components/common/Panel";
import GridPattern from "@/components/common/GridPattern";
import RenderSVG from "@/components/common/RenderSVG";

interface statistics {
  author?: string;
  likes?: string;
  views?: string;
  icon: string;
}

interface QuzzesCardProps {
  slug: string;
  title: string;
  statistics: statistics[];
  tags: string | string[];
}

const QuizzesCard: FC<QuzzesCardProps> = ({ title, statistics, tags, slug }) => {
  return (
    <Link href={`/quizzes/${slug}`} className="w-full h-full">
      <Panel hasActiveOnHover innerClassName="relative">
        <div className="p-5 flex justify-between flex-wrap gap-3">
          <div className="basis-full sm:basis-auto">
            <h4 className="mb-2">{title}</h4>
            <div className="flex gap-x-6 gap-y-2 flex-wrap">
              {statistics.map((data, index) => (
                <div key={index} className="flex gap-1">
                  <RenderSVG icon={data.icon} />
                  <span>{data.author || data.likes || data.views}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="flex gap-2 flex-wrap">
            {Array.isArray(tags) ? (
              tags.map((tag, index) => (
                <span key={index}>
                  <RenderSVG icon={tag} width={55} height={55} />
                </span>
              ))
            ) : (
              <span>
                <RenderSVG icon={tags} width={55} height={55} />
              </span>
            )}
          </div>
        </div>
        <GridPattern viewBox="768 350" translate="0" scale="300" radial="2" />
      </Panel>
    </Link>
  );
};

export default QuizzesCard;
