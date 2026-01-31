const fa = require('react-icons/fa');
const si = require('react-icons/si');

const faIcons = [
  "FaReact", "FaHtml5", "FaCss3Alt", "FaNodeJs", "FaPython", 
  "FaGithub", "FaDocker", "FaStripe", "FaDatabase", "FaCode", "FaServer", "FaTools"
];

const siIcons = [
  "SiNextdotjs", "SiTailwindcss", "SiJavascript", "SiThreedotjs", 
  "SiGreensock", "SiRedux", "SiTypescript", "SiExpress", "SiFastapi", 
  "SiFlask", "SiMongodb", "SiMysql", "SiSupabase", "SiVercel", "SiPostman", "SiFramer"
];

const missing = [];

faIcons.forEach(icon => {
  if (!fa[icon]) missing.push(`fa/${icon}`);
});

siIcons.forEach(icon => {
  if (!si[icon]) missing.push(`si/${icon}`);
});

if (missing.length > 0) {
  console.log("Missing icons:", missing.join(", "));
} else {
  console.log("All icons found!");
}
