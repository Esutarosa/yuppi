'use client';

import type { FC } from 'react';
import { useState } from "react";

import { QUESTIONS } from '@/data/quizzesQuestions';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

interface QuizCardProps {
  name: string;
};

const QuizCard: FC<QuizCardProps> = ({ name }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [answerChecked, setAnswerChecked] = useState<boolean>(false);
  const [selectedAnswerIndex, setSelectedAnswerIndex] = useState<number | null>(null);
  const [showResults, setShowResults] = useState<boolean>(false);
  const [quizResult, setQuizResult] = useState<{
    score: number,
    correctAnswers: number,
    wrongAnswers: number
  }>({
    score: 0,
    correctAnswers: 0,
    wrongAnswers: 0
  });

  const { questions } = QUESTIONS;
  const { question, answers, correctAnswer } = questions[currentQuestionIndex];

  const onAnswerSelected = (answer: string, index: number) => {
    setSelectedAnswerIndex(index);
    setSelectedAnswer(answer);
    setAnswerChecked(true);
  };

  const handleNextQuestion = () => {
    if (selectedAnswer === correctAnswer) {
      setQuizResult((prev) => ({
        ...prev,
        score: prev.score + 2,
        correctAnswers: prev.correctAnswers + 1,
      }));
    } else {
      setQuizResult((prev) => ({
        ...prev,
        wrongAnswers: prev.wrongAnswers + 0,
      }));
    }
    if (currentQuestionIndex !== questions.length - 1) {
      setCurrentQuestionIndex((prev) => prev + 1);
    } else {
      setShowResults(true);
    }
    setSelectedAnswer('');
    setSelectedAnswerIndex(null);
    setAnswerChecked(false);
  }

  return (
    <div>
      <div>
        {!showResults ? (
          <div>
            <h4>{question}</h4>
            <ul>
              {answers.map((answer, index) => (
                <li
                  key={index}
                  onClick={() => onAnswerSelected(answer, index)}
                  className={cn(
                    'p-4' +
                    (selectedAnswerIndex === index ? 'active' : '') +
                    'cursor-pointer'
                  )}
                >
                  {answer}
                </li>
              ))}
            </ul>
            <div>
              <span>{currentQuestionIndex + 1}/{questions.length}</span>
              <Button
                variant="outline"
                onClick={handleNextQuestion}
                disabled={!answerChecked}
              >
                {currentQuestionIndex === questions.length - 1 ? 'Submit' : 'Next'}
              </Button>
            </div>
          </div>
        ) : (
          <>

          </>
        )}
      </div>
    </div>
  );
};

export default QuizCard;