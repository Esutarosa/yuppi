import type { FC } from 'react';

import style from './index.module.scss'
import Link from 'next/link';

const QuizzesCard: FC = () => {
  return (
    <div>
      <div className={style.quizze}>
        <div className={style.quizze__card}>
          <div className={style.quizze__status}>
            <p>Status</p>
          </div>
          <div className={style.quizze__title}>
              <Link href="/">1. Two Sum</Link>
          </div>
          <div className={style.quizze__lang}>
            <p>Java Script</p>
          </div>
          <div className={style.quizze__difficulty}>
            <p>Medium</p>
          </div>
        </div>
        <div className={style.quizze__card}>
          <div className={style.quizze__status}>
            <p>Status</p>
          </div>
          <div className={style.quizze__title}>
              <Link href="/">1. Two Sum</Link>
          </div>
          <div className={style.quizze__lang}>
            <p>Java Script</p>
          </div>
          <div className={style.quizze__difficulty}>
            <p>Medium</p>
          </div>
        </div>
        <div className={style.quizze__card}>
          <div className={style.quizze__status}>
            <p>Status</p>
          </div>
          <div className={style.quizze__title}>
              <Link href="/">1. Two Sum</Link>
          </div>
          <div className={style.quizze__lang}>
            <p>Java Script</p>
          </div>
          <div className={style.quizze__difficulty}>
            <p>Medium</p>
          </div>
        </div>
        <div className={style.quizze__card}>
          <div className={style.quizze__status}>
            <p>Status</p>
          </div>
          <div className={style.quizze__title}>
              <Link href="/">1. Two Sum</Link>
          </div>
          <div className={style.quizze__lang}>
            <p>Java Script</p>
          </div>
          <div className={style.quizze__difficulty}>
            <p>Medium</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuizzesCard;