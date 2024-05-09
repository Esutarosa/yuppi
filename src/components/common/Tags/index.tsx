import type { FC } from "react";

import { Button } from "@/components/ui/button";
import Link from "next/link";

import { QUIZZES_TAGS as getQuizzesTags } from "@/data/getTags";

const Tags: FC = () => {
  return (
    <div className="flex items-center gap-4 overflow-hidden select-none flex-wrap">
      {getQuizzesTags.map((tag, index) => (
        <Button key={index} variant="outline">
          <Link href="/" className="flex items-center gap-2 justify-center">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipPath="evenodd"
                fill="hsl(var(--muted-foreground))"
                d={tag.icon}
              />
            </svg>
            {tag.title}
          </Link>
        </Button>
      ))}
    </div>
  );
};

export default Tags;
