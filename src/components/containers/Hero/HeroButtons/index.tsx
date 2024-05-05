import type { FC } from 'react';

import { Button } from "@/components/ui/button";
import Link from "next/link";

const HeroButtons: FC = () => {
  return (
    <div className='flex items-center gap-2'>
      <Button asChild variant="default" className="bg-primary/75 text-foreground">
        <Link href="/quizzes" aria-label="Quizzes">Quizzes</Link>
      </Button>

      <Button asChild variant="outline">
        <Link href="/problems" aria-label="Problems">Problems</Link>
      </Button>
    </div>
  );
};

export default HeroButtons;