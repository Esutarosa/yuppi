import type { FC } from 'react';
import Link from 'next/link';

import SectionContainer from '@/layouts/SectionContainer';
import { Button } from '@/components/ui/button';

const Discuss: FC = () => {
  return (
    <SectionContainer className='min-h-screen'>
      <div className='text-center mt-24'>
        <p className='text-muted-foreground max-w-[480px] mx-auto select-none'>
          Something will appear here in the near future.
          For now, instead, you can propose your suggestions to the
          {" "}
          <Button variant="link" className="p-0">
            <Link target="_blank" href="https://github.com/Esutarosa/yuppi/issues">GitHub</Link>
          </Button>
          {" "} branch!
        </p>
      </div>
    </SectionContainer>
  );
};

export default Discuss;