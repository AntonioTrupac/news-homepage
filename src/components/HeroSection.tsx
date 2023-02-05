import mobileHeroImage from '../assets/image-web-3-mobile.jpg';

interface HeroSectionProps {
  className?: string;
}

const HeroSection = ({ className }: HeroSectionProps) => {
  return (
    <div className={className}>
      <img src={mobileHeroImage} alt='hero' />

      <h1 className='mt-6 text-[40px] font-extrabold capitalize leading-[40px] text-gray-900'>
        The Bright Future <span className='lowercase'>of</span> Web 3.0?
      </h1>

      <p className='mt-4 text-[15px] leading-[26px] text-gray-500'>
        We dive into the next evolution of the web that claims to put the power
        of the platforms back into the hands of the people. But is it really
        fulfilling its promise?
      </p>

      <a className='mt-6 inline-block bg-primary-red px-8 py-3 text-sm font-medium uppercase tracking-[0.2em] text-white hover:bg-primary-orange'>
        Read more
      </a>
    </div>
  );
};

export default HeroSection;
