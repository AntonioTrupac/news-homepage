import PopularNewsCard from './PopularNewsCard';
import gamingGrowthImage from '../../assets/images/image-gaming-growth.jpg';
import retroImage from '../../assets/images/image-retro-pcs.jpg';
import topLaptopsImage from '../../assets/images/image-top-laptops.jpg';

const mockData = [
  {
    id: 1,
    title: 'Reviving Retro PCs',
    description: 'What happens when old PCs are given modern upgrades?',
    image: retroImage,
  },
  {
    id: 2,
    title: 'Top 10 Laptops of 2022',
    description: 'Our best picks for various needs and budgets.',
    image: topLaptopsImage,
  },
  {
    id: 3,
    title: 'The Growth of Gaming',
    description: 'How the pandemic has sparked fresh opportunities.',
    image: gamingGrowthImage,
  },
];

interface RecentNewsSectionProps {
  className?: string;
}

const PopularNews = ({ className }: RecentNewsSectionProps) => {
  return (
    <div className={className}>
      {mockData.map((data) => (
        <PopularNewsCard
          key={data.id}
          news={data}
          className='relative mt-8 mr-0 flex items-center first-of-type:mt-0 last-of-type:mr-0 lg:mr-8 lg:mt-0'
        />
      ))}
    </div>
  );
};

export default PopularNews;
