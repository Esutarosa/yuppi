import type { FC } from "react";

import Link from "next/link";
import Panel from "@/components/common/Panel";
import GridPattern from "@/components/common/GridPattern";

interface ProblemCardProps {
  title: string;
  info: {
    liked: number;
    viewed: number;
    author: string;
  };
  tags: string[];
}

const ProblemCard: FC<ProblemCardProps> = ({ title, info, tags }) => {
  return (
    <Link href="/" className="w-full h-full">
      <Panel hasActiveOnHover>
        <div className="p-5 flex justify-between relative">
          <div>
            <h4 className="text-foreground text-lg">{title}</h4>
            <div className="flex gap-2">
              <span>{info.liked}</span>
              <span>{info.viewed}</span>
              <span>{info.author}</span>
            </div>
          </div>
          <div className="flex gap-2">{tags}</div>
          <GridPattern viewBox="768 350" translate="0" scale="300" radial="2" />
        </div>
      </Panel>
    </Link>
  );
};

export default ProblemCard;
