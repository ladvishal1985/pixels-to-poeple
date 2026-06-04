import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import { Code2, Search, Layers, GraduationCap } from 'lucide-react';

const highlights = [
  {
    icon: <Code2 size={20} />,
    title: 'Front-End Foundations',
    desc: 'Started as a front-end developer — HTML5, CSS3, jQuery, AngularJS — building a deep intuition for what is and isn\'t feasible in production.',
  },
  {
    icon: <Search size={20} />,
    title: 'Research-Led Design',
    desc: 'Evolved into UX research: heuristic evaluations, user research plans, usability testing, and accessibility audits (WCAG compliance).',
  },
  {
    icon: <Layers size={20} />,
    title: 'Visual Systems Thinking',
    desc: 'Crafts consistent design systems — typography scales, colour tokens, component libraries — that scale across product lines.',
  },
  {
    icon: <GraduationCap size={20} />,
    title: 'IIT Roorkee Programme',
    desc: 'Completed an 8-month executive certification in UI/UX Design — a joint initiative of DST, Govt. of India and IIT Roorkee.',
  },
];

export default function About() {
  const [ref, inView] = useInView<HTMLElement>();

  return (
    <section className="about" id="about" ref={ref}>
      <div className="container">
        <motion.div
          className="about-inner"
          initial={{ opacity: 0, y: 32 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="about-text">
            <p className="section-label">About</p>
            <h2 className="section-title">From Pixels to People</h2>
            <p>
              I started my career writing HTML and CSS, building email templates and
              interactive UIs. Over time, I realised the most impactful decisions
              weren't about code — they were about understanding the person on
              the other side of the screen.
            </p>
            <p>
              That shift led me to formal UX research: conducting heuristic
              evaluations using Nielsen's 10 principles, writing research plans,
              and applying cognitive frameworks like Fitts's Law and Laws of
              Gestalt to evaluate design quality.
            </p>
            <p>
              Today I work at the intersection of design systems, research, and
              front-end — translating user insights directly into prototypes and
              production-ready components. My IIT Roorkee programme deepened this
              practice with structured methodologies and peer critique.
            </p>
          </div>

          <div className="about-highlights">
            {highlights.map((h, i) => (
              <motion.div
                key={h.title}
                className="about-highlight-card"
                initial={{ opacity: 0, x: 24 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <div className="about-highlight-icon" aria-hidden="true">
                  {h.icon}
                </div>
                <div>
                  <div className="about-highlight-title">{h.title}</div>
                  <div className="about-highlight-desc">{h.desc}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
