import React from 'react'
import {
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
} from '@tabler/icons-react'
import { cn } from '@/lib/utils'
import { BentoGrid, BentoGridItem } from '../ui/bento-grid'

export function BentoGridSecondDemo() {
  return (
    <BentoGrid className="mx-auto md:auto-rows-[20rem]">
      {items.map((item, i) => (
        <BentoGridItem
          key={i}
          title={item.title}
          description={item.description}
          header={item.header}
          className={`${item.className} `}
          icon={item.icon}
        />
      ))}
    </BentoGrid>
  )
}
const Skeleton = () => (
  <div className="flex h-full min-h-[6rem] w-full flex-1 rounded-xl border border-transparent bg-dot-black/[0.2] [mask-image:radial-gradient(ellipse_at_center,white,transparent)] dark:border-white/[0.2] dark:bg-dot-white/[0.2]"></div>
)
const items = [
  {
    title: 'The Dawn of Innovation',
    description: 'Explore the birth of groundbreaking ideas and inventions.',
    header: <Skeleton />,
    className: 'md:col-span-2 ',
    icon: <IconClipboardCopy className="h-4 w-4" />,
  },
  {
    title: 'The Digital Revolution',
    description: 'Dive into the transformative power of technology.',
    header: <Skeleton />,
    className: 'md:col-span-1 ',
    icon: <IconFileBroken className="h-4 w-4" />,
  },
  {
    title: 'The Art of Design',
    description: 'Discover the beauty of thoughtful and functional design.',
    header: <Skeleton />,
    className: 'md:col-span-1 ',
    icon: <IconSignature className="h-4 w-4" />,
  },
  {
    title: 'The Power of Communication',
    description: 'Understand the impact of effective communication in our lives.',
    header: <Skeleton />,
    className: 'md:col-span-2 ',
    icon: <IconTableColumn className="h-4 w-4" />,
  },
]
