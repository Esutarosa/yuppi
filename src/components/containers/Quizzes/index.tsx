import type { FC } from 'react';

import SectionContainer from '@/layouts/SectionContainer';
import QuizzesCard from '@/components/containers/Quizzes/QuizzesCard';

const Quizzes: FC = () => {
  return (
    <SectionContainer>
      <QuizzesCard />
    </SectionContainer>
  );
};

export default Quizzes;