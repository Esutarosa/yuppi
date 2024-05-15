import type { FC } from "react";

import QuzzesCard from "@/components/containers/Quizzes/QuzzesCard";
import SectionContainer from "@/layouts/SectionContainer";
import Tags from "@/components/common/Tags";

import quizzes from "@/data/quizzes.json";

const Quizzes: FC = () => {
  return (
    <SectionContainer>
      <Tags />
      <div className="flex flex-col gap-3 mt-3">
        {quizzes.map((quiz, index) => (
          <div key={index}>
            <QuzzesCard {...quiz} />
          </div>
        ))}
      </div>
    </SectionContainer>
  );
};

export default Quizzes;
