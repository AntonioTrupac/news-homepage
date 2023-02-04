import { HeroSection, Navbar } from './components';

const App = () => {
  return (
    <main className='px-4'>
      <header>
        <Navbar />
      </header>

      <div className='mt-6'>
        <HeroSection />
      </div>
    </main>
  );
};

export default App;
