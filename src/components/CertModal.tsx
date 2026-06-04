import { useEffect } from 'react';
import { X, ZoomIn } from 'lucide-react';

interface CertModalProps {
  open: boolean;
  onClose: () => void;
}

export default function CertModal({ open, onClose }: CertModalProps) {
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
      className="cert-modal-overlay"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Certificate viewer"
    >
      <button className="cert-modal-close" onClick={onClose} aria-label="Close certificate viewer">
        <X size={20} />
      </button>

      <div className="cert-modal-inner" onClick={e => e.stopPropagation()}>
        <div className="cert-modal-hint">
          <ZoomIn size={14} />
          View only — right-click disabled
        </div>
        <img
          src="/Executive%20Post%20Graduate%20Certification%20in%20UI%20UX%20Design%20(1).jpg"
          alt="Executive Post Graduate Certification in UI UX Design — iHUB DivyaSampark, IIT Roorkee"
          className="cert-modal-img"
          draggable={false}
          onContextMenu={e => e.preventDefault()}
        />
      </div>
    </div>
  );
}
