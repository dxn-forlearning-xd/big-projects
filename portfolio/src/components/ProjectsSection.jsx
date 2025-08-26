const projects = [
  {
    title: '电商购物平台',
    img: '/imgs/amazon-clone.png',
    demo: 'https://your-live-demo-link.com',
    repo: 'https://github.com/dxn-forlearning-xd/big-projects/tree/main/e-commerce',
    stack: ['React', 'Chakra UI'],
  },
  {
    title: '电商后台数据管理',
    img: '/imgs/amazon-clone.png',
    demo: 'https://your-live-demo-link.com',
    repo: 'https://github.com/dxn-forlearning-xd/big-projects/tree/main/e-commerce-dashboard',
    stack: ['React', 'Ant Design', 'Nivo Chart'],
  },
  {
    title: '众筹页面',
    img: '/imgs/crowdfunding-product-page.png',
    demo: 'https://dxn-dashboard-xd.netlify.app/',
    repo: 'https://github.com/dxn-forlearning-xd/js-projects/tree/main/08-Crowdfunding%20product%20page',
    stack: ['HTML', 'CSS', 'JavaScript'],
  },
  {
    title: '官网宣传网页',
    img: '/imgs/agency-landing-page.png',
    demo: 'https://your-live-demo-link.com',
    repo: 'https://github.com/dxn-forlearning-xd/js-projects/tree/main/07-Agency%20landing%20page',
    stack: ['HTML', 'CSS'],
  },

  {
    title: '购物页面',
    img: '/imgs/product-list-with-cart.png',
    demo: 'https://your-live-demo-link.com',
    repo: 'https://github.com/dxn-forlearning-xd/js-projects/tree/main/01-product%20list%20with%20cart',
    stack: ['HTML', 'CSS', 'JavaScript'],
  },
  {
    title: '小费计算器',
    img: '/imgs/tip-calculator-app.png',
    demo: 'https://your-live-demo-link.com',
    repo: 'https://github.com/dxn-forlearning-xd/js-projects/tree/main/06-Tip%20calculator%20app',
    stack: ['HTML', 'CSS', 'JavaScript'],
  },
];

const ProjectsSection = ({ language }) => {
  return (
    <section id="projects" className="py-20 bg-[#eff6f9]">
      <h1 className="text-4xl font-bold text-center text-[#162F64]">
        {language === 'en' ? 'Projects' : '项目'}
      </h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 px-10 mt-10">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-[#ffffff] p-6 rounded-lg shadow-lg hover:shadow-xl transition transform hover:scale-105 duration-300"
          >
            <div className="w-full h-80 overflow-hidden">
              <img
                className="w-full  rounded-md"
                src={project.img}
                alt={project.title}
              />
            </div>

            <p className="mt-4 flex justify-center text-gray-700">
              {project.title}
            </p>

            <div className="flex gap-4 mt-4 justify-center">
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-[#72B6C2] text-white rounded-md hover:bg-[#5AA4B2] transition"
              >
                {language === 'en' ? 'Live Demo' : '项目展示'}
              </a>

              <a
                href={project.repo}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 border border-[#162F64] text-[#162F64] rounded-md hover:bg-[#072A3A] hover:text-white transition"
              >
                GitHub
              </a>
            </div>

            <div className="flex flex-wrap gap-2 mt-4 justify-center">
              {project.stack.map((tech, i) => (
                <span
                  key={i}
                  className="bg-gray-200 text-gray-700 px-2 py-1 rounded-md text-xs my-2"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
