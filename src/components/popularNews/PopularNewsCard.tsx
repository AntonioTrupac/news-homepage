interface PopularNewsCard {
  news: {
    id: number;
    title: string;
    description: string;
    image: string;
  };
  className?: string;
}

function addZero(number: number): string {
  let result = number.toString();
  if (number < 10) {
    result = '0' + result;
  }
  return result;
}

const PopularNewsCard = ({ news, className }: PopularNewsCard) => {
  const { id, title, description, image } = news;

  const number = addZero(id);

  return (
    <div className={className}>
      <img src={image} alt={title} height={127} width={100} />

      <div className='ml-6 md:pr-8 md:last-of-type:pr-0'>
        <p className='text-[32px] font-bold leading-8 text-grayish'>{number}</p>
        <h2 className='mt-3 text-lg font-extrabold leading-6 text-dark-blue'>
          {title}
        </h2>
        <p className='mt-2 text-[15px] leading-[26px] text-dark-gray'>
          {description}
        </p>
      </div>
    </div>
  );
};

export default PopularNewsCard;
