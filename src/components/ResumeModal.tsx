import { useEffect } from 'react';
import { X, Download, ExternalLink } from 'lucide-react';

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
            <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
              <a
                href="/Swati_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-ghost"
                style={{ padding: '8px 14px', fontSize: '13px' }}
              >
                <ExternalLink size={13} />
                Open in tab
              </a>
              <a
                href="/Swati_Resume.pdf"
                download
                className="btn btn-primary"
                style={{ padding: '8px 16px', fontSize: '13px' }}
              >
                <Download size={13} />
                Download PDF
              </a>
            </div>
          </div>

          {/* <object> works on Chrome/Firefox/desktop Safari.
              iOS Safari falls through to the inner fallback div. */}
          <object
            data="/Swati_Resume.pdf"
            type="application/pdf"
            className="viewer-pdf"
            aria-label="Resume PDF"
          >
            <div className="viewer-pdf-fallback">
              <p>PDF preview isn't supported on this browser.</p>
              <a
                href="/Swati_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline"
              >
                <ExternalLink size={15} />
                Open PDF in new tab
              </a>
              <a href="/Swati_Resume.pdf" download className="btn btn-primary">
                <Download size={15} />
                Download PDF
              </a>
            </div>
          </object>
        </div>
      </div>
    </div>
  );
}
