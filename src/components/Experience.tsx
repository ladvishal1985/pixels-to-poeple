import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';

const experiences = [
  {
    company: 'Marc Dinning Software Pvt. Ltd.',
    location: 'Kharadi, Pune',
    period: 'March 2014 – Present',
    role: 'UI/UX Designer & Front-End Developer',
    bullets: [
      'Eat2Eat: Designed interactive floor-plan UI for restaurant management, enabling staff to visualise seating in real time.',
      'Created HTML5/CSS3 email templates and Facebook page templates aligned to Eat2Eat brand guidelines.',
      'Gaming Website "Legend of Leagues": Led full UI/UX design and front-end implementation using HTML5, CSS3, and jQuery — from wireframes to production.',
      'Collaborated with product managers to translate requirements into accessible, responsive interfaces across web and mobile breakpoints.',
    ],
  },
  {
    company: 'CMO Global',
    location: 'Remote (Freelance)',
    period: 'December 2015',
    role: 'Freelance UI/UX Designer',
    bullets: [
      'Designed a comprehensive Material Design icon set for a mobile application.',
      'Ensured visual consistency with Google\'s Material Design guidelines — optical sizing, grid alignment, and weight balance.',
      'Delivered production-ready SVG assets ready for developer handoff.',
    ],
  },
];

export default function Experience() {
  const [ref, inView] = useInView<HTMLElement>();

  return (
    <section className="experience" id="experience" ref={ref}>
      <div className="container">
        <p className="section-label">Career</p>
        <h2 className="section-title">Work Experience</h2>
        <p className="section-subtitle">
          3+ years creating digital products at the intersection of design and front-end engineering.
        </p>

        <div className="exp-list">
          {experiences.map((exp, i) => (
            <motion.div
              key={exp.company}
              className="exp-item"
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.15 }}
            >
              <div className="exp-meta">
                <div className="exp-company">{exp.company}</div>
                <div className="exp-location">{exp.location}</div>
                <span className="exp-period">{exp.period}</span>
              </div>
              <div>
                <div className="exp-role">{exp.role}</div>
                <ul className="exp-bullets">
                  {exp.bullets.map(b => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
