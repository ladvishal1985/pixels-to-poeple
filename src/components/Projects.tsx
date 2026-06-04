import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import { Utensils, Gamepad2, Smartphone } from 'lucide-react';

const projects = [
  {
    icon: <Utensils size={24} />,
    title: 'Eat2Eat',
    company: 'Marc Dinning Software',
    desc: 'Designed interactive floor-plan UIs, HTML5/CSS3 email templates, and Facebook page templates for a restaurant management platform. Balanced brand identity with dense functional UI needs.',
    tags: ['UI Design', 'HTML5/CSS3', 'Email Templates', 'Floor Plan UI'],
  },
  {
    icon: <Gamepad2 size={24} />,
    title: 'Legend of Leagues',
    company: 'Marc Dinning Software',
    desc: 'Full UI/UX design for a fantasy gaming website — from wireframes through to front-end implementation using HTML5, CSS3, and jQuery. Designed for engagement and competitive play clarity.',
    tags: ['UI/UX Design', 'HTML5', 'CSS3', 'jQuery', 'Gaming'],
  },
  {
    icon: <Smartphone size={24} />,
    title: 'Material Design Icon Set',
    company: 'CMO Global (Freelance)',
    desc: 'Created a consistent Material Design icon set for a mobile application. Adhered to Google\'s Material Design guidelines for density, optical sizing, and visual weight.',
    tags: ['Icon Design', 'Material Design', 'Mobile', 'Illustrator'],
  },
];

export default function Projects() {
  const [ref, inView] = useInView<HTMLElement>();

  return (
    <section className="other-projects" id="projects" ref={ref}>
      <div className="container">
        <p className="section-label">Work Experience Projects</p>
        <h2 className="section-title">Other Projects</h2>
        <p className="section-subtitle">
          Production work from 3+ years at Marc Dinning Software and freelance engagements.
        </p>

        <div className="projects-grid">
          {projects.map((p, i) => (
            <motion.div
              key={p.title}
              className="project-card"
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <div className="project-card-icon" aria-hidden="true">
                {p.icon}
              </div>
              <div className="project-card-title">{p.title}</div>
              <div className="project-card-company">{p.company}</div>
              <p className="project-card-desc">{p.desc}</p>
              <div className="project-card-tags">
                {p.tags.map(t => (
                  <span key={t} className="tag">{t}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
