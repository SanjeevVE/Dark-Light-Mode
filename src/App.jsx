import { useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import './index.css';

function App() {
  const [isDark, setIsDark] = useState(false);

  const toggleDarkMode = () => {
    setIsDark(!isDark);

    if (!isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  return (
    <div className='min-h-screen flex flex-col bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-100'>
      <Navbar toggleDarkMode={toggleDarkMode} isDark={isDark} />
      <main className='flex-grow max-w-7xl mx-auto p-4'>
        <h2 className='text-2xl font-semibold mb-4'>Developers</h2>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6'>
          <div className='p-4 bg-white dark:bg-gray-800 rounderd shadow'>
            Developer Card Placeholder
          </div>
          <div className='p-4 bg-white dark:bg-gray-800 rounderd shadow'>
            Developer Card Placeholder
          </div>
          <div className='p-4 bg-white dark:bg-gray-800 rounderd shadow'>
            Developer Card Placeholder
          </div>
          <div className='p-4 bg-white dark:bg-gray-800 rounderd shadow'>
            Developer Card Placeholder
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
