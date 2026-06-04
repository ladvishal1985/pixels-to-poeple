import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import { PenTool, Code2, Search, Monitor } from 'lucide-react';

const skillGroups = [
  {
    icon: <PenTool size={20} />,
    name: 'Design Tools',
    skills: ['Figma', 'Adobe Photoshop', 'Adobe Illustrator', 'Balsamiq'],
  },
  {
    icon: <Code2 size={20} />,
    name: 'Front-End Development',
    skills: ['HTML5', 'CSS3', 'Bootstrap', 'JavaScript', 'jQuery', 'AngularJS'],
  },
  {
    icon: <Search size={20} />,
    name: 'UX Methods',
    skills: [
      'Heuristic Evaluation',
      'User Research',
      'Wireframing',
      'Prototyping',
      'Style Guides',
      'Usability Testing',
      'WCAG Accessibility',
    ],
  },
  {
    icon: <Monitor size={20} />,
    name: 'Platforms',
    skills: ['Web', 'Android', 'iOS', 'Email Templates', 'Social Media'],
  },
];

export default function Skills() {
  const [ref, inView] = useInView<HTMLElement>();

  return (
    <section className="skills" id="skills" ref={ref}>
      <div className="container">
        <div className="section-header-centered">
          <p className="section-label">Expertise</p>
          <h2 className="section-title">Skills &amp; Tools</h2>
          <p className="section-subtitle">
            A full-stack design toolkit — from research methods through to production code.
          </p>
        </div>

        <div className="skills-grid">
          {skillGroups.map((group, i) => (
            <motion.div
              key={group.name}
              className="skill-group"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <div className="skill-group-header">
                <div className="skill-group-icon" aria-hidden="true">
                  {group.icon}
                </div>
                <span className="skill-group-name">{group.name}</span>
              </div>
              <div className="skill-tags">
                {group.skills.map(skill => (
                  <span key={skill} className="tag tag-teal">{skill}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
