import mobileHeroImage from '../assets/image-web-3-mobile.jpg';

const HeroSection = () => {
  return (
    <div>
      <img src={mobileHeroImage} alt='hero' />

      <h1 className='mt-5 text-5xl font-bold capitalize leading-[3rem] tracking-normal text-gray-900'>
        The bright future of web 3.0?
      </h1>

      <p className='mt-4 text-gray-500'>
        We dive into the next evolution of the web that claims to put the power
        of the platforms back into the hands of people. But is it really
        fulfilling its promise?
      </p>

      <a className='mt-6 inline-block bg-red-500 px-8 py-3 text-sm font-medium uppercase tracking-[0.2em] text-white hover:bg-amber-600'>
        Read more
      </a>
    </div>
  );
};

export default HeroSection;
