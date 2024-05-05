import type { FC } from 'react';

import Directions from '@/components/common/Directions';

const HeroSupported: FC = () => {
  return (
    <div className="flex text-center flex-col items-center my-4 lg:mt-6">
      <small className="text-xs text-muted-foreground">
        Currently more than 10+ directions are supported
      </small>
      <Directions />
    </div>
  );
};

export default HeroSupported;