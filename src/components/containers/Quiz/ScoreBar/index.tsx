import type { FC } from 'react';

import { Button } from '@/components/ui/button';

interface ScoreBarProps {
  quizResult: {
    score: number;
    correctAnswers: number;
    wrongAnswers: number;
  };
  questions: Array<any>;
  name: string;
};

const ScoreBar: FC<ScoreBarProps> = ({
  quizResult,
  questions,
  name,
}) => {
  const passPercentage = 20;
  const percentage = ((quizResult.score / (questions.length * 5)) * 100);
  const status = (parseFloat(percentage.toFixed(1)) >= passPercentage) ? "Pass" : "Fail";

  return (
    <>
      <div>
        <h3>{name} Score: {quizResult.score}</h3>
        <ul>
          <li>{questions.length}</li>
          <li>{quizResult.score}</li>
          <li>{quizResult.correctAnswers}</li>
          <li>{quizResult.wrongAnswers}</li>
          <li>{percentage}%</li>
          <li>{status}</li>
        </ul>
        <Button
          variant="outline"
          onClick={() => window.location.reload()}
        >
          Restart
        </Button>
      </div>
    </>
  );
};

export default ScoreBar;