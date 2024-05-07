import type { FC } from 'react';

import SectionContainer from '@/layouts/SectionContainer';
import QuizzesCard from '@/components/containers/Quizzes/QuizzesCard';

import style from './index.module.scss'

const Quizzes: FC = () => {
  return (
    <SectionContainer>
      <div className={style.quizzbar}>
        <div className={style.quizzbar__status}>
          <p>Status</p>
        </div>
        <div className={style.quizzbar__title}>
          <p>Title</p>
        </div>
        <div className={style.quizzbar__language}>
          <p>Language</p>
        </div>
        <div className={style.quizzbar__diffuculity}>
          <p>Diffuculty</p>
        </div>
      </div>
      <QuizzesCard />
    </SectionContainer>
  );
};

export default Quizzes;