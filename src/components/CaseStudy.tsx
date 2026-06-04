import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import {
  Image,
  Palette,
  BookOpen,
  MousePointerClick,
  ThumbsUp,
  ClipboardList,
  FileText,
  LayoutDashboard,
  ExternalLink,
  FileDown,
} from 'lucide-react';

const FIGMA_BASE = 'https://www.figma.com/design/B7o3nI1RgPOZ5ImL5F6jt7/Assignment';

interface Phase {
  num: string;
  icon: React.ReactNode;
  title: string;
  desc: string;
  figmaNode?: string;
  docLabel?: string;
}

const phases: Phase[] = [
  {
    num: 'Phase 01',
    icon: <Image size={26} />,
    title: 'Creating Assets for a Poster in Figma',
    desc: 'Designed the Tracto Healthcare app promotional poster using images, shapes, gradients, and Figma plugins. Established the visual language that would carry through the entire project.',
    figmaNode: '56-2',
  },
  {
    num: 'Phase 02',
    icon: <Palette size={26} />,
    title: 'Designing an Aesthetic Graphic Poster',
    desc: 'Produced a refined promotional poster applying graphic design principles — visual hierarchy, balance, and brand consistency — to communicate the Tracto Healthcare value proposition.',
    figmaNode: '175-6',
  },
  {
    num: 'Phase 03',
    icon: <BookOpen size={26} />,
    title: 'Creating and Defining a Style Guide',
    desc: 'Built a full visual design system: typography scale, colour tokens, spacing rules, iconography standards, and component specifications. The single source of truth for the product\'s visual identity.',
    figmaNode: '0-1',
  },
  {
    num: 'Phase 04',
    icon: <MousePointerClick size={26} />,
    title: 'Creating Components and Prototyping Flows',
    desc: 'Designed radio button components with hover and click states. Built a complete signup screen prototype featuring micro-interactions and smooth transition flows.',
    figmaNode: '62-2',
  },
  {
    num: 'Phase 05',
    icon: <ThumbsUp size={26} />,
    title: 'Good and Bad UX Design Examples',
    desc: 'Created contrasting screen pairs illustrating UX best practices versus anti-patterns. Applied cognitive frameworks — Fitts\'s Law and the Law of Common Region — to document specific usability failures.',
    figmaNode: '138-180',
  },
  {
    num: 'Phase 06',
    icon: <ClipboardList size={26} />,
    title: 'Heuristic Evaluation Report — Amazon App',
    desc: 'Conducted a systematic heuristic evaluation using Nielsen\'s 10 usability heuristics on the Amazon mobile app. Documented findings by severity: minor, major, and critical issues with actionable recommendations.',
    docLabel: 'PDF Report',
  },
  {
    num: 'Phase 07',
    icon: <FileText size={26} />,
    title: 'User Research Plan — Tracto Healthcare',
    desc: 'Authored a comprehensive user research plan covering methodology selection, participant criteria, screening questionnaires, research stages, and a discussion guide for moderated sessions.',
    docLabel: 'Word Doc',
  },
  {
    num: 'Phase 08',
    icon: <LayoutDashboard size={26} />,
    title: 'UI/UX Design Evaluation',
    desc: 'Completed two assignment evaluations: a login screen redesign with WCAG accessibility enhancements (contrast ratios, focus states, error messaging), and a heuristic evaluation of an e-commerce domain.',
  },
];

const ddPhases = [
  { icon: '🔍', label: 'Discover', sub: 'User research\n& heuristics' },
  { icon: '🎯', label: 'Define', sub: 'Problem framing\n& style guide' },
  { icon: '✏️', label: 'Develop', sub: 'Components\n& prototypes' },
  { icon: '✅', label: 'Deliver', sub: 'Evaluation\n& refinement' },
];

export default function CaseStudy() {
  const [ref, inView] = useInView<HTMLElement>();

  return (
    <section className="case-study" id="case-study" ref={ref}>
      <div className="container">
        <div className="cs-intro">
          <p className="section-label">Flagship Case Study</p>
          <h2 className="section-title">Tracto Healthcare</h2>
          <p className="section-subtitle">
            An end-to-end UX project spanning poster design, visual systems,
            interactive prototyping, and rigorous usability evaluation — 8 phases
            delivered as part of the IIT Roorkee programme.
          </p>
        </div>

        <div className="phase-timeline">
          {phases.map((phase, i) => (
            <motion.div
              key={phase.num}
              className="phase"
              initial={{ opacity: 0, x: -24 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.07 }}
            >
              <div className="phase-dot" aria-hidden="true">
                {phase.icon}
              </div>

              <div className="phase-content">
                <div className="phase-num">{phase.num}</div>
                <h3 className="phase-title">{phase.title}</h3>
                <p className="phase-desc">{phase.desc}</p>

                <div className="phase-links">
                  {phase.figmaNode && (
                    <a
                      href={`${FIGMA_BASE}?node-id=${phase.figmaNode}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="figma-btn"
                      aria-label={`Open ${phase.title} in Figma`}
                    >
                      <ExternalLink size={13} />
                      View in Figma
                    </a>
                  )}
                  {phase.docLabel && (
                    <span className="phase-doc-btn" aria-label={`${phase.docLabel} — available on request`}>
                      <FileDown size={13} />
                      {phase.docLabel} (available on request)
                    </span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Double Diamond */}
        <motion.div
          className="double-diamond"
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <p className="dd-title">UX Process — Double Diamond</p>
          <div className="dd-grid">
            {ddPhases.map(p => (
              <div className="dd-phase" key={p.label}>
                <div className="dd-icon" aria-hidden="true">{p.icon}</div>
                <div className="dd-label">{p.label}</div>
                <div className="dd-sub" style={{ whiteSpace: 'pre-line' }}>{p.sub}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
