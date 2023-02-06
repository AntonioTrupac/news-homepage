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
      <img src={image} alt={title} height={128} width={100} />

      <div className='ml-6 md:pr-8 md:last-of-type:pr-0'>
        <p className='text-[32px] font-bold leading-8 text-grayish'>{number}</p>
        <h2 className='text-[[18px] mt-3 font-extrabold leading-6 text-dark-blue'>
          <a
            href='#'
            className='before:absolute before:inset-0 before:z-10 before:cursor-pointer hover:text-primary-orange'
          >
            {title}
          </a>
        </h2>

        <p className='mt-2 text-[15px] leading-[26px] text-dark-gray'>
          {description}
        </p>
      </div>
    </div>
  );
};

export default PopularNewsCard;
