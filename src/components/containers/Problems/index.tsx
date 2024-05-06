import type { FC } from "react";

import ProblemCard from "./ProblemCard";
import SectionContainer from "@/layouts/SectionContainer";
import Tags from "@/components/common/Tags";

const Problems: FC = () => {
  return (
    <SectionContainer>
      <Tags />
      <ProblemCard />
    </SectionContainer>
  );
};

export default Problems;
