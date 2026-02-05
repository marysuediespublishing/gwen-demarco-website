import React, { useState, useEffect, useCallback, useRef } from 'react';

/**
 * Newsletter modal with Mailchimp integration.
 * Renders as a hidden modal that opens when a 'open-newsletter-modal' custom event is dispatched.
 * Any button on the site can trigger it via: document.dispatchEvent(new CustomEvent('open-newsletter-modal'))
 */
const NewsletterCTA: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  const openModal = useCallback(() => setIsOpen(true), []);
  const closeModal = useCallback(() => setIsOpen(false), []);

  // Listen for custom event to open the modal
  useEffect(() => {
    const handler = () => openModal();
    document.addEventListener('open-newsletter-modal', handler);
    return () => document.removeEventListener('open-newsletter-modal', handler);
  }, [openModal]);

  // Focus trap and ESC to close
  useEffect(() => {
    if (!isOpen) return;

    // Focus the close button when modal opens
    closeButtonRef.current?.focus();

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        closeModal();
        return;
      }

      // Focus trap
      if (e.key === 'Tab' && modalRef.current) {
        const focusable = modalRef.current.querySelectorAll<HTMLElement>(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        const first = focusable[0];
        const last = focusable[focusable.length - 1];

        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last?.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first?.focus();
        }
      }
    };

    // Prevent body scroll
    document.body.style.overflow = 'hidden';
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = '';
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, closeModal]);

  if (!isOpen) return null;

  const benefits = [
    "Free starter content with bonus material",
    "Early access to new releases",
    "Exclusive character backstories",
    "Behind-the-scenes writing updates",
  ];

  return (
    <div
      className="fixed inset-0 bg-shadow-black/80 backdrop-blur-sm z-[100] flex items-start justify-center p-4 pt-16 animate-fade-in"
      onClick={closeModal}
      role="dialog"
      aria-modal="true"
      aria-label="Newsletter signup"
    >
      <div
        ref={modalRef}
        className="relative bg-gradient-to-br from-shadow-black via-midnight-purple to-shadow-black p-8 rounded-2xl max-w-lg w-full max-h-[90vh] overflow-y-auto border border-mystic-violet/30 shadow-violet-glow animate-slide-up"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          ref={closeButtonRef}
          onClick={closeModal}
          className="absolute top-4 right-4 text-moon-silver/60 hover:text-moon-silver transition-colors z-10"
          aria-label="Close newsletter signup"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Header */}
        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold font-primary text-bone-white mb-2">
            Join the Supernatural Side
          </h2>
          <p className="text-moon-silver/80 mt-3">
            Get exclusive content, early access to new releases, and behind-the-scenes peeks into the weird and wonderful worlds of urban fantasy.
          </p>
        </div>

        {/* Benefits List */}
        <div className="mb-6">
          <ul className="space-y-2">
            {benefits.map((benefit, index) => (
              <li key={index} className="flex items-center space-x-3">
                <div className="w-5 h-5 bg-ember-orange rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-3 h-3 text-shadow-black" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-moon-silver text-sm">{benefit}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Mailchimp Form */}
        <div className="mailchimp-form">
          <form
            action="https://gwendemarco.us10.list-manage.com/subscribe/post?u=0c90903297efa3d16036ca013&amp;id=e084610bed&amp;f_id=00ef48e4f0"
            method="post"
            target="_blank"
            noValidate
          >
            <div>
              <label htmlFor="mce-EMAIL" className="block text-sm font-medium text-moon-silver mb-2">
                Email Address
              </label>
              <input
                type="email"
                name="EMAIL"
                id="mce-EMAIL"
                required
                placeholder="Enter your email address"
                className="w-full px-4 py-3 rounded-lg bg-white/10 border-2 border-white/20 text-bone-white placeholder-moon-silver/60 focus:outline-none focus:border-ember-orange focus:bg-white/15 transition-all text-base"
              />
            </div>

            {/* Mailchimp bot-trap honeypot - must be hidden */}
            <div aria-hidden="true" style={{ position: 'absolute', left: '-5000px' }}>
              <input
                type="text"
                name="b_0c90903297efa3d16036ca013_e084610bed"
                tabIndex={-1}
                defaultValue=""
              />
            </div>

            <button
              type="submit"
              className="w-full btn btn-primary py-3 text-base font-semibold mt-4"
            >
              Subscribe Now for Free Ebook
            </button>
          </form>
        </div>

        {/* Privacy Note */}
        <div className="mt-4 text-center">
          <p className="text-xs text-moon-silver/60">
            No spam ever. Unsubscribe anytime. We respect your privacy.
          </p>
        </div>
      </div>
    </div>
  );
};

export default NewsletterCTA;
