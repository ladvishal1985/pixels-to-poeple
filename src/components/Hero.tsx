import { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Mail, Phone, Award, FileText } from 'lucide-react';
import ResumeModal from './ResumeModal';

const fade = { hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0 } };

export default function Hero() {
  const [resumeOpen, setResumeOpen] = useState(false);

  return (
    <section className="hero" id="hero">
      <div className="hero-inner">
        {/* Left — text */}
        <motion.div
          initial="hidden"
          animate="show"
          variants={{ show: { transition: { staggerChildren: 0.1 } } }}
        >
          <motion.div className="hero-badge" variants={fade}>
            <Award size={14} />
            IIT Roorkee Certified · UI/UX Designer
          </motion.div>

          <motion.h1 className="hero-name" variants={fade}>
            Swati Lad
          </motion.h1>

          <motion.p className="hero-role" variants={fade}>
            UI/UX Designer · UX Researcher
          </motion.p>

          <motion.p className="hero-bio" variants={fade}>
            Turning user insights into delightful, accessible interfaces — from
            front-end development roots to rigorous UX research. 3+ years
            shaping digital products at Marc Dinning Software, now deepened by
            an executive programme at IIT Roorkee.
          </motion.p>

          <motion.div className="hero-actions" variants={fade}>
            <a href="#case-study" className="btn btn-primary">
              View Case Study
            </a>
            <button className="btn btn-outline" onClick={() => setResumeOpen(true)}>
              <FileText size={16} />
              View Resume
            </button>
            <a href="#contact" className="btn btn-ghost">
              Contact Me
            </a>
          </motion.div>

          <motion.div className="hero-stats" variants={fade}>
            <div>
              <div className="hero-stat-num">3+</div>
              <div className="hero-stat-label">Years Experience</div>
            </div>
            <div>
              <div className="hero-stat-num">8</div>
              <div className="hero-stat-label">Case Study Phases</div>
            </div>
            <div>
              <div className="hero-stat-num">IIT</div>
              <div className="hero-stat-label">Roorkee Certified</div>
            </div>
          </motion.div>
        </motion.div>

        {/* Right — card */}
        <motion.div
          className="hero-visual"
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <div className="hero-card">
            <div className="hero-avatar" aria-hidden="true">SL</div>
            <div className="hero-card-name">Swati Lad</div>
            <div className="hero-card-role">UI/UX Designer &amp; UX Researcher</div>

            <div className="hero-card-divider" />

            <div className="hero-card-item">
              <div className="hero-card-icon" aria-hidden="true">
                <MapPin size={14} />
              </div>
              Pune, India
            </div>
            <div className="hero-card-item">
              <div className="hero-card-icon" aria-hidden="true">
                <Mail size={14} />
              </div>
              swati11webdesigner@gmail.com
            </div>
            <div className="hero-card-item">
              <div className="hero-card-icon" aria-hidden="true">
                <Phone size={14} />
              </div>
              +91 8600100864
            </div>

            <div className="hero-cert-badge">
              <div className="hero-cert-label">Executive Certification</div>
              <div className="hero-cert-name">
                UI UX Design — iHUB DivyaSampark, IIT Roorkee
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <ResumeModal open={resumeOpen} onClose={() => setResumeOpen(false)} />
    </section>
  );
}
