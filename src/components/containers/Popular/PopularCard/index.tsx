import type { FC } from 'react';
import Link from 'next/link';

import Panel from '@/components/common/Panel';

interface PopularCardProps {
  type: string;
  tags: string[];
  title: string;
  description: string;
  quiz_name: string;
  quiz_url: string;
};

const PopularCard: FC<PopularCardProps> = ({
  type,
  tags,
  title,
  description,
  quiz_name,
  quiz_url,
}) => {
  return (
    <Link href={quiz_url} className='w-full h-full grid items-stretch justify-items-stretch'>
      <Panel innerClassName='bg-surface-100 group/panel'>
        <div className='flex flex-col justify-between'>
          {tags && (
            <div className='relative w-full aspect-[3/1] bg-surface-300 flex items-center justify-center gap-4 overflow-hidden'>
              {tags.map((tag, index) => (
                <div
                  key={index}
                  title={tag}
                  className='relative z-10'
                >
                  {tag}
                </div>
              ))}
            </div>
          )}
          <div className='p-5 flex flex-col gap-2 border-t border-muted'>
            <span className="flex items-start justify-between">
              <h4 className="text-foreground text-lg">{title}</h4>
            </span>
            <p className='text-sm text-muted-foreground'>{description}</p>
          </div>
        </div>
      </Panel>
    </Link>
  );
};

export default PopularCard;