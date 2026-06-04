import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import { GraduationCap, Monitor } from 'lucide-react';

const education = [
  {
    icon: <GraduationCap size={22} />,
    degree: 'BE Computer Engineering',
    institution: 'Sardar Patel University, Gujarat',
    year: '2009',
  },
  {
    icon: <Monitor size={22} />,
    degree: 'Diploma in Web Designing',
    institution: 'Edit Institute, Pune',
    year: 'Post-graduation',
  },
];

export default function Education() {
  const [ref, inView] = useInView<HTMLElement>();

  return (
    <section className="education" id="education" ref={ref}>
      <div className="container">
        <p className="section-label">Academic Background</p>
        <h2 className="section-title">Education</h2>

        <div className="edu-grid">
          {education.map((e, i) => (
            <motion.div
              key={e.degree}
              className="edu-card"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <div className="edu-icon" aria-hidden="true">{e.icon}</div>
              <div>
                <div className="edu-degree">{e.degree}</div>
                <div className="edu-inst">{e.institution}</div>
                <div className="edu-year">{e.year}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
