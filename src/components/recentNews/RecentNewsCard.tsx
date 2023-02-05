interface RecentNewsCardProps {
  data: {
    title: string;
    description: string;
  };
}

const RecentNewsCard = ({ data }: RecentNewsCardProps) => {
  return (
    <div className='relative'>
      <h2 className='text-xl font-extrabold leading-6 text-off-white'>
        <a
          href='#'
          className='before:absolute before:inset-0 before:z-10 before:cursor-pointer hover:text-primary-orange'
        >
          {data.title}
        </a>
      </h2>

      <p className='mt-2 text-[15px] leading-[26px] text-grayish'>
        {data.description}
      </p>
    </div>
  );
};

export default RecentNewsCard;
