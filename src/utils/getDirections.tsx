import React from '@/components/icons/directions/React';
import NextJs from '@/components/icons/directions/NextJs';
import JavaScript from '@/components/icons/directions/JavaScript';
import HTML from '@/components/icons/directions/HTML';
import CSS from '@/components/icons/directions/CSS';

export const DIRECTION_ICONS = [
  {
    icon: <NextJs className='size-8' />,
    href: '/quizzes/nextjs',
    key: 'nextjs',
    label: 'Next.js',
  },
  {
    icon: <JavaScript className='size-8' />,
    href: '/quizzes/javascript',
    key: 'javascript',
    label: 'JavaScript',
  },
  {
    icon: <React className='size-8' />,
    href: '/quizzes/react',
    key: 'react',
    label: 'React',
  },
  {
    icon: <HTML className='size-8' />,
    href: '/quizzes/html',
    key: 'html',
    label: 'HTML',
  },
  {
    icon: <CSS className='size-8' />,
    href: '/quizzes/css',
    key: 'css',
    label: 'CSS',
  },
];