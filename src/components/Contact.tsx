import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import { Mail, Phone, MapPin } from 'lucide-react';
import { useState, type FormEvent } from 'react';

const contactItems = [
  {
    icon: <Mail size={20} />,
    label: 'Email',
    value: 'swati11webdesigner@gmail.com',
    href: 'mailto:swati11webdesigner@gmail.com',
  },
  {
    icon: <Phone size={20} />,
    label: 'Phone',
    value: '+91 8600100864',
    href: 'tel:+918600100864',
  },
  {
    icon: <MapPin size={20} />,
    label: 'Location',
    value: 'Pune, India',
    href: null,
  },
];

export default function Contact() {
  const [ref, inView] = useInView<HTMLElement>();
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    const form = e.currentTarget;
    const name = (form.elements.namedItem('name') as HTMLInputElement).value;
    const subject = (form.elements.namedItem('subject') as HTMLInputElement).value;
    const message = (form.elements.namedItem('message') as HTMLTextAreaElement).value;
    const email = (form.elements.namedItem('email') as HTMLInputElement).value;

    // Opens native email client with pre-filled content
    const mailto = `mailto:swati11webdesigner@gmail.com?subject=${encodeURIComponent(subject || 'Portfolio Inquiry')}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`)}`;
    window.location.href = mailto;
    setSent(true);
    e.preventDefault();
  };

  return (
    <section className="contact" id="contact" ref={ref}>
      <div className="container">
        <div className="contact-inner">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <p className="section-label">Get In Touch</p>
            <h2 className="section-title">Let's Work Together</h2>
            <p className="section-subtitle">
              Open to full-time roles, freelance projects, and collaborations.
              Feel free to reach out — I'd love to hear about what you're building.
            </p>

            <div className="contact-info">
              {contactItems.map(item => (
                <div key={item.label} className="contact-info-item">
                  <div className="contact-info-icon" aria-hidden="true">
                    {item.icon}
                  </div>
                  <div>
                    <div className="contact-info-label">{item.label}</div>
                    {item.href ? (
                      <a href={item.href} className="contact-info-value" style={{ color: 'var(--dark)' }}>
                        {item.value}
                      </a>
                    ) : (
                      <div className="contact-info-value">{item.value}</div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right — form */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="contact-form">
              <h3 className="form-title">Send a Message</h3>

              {sent ? (
                <div style={{ padding: '24px', textAlign: 'center', color: 'var(--teal)', fontWeight: 600 }}>
                  Your email client should have opened. Looking forward to connecting!
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate>
                  <div className="form-group">
                    <label className="form-label" htmlFor="name">Full Name</label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      className="form-input"
                      placeholder="Your name"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label" htmlFor="email">Email Address</label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      className="form-input"
                      placeholder="you@example.com"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label" htmlFor="subject">Subject</label>
                    <input
                      id="subject"
                      name="subject"
                      type="text"
                      className="form-input"
                      placeholder="What's this about?"
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label" htmlFor="message">Message</label>
                    <textarea
                      id="message"
                      name="message"
                      className="form-textarea"
                      placeholder="Tell me about your project..."
                      required
                    />
                  </div>
                  <button type="submit" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
                    <Mail size={16} />
                    Send Message
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
