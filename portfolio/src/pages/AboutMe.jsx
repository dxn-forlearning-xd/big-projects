import TimeLine from '../components/TimeLine';

const AboutMe = ({ language }) => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#eff6f9] text-[#0F2B3D] my-30 ">
      <h1 className="text-5xl font-bold mb-6">
        {' '}
        {language === 'en' ? 'About Me' : '私について'}
      </h1>
      <p className="text-lg text-center max-w-2xl">
        {language === 'en'
          ? "With a background in music production and digital media, I started exploring frontend development in 2023. What drew me in was the way code and design come together to shape real user experience — something I used to care about in sound design too. Now I'm building small but complete projects to strengthen my skills in HTML/CSS/JS, while learning React for more dynamic applications. I enjoy seeing ideas take shape through code, and I'm aiming for roles where I can grow through real-world collaboration."
          : '私は情熱的なフロントエンド開発者で、React、Tailwind CSS、最新のウェブ技術に精通しています。'}
      </p>
      <TimeLine language={language} />
    </div>
  );
};

export default AboutMe;
