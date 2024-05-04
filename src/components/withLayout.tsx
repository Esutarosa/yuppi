import type { FC, PropsWithChildren } from 'react';

import HomeLayout from '@/layouts/Home';
import QuizesLayout from '@/layouts/Quizes';
import ProblemsLayout from '@/layouts/Problems';
import DiscussLayout from '@/layouts/Discuss';

const layouts = {
  home: HomeLayout,
  quizes: QuizesLayout,
  problems: ProblemsLayout,
  discuss: DiscussLayout,
} satisfies Record<Layouts, FC>;

type WithLayoutProps<L = Layouts> = PropsWithChildren<{ layout: L }>;

const WithLayout: FC<WithLayoutProps<Layouts>> = ({ layout, children }) => {
  const LayoutComponent = layouts[layout] ?? DefaultLayout;

  return <LayoutComponent>{children}</LayoutComponent>;
};

export default WithLayout;