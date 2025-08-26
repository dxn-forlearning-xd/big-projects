const skills = [
  { name: 'JavaScript', img: '/imgs/javascript.png' },
  { name: 'HTML', img: '/imgs/html.png' },
  { name: 'CSS', img: '/imgs/css.png' },
  { name: 'React', img: '/imgs/react.png' },
  { name: 'Tailwind CSS', img: '/imgs/tailwind.png' },
  { name: 'Git', img: '/imgs/git.png' },
];

const SkillsSection = ({ language }) => {
  return (
    <section
      id="skills"
      className="flex flex-col items-center py-20 bg-[#eff6f9]"
    >
      <h1 className="text-4xl font-bold mb-10 text-[#162F64]">
        {' '}
        {language === 'en' ? 'My Tech Stack' : '技能'}
      </h1>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="flex items-center gap-4 bg-white shadow-md rounded-lg px-6 py-4 hover:shadow-lg transition"
          >
            <img className="h-12 w-12" src={skill.img} alt={skill.name} />
            <span className="text-lg font-semibold">{skill.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;
