import { useEffect } from 'react';
import { X, Download } from 'lucide-react';

interface ResumeModalProps {
  open: boolean;
  onClose: () => void;
}

export default function ResumeModal({ open, onClose }: ResumeModalProps) {
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose();
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      className="viewer-overlay"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Resume viewer"
    >
      <button className="viewer-close" onClick={onClose} aria-label="Close">
        <X size={20} />
      </button>

      <div className="viewer-scroll" onClick={e => e.stopPropagation()}>
        <div className="viewer-inner">
          <div className="viewer-topbar">
            <span className="viewer-hint">Swati Lad — Resume</span>
            <a
              href="/Swati_Resume.pdf"
              download
              className="btn btn-primary"
              style={{ padding: '8px 18px', fontSize: '13px' }}
            >
              <Download size={14} />
              Download PDF
            </a>
          </div>

          <iframe
            src="/Swati_Resume.pdf#toolbar=0&navpanes=0&scrollbar=1"
            title="Swati Lad Resume"
            className="viewer-pdf"
          />
        </div>
      </div>
    </div>
  );
}
