import { Hero, Navbar, PopularNews, RecentNews } from './components';

const App = () => {
  return (
    <>
      <a
        className='absolute left-0 m-3 -translate-y-16 bg-primary-red p-3 text-off-white transition focus:translate-y-0'
        href={'#main-content'}
      >
        Skip Navigation
      </a>

      <header className='px-4 pt-7 xl:mx-auto xl:max-w-[1280px] xl:pt-[90px]'>
        <Navbar />
      </header>

      <main
        id='main-content'
        className='px-4 pt-6 pb-20 xl:mx-auto xl:max-w-[1280px]'
      >
        <Hero />

        <RecentNews className='mt-16 bg-dark-blue px-5 py-6' />

        <PopularNews className='mt-16 flex flex-col md:flex-row md:flex-wrap lg:flex-nowrap' />
      </main>
    </>
  );
};

export default App;
