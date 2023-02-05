import { Fragment } from 'react';

import RecentNewsCard from './RecentNewsCard';

const mockData = [
  {
    id: 1,
    title: 'Hydrogen VS Electric Cars',
    description: 'Will hydrogen-fueled cars ever catch up to EVs?',
  },
  {
    id: 2,
    title: 'The Downsides of AI Artistry',
    description:
      'What are the possible adverse effects of on-demand AI image generation?',
  },
  {
    id: 3,
    title: 'Is VC Funding Drying Up?',
    description:
      'Private funding by VC firms is down 50% YOY. We take a look at what that means.',
  },
];

interface RecentNewsSectionProps {
  className?: string;
}

const RecentNewsSection = ({ className }: RecentNewsSectionProps) => {
  return (
    <div className={className}>
      <h1 className='text-[32px] font-bold leading-8 text-primary-orange'>
        New
      </h1>

      <div className='mt-9'>
        {mockData.map((data) => (
          <Fragment key={data.id}>
            <RecentNewsCard data={data} />
            <div className='my-7 h-[1px] w-full bg-line last-of-type:hidden' />
          </Fragment>
        ))}
      </div>
    </div>
  );
};

export default RecentNewsSection;
