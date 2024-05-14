import type { FC } from 'react';

import WithQuiz from '@/components/withQuizze';

interface QuizPageProps {
  params: {
    slug: string
  };
};

const QuizPage: FC<QuizPageProps> = ({ params }) => {
  return (
    <>
      <WithQuiz />
    </>
  );
};

export default QuizPage;