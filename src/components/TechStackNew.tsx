import "./styles/TechStackNew.css";

interface TechItem {
  name: string;
  icon: string;
  url: string;
}

const techStack: TechItem[][] = [
  [
    { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg", url: "https://python.org" },
    { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
    { name: "HTML", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg", url: "https://developer.mozilla.org/en-US/docs/Web/HTML" },
    { name: "CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg", url: "https://developer.mozilla.org/en-US/docs/Web/CSS" },
    { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", url: "https://react.dev" },
    { name: "Three.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/threejs/threejs-original.svg", url: "https://threejs.org" },
    { name: "Tailwind", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg", url: "https://tailwindcss.com" },
    { name: "Vite", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vitejs/vitejs-original.svg", url: "https://vitejs.dev" },
    { name: "Scikit-learn", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/scikitlearn/scikitlearn-original.svg", url: "https://scikit-learn.org" },
    { name: "Pandas", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg", url: "https://pandas.pydata.org" },
    { name: "NumPy", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg", url: "https://numpy.org" },
    { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg", url: "https://mysql.com" },
  ],
  [
    { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg", url: "https://mongodb.com" },
    { name: "Oracle", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/oracle/oracle-original.svg", url: "https://oracle.com" },
    { name: "LangChain", icon: "https://cdn.simpleicons.org/langchain/1C3C3C", url: "https://langchain.com" },
    { name: "OpenAI", icon: "https://cdn.simpleicons.org/openai/412991", url: "https://openai.com" },
    { name: "Jupyter", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jupyter/jupyter-original.svg", url: "https://jupyter.org" },
    { name: "Matplotlib", icon: "https://cdn.simpleicons.org/matplotlib/11557c", url: "https://matplotlib.org" },
    { name: "Seaborn", icon: "https://cdn.simpleicons.org/seaborn/3776AB", url: "https://seaborn.pydata.org" },
    { name: "Framer Motion", icon: "https://cdn.simpleicons.org/framer/0055FF", url: "https://framer.com/motion" },
    { name: "GSAP", icon: "https://cdn.simpleicons.org/greensock/88CE02", url: "https://gsap.com" },
    { name: "WebGL", icon: "https://cdn.simpleicons.org/webgl/990000", url: "https://www.khronos.org/webgl/" },
  ],
  [
    { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg", url: "https://git-scm.com" },
    { name: "GitHub", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg", url: "https://github.com" },
    { name: "VS Code", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg", url: "https://code.visualstudio.com" },
    { name: "Figma", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg", url: "https://figma.com" },
    { name: "Photoshop", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-original.svg", url: "https://adobe.com/products/photoshop" },
    { name: "Blender", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/blender/blender-original.svg", url: "https://blender.org" },
    { name: "Google Colab", icon: "https://cdn.simpleicons.org/googlecolab/F9AB00", url: "https://colab.research.google.com" },
    { name: "yfinance", icon: "https://cdn.simpleicons.org/yahoo/6001D2", url: "https://pypi.org/project/yfinance/" },
  ],
  [
    { name: "FAISS", icon: "https://cdn.simpleicons.org/meta/0467DF", url: "https://github.com/facebookresearch/faiss" },
    { name: "Assembly", icon: "https://cdn.simpleicons.org/gnuassembly/654FF0", url: "https://en.wikipedia.org/wiki/X86_assembly_language" },
    { name: "Responsive Design", icon: "https://cdn.simpleicons.org/css3/1572B6", url: "https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Responsive_Design" },
    { name: "UI/UX", icon: "https://cdn.simpleicons.org/figma/F24E1E", url: "https://www.interaction-design.org/literature/topics/ui-design" },
  ],
  [
    { name: "RAG", icon: "https://cdn.simpleicons.org/huggingface/FFD21E", url: "https://huggingface.co" },
    { name: "Neural Networks", icon: "https://cdn.simpleicons.org/tensorflow/FF6F00", url: "https://en.wikipedia.org/wiki/Neural_network" },
  ],
];

const TechStackNew = () => {
  return (
    <div className="techstack-new">
      <div className="techstack-video-container">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="techstack-video"
        >
          <source src="/video/video.webm" type="video/webm" />
        </video>
        <div className="techstack-overlay"></div>
      </div>

      <div className="techstack-content">
        <h2>Tech Stack</h2>
        
        <div className="techstack-pyramid">
          {techStack.map((row, rowIndex) => (
            <div key={rowIndex} className="techstack-row">
              {row.map((tech, techIndex) => (
                <a
                  key={techIndex}
                  href={tech.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="techstack-item"
                  title={tech.name}
                  data-cursor="disable"
                >
                  <img src={tech.icon} alt={tech.name} />
                  <span>{tech.name}</span>
                </a>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TechStackNew;
