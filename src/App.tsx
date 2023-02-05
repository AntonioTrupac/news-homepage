import { HeroSection, Navbar, RecentNewsSection } from './components';

const App = () => {
  return (
    <>
      <a
        className='absolute left-0 m-3 -translate-y-16 bg-primary-red p-3 text-off-white transition focus:translate-y-0'
        href={'#main-content'}
      >
        Skip Navigation
      </a>

      <header className='px-4 pt-7'>
        <Navbar />
      </header>

      <main id='main-content' className='px-4 pt-6 pb-20'>
        <HeroSection />

        <RecentNewsSection className='mt-16 bg-dark-blue px-5 py-6' />
      </main>
    </>
  );
};

export default App;
