import { Navigate } from 'react-router-dom';

const HeroSection = ({ language }) => {
  return (
    <section
      id="home"
      className="flex flex-col justify-center items-center gap-10 h-screen bg-[#eff6f9] text-[#162F64] pt-20"
    >
      <div className="w-56 h-56 rounded-full border-4 border-white flex items-center justify-center overflow-hidden">
        <img
          className="object-cover w-[320%] h-[320%] object-[32%_50%] -translate-y-7"
          src="/imgs/profile.jpg"
          alt="Profile"
        />
      </div>

      <h1 className="text-5xl font-bold bg-[#fdf2e1] text-[#215F75]">
        {language === 'en'
          ? "Hi, I'm Xiaonan Dong"
          : 'こんにちは、私は董笑楠です'}
      </h1>
      <p className="max-w-2xl text-center text-lg">
        {language === 'en'
          ? 'Transitioning into frontend development with hands-on practice in JavaScript and responsive design. Currently working on full-stack tutorials to deepen understanding of React and backend integration.'
          : '情熱的なフロントエンド開発者で、美しくレスポンシブなデザインを作成します。'}
      </p>

      <div className="flex gap-10">
        <button className="px-8 py-4 rounded-full bg-[#5AA4B2] text-white hover:bg-[#72B6C2] transition cursor-pointer ">
          {language === 'en' ? 'VIEW MY CV' : '私の履歴書を見る'}
        </button>
        <a
          className="w-12 h-12 pt-1 hover:scale-105 transition"
          href="https://github.com/dxn-forlearning-xd"
          target="_blank"
        >
          <img src="/imgs/github.png" alt="GitHub" />
        </a>
      </div>
      <div>
        <p
          className="text-gray-500 hover:text-gray-400 transition cursor-pointer"
          onClick={() => Navigate('/')}
        >
          {language === 'en'
            ? 'Check out my recent work ↓'
            : '私の履歴書を見る'}
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
