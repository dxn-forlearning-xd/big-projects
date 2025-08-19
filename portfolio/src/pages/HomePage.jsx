import HeroSection from '../components/HeroSection';
import SkillsSection from '../components/SkillsSection';
import ProjectsSection from '../components/ProjectsSection';
const HomePage = ({ language }) => {
  return (
    <>
      <HeroSection language={language} />
      <SkillsSection language={language} />
      <ProjectsSection language={language} />
    </>
  );
};

export default HomePage;
