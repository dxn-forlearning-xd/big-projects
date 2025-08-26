import TimeLine from '../components/TimeLine';

const AboutMe = ({ language }) => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#eff6f9] text-[#0F2B3D] my-30 ">
      <h1 className="text-5xl font-bold mb-6">
        {' '}
        {language === 'en' ? 'About Me' : '关于我'}
      </h1>
      <p className="text-lg text-center max-w-2xl">
        {language === 'en'
          ? "I enjoy seeing ideas take shape through code, and I'm aiming for roles where I can grow through real-world collaboration."
          : ''}
      </p>
      <TimeLine language={language} />
    </div>
  );
};

export default AboutMe;
