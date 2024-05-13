'use client';

import type { FC } from 'react';
import { useState } from "react";

import SectionContainer from '@/layouts/SectionContainer';
import QuizCard from '@/components/containers/Quiz/QuizCard';
import { Button } from '@/components/ui/button';

const Quiz: FC = () => {
  const [quizStarted, setQuizStarted] = useState(false);
  const [name, setName] = useState('');

  return (
    <SectionContainer className='mt-16 flex flex-col justify-center items-center gap-4'>
      <div className='text-center'>
        <h1>Quiz</h1>
      </div>

      {quizStarted ? (
        <QuizCard name={name} />
      ) : (
        <>
          <div className="flex flex-col gap-2 mb-6">
            <label htmlFor="nameInput" className="text-foreground">
              Enter your name:
            </label>
            <input
              type="text"
              className="max-w-lg bg-[inherit] border border-border p-2 text-foreground"
              id="nameInput"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <Button
            variant="default"
            onClick={() => setQuizStarted(true)}
            disabled={!name.trim()}
          >
            Start Quiz
          </Button>
        </>
      )}
    </SectionContainer>
  );
};

export default Quiz;