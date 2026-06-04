import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import { BadgeCheck, Calendar, Hash, Clock } from 'lucide-react';

export default function Certification() {
  const [ref, inView] = useInView<HTMLElement>();

  return (
    <section className="certification" id="certification" ref={ref}>
      <div className="container">
        <div className="section-header-centered">
          <p className="section-label">Credential</p>
          <h2 className="section-title">Executive Certification</h2>
          <p className="section-subtitle">
            A government-backed programme at the frontier of UX education in India.
          </p>
        </div>

        <motion.div
          className="cert-card"
          initial={{ opacity: 0, y: 32 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          {/* Badge */}
          <div className="cert-badge-icon" aria-hidden="true">
            <BadgeCheck size={36} />
            <div className="cert-badge-text">IIT ROORKEE</div>
          </div>

          {/* Content */}
          <div>
            <div className="cert-tag">
              <BadgeCheck size={12} />
              Verified Certification
            </div>

            <h3 className="cert-title">
              Executive Post Graduate Certification in UI UX Design
            </h3>

            <p className="cert-issuer">
              iHUB DivyaSampark, IIT Roorkee · in association with Intellipaat
            </p>

            <p className="cert-desc">
              A joint initiative of the Department of Science &amp; Technology,
              Government of India and IIT Roorkee — covering the full design
              lifecycle from user research and wireframing through to high-fidelity
              prototyping, design systems, and usability evaluation. An 8-month
              executive programme with rigorous project assessments and peer review.
            </p>

            <div className="cert-meta">
              <div className="cert-meta-item">
                <Calendar size={14} />
                <span>Issued: <strong>January 2026</strong></span>
              </div>
              <div className="cert-meta-item">
                <Hash size={14} />
                <span>Certificate ID: <strong>IPTIH26012099</strong></span>
              </div>
              <div className="cert-meta-item">
                <Clock size={14} />
                <span>Duration: <strong>8-Month Executive Programme</strong></span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
