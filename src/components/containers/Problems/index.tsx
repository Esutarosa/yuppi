import type { FC } from "react";

import ProblemCard from "./ProblemCard";
import SectionContainer from "@/layouts/SectionContainer";
import Tags from "@/components/common/Tags";

import { PROBLEMS_DATA as getProblemsData } from "@/data/getProblemsCard";

const Problems: FC = () => {
  return (
    <SectionContainer>
      <Tags />
      <div className="flex flex-col gap-3 mt-3">
        {getProblemsData.map((problem, index) => (
          <div key={index}>
            <ProblemCard {...problem} />
          </div>
        ))}
      </div>
    </SectionContainer>
  );
};

export default Problems;
