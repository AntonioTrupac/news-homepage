interface PopularNewsCard {
  news: {
    id: number;
    title: string;
    description: string;
    image: string;
  };
  className?: string;
}

const PopularNewsCard = ({ news, className }: PopularNewsCard) => {
  const { id, title, description, image } = news;

  return (
    <div className={className}>
      <img src={image} alt={title} height={127} width={100} />

      <div className='ml-6'>
        <p>{id}</p>
        <h2 className='text-dark-blue'>{title}</h2>
        <p className='mt-2 text-[15px] leading-[26px] text-dark-gray'>
          {description}
        </p>
      </div>
    </div>
  );
};

export default PopularNewsCard;
