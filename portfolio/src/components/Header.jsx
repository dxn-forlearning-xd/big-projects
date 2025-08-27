import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
const Header = ({ language, setLanguage }) => {
  const navigate = useNavigate();
  useEffect(() => {
    document.documentElement.classList.remove('font-en', 'font-ch');
    document.documentElement.classList.add(
      language === 'en' ? 'font-en' : 'font-ch'
    );
  }, [language]);
  const toggleLanguage = () => {
    const newLang = language === 'en' ? 'ja' : 'en';
    setLanguage(newLang);

    document.documentElement.classList.remove('font-en', 'font-ch');
    document.documentElement.classList.add(
      newLang === 'en' ? 'font-en' : 'font-ch'
    );
  };
  return (
    <header className="bg-[#5AA4B2] w-full fixed top-0 left-0 z-50 flex justify-between items-center px-4 md:px-10 py-3 md:py-4 text-white shadow-md">
      <h2 className="font-bold text-xl">Portfolio</h2>

      <nav className="ml-20 hidden md:flex gap-8">
        <a
          href="#home"
          className="hover:text-gray-800 hover:scale-115 transition "
          onClick={() => navigate('/')}
        >
          {language === 'en' ? 'Home' : '首页'}
        </a>
        <a
          href="#skills"
          className="hover:text-gray-800 hover:scale-115 transition"
          onClick={() => navigate('/')}
        >
          {language === 'en' ? 'Skills' : '技能'}
        </a>
        <a
          href="#projects"
          className="hover:text-gray-800 hover:scale-115 transition"
          onClick={() => navigate('/')}
        >
          {language === 'en' ? 'Projects' : '项目'}
        </a>
      </nav>

      <div className="flex md:hidden gap-4">
        <a href="#home">
          <img
            src="/imgs/home.png"
            alt="Home"
            className="w-8 h-8 hover:scale-115 transition"
            onClick={() => navigate('/')}
          />
        </a>
        <a href="#skills">
          <img
            src="/imgs/skills.png"
            alt="Skills"
            className="w-8 h-8 hover:scale-115 transition"
            onClick={() => navigate('/')}
          />
        </a>
        <a href="#projects">
          <img
            src="/imgs/projects.png"
            alt="Projects"
            className="w-8 h-8 hover:scale-115 transition"
            onClick={() => navigate('/')}
          />
        </a>
      </div>

      <div className="flex items-center gap-3 ml-1">
        <button
          className="px-4 py-2 rounded-md border border-white hover:bg-white hover:text-[#5AA4B2] transition cursor-pointer "
          onClick={() => navigate('/about')}
        >
          {language === 'en' ? 'About Me' : '关于我'}
        </button>
        <button
          className="p-2 rounded-full border border-white bg-white transition cursor-pointer hover:scale-105 "
          onClick={toggleLanguage}
        >
          <img src="/imgs/language.png" alt="Language" className="w-7 h-7" />
        </button>
      </div>
    </header>
  );
};

export default Header;
