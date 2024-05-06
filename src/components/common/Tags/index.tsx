import type { FC } from "react";

import { Button } from "@/components/ui/button";
import Link from "next/link";

import { PROBLEMS_TAGS as getProblemsTags } from "@/data/getTags";

const Tags: FC = () => {
  return (
    <div className="flex items-center gap-4 overflow-hidden select-none">
      {getProblemsTags.map((tag) => (
        <Button variant="outline">
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
