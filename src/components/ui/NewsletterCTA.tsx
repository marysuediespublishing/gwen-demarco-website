import React, { useState } from 'react';

interface NewsletterCTAProps {
  variant?: 'header' | 'hero' | 'sidebar' | 'footer' | 'exit-intent' | 'mobile';
  text?: string;
  className?: string;
  showModal?: boolean;
  onModalToggle?: (isOpen: boolean) => void;
}

const NewsletterCTA: React.FC<NewsletterCTAProps> = ({
  variant = 'header',
  text,
  className = '',
  showModal: externalShowModal,
  onModalToggle
}) => {
  const [internalShowModal, setInternalShowModal] = useState(false);
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState('');

  // Use external modal state if provided, otherwise use internal state
  const showModal = externalShowModal !== undefined ? externalShowModal : internalShowModal;
  const setShowModal = onModalToggle || setInternalShowModal;

  const getButtonText = () => {
    if (text) return text;

    switch (variant) {
      case 'header':
        return 'Free Book';
      case 'hero':
        return 'Get Your Free Paranormal Romance';
      case 'sidebar':
        return 'Join Newsletter';
      case 'footer':
        return 'Subscribe';
      case 'exit-intent':
        return 'Wait! Get Free Books';
      case 'mobile':
        return '📧';
      default:
        return 'Join Newsletter';
    }
  };

  const getModalContent = () => {
    switch (variant) {
      case 'exit-intent':
        return {
          title: "Wait! Don't Leave Empty-Handed",
          subtitle: "Get Your FREE Paranormal Romance Pack",
          description: "Join fellow fans of the weird and wonderful and get exclusive content before you go!",
          benefits: [
            "Free starter pack with bonus stories",
            "Early access to new releases",
            "Exclusive supernatural species guides",
            "Behind-the-scenes writing insights"
          ]
        };
      default:
        return {
          title: "Join the Supernatural Side",
          subtitle: "Get Your Free Book",
          description: "Join readers who love snarky heroines, grumpy heroes, and all things weird and wonderful. Get exclusive content, early access to new releases, and behind-the-scenes peeks into the supernatural world.",
          benefits: [
            "Free starter pack with bonus content",
            "Early access to new releases",
            "Exclusive supernatural creature guides",
            "Behind-the-scenes writing insights",
            "Reader-only contests and giveaways",
            "No spam, ever - unsubscribe anytime"
          ]
        };
    }
  };

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleCTAClick = () => {
    setShowModal(true);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!name.trim()) {
      setError('Please enter your name');
      return;
    }

    if (!validateEmail(email)) {
      setError('Please enter a valid email address');
      return;
    }

    setIsSubmitting(true);

    try {
      // Submit to API endpoint
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          email,
          source: `newsletter-${variant}`
        }),
      });

      const data = await response.json();

      if (data.success) {
        setIsSuccess(true);

        // Close modal after success
        setTimeout(() => {
          setShowModal(false);
          setIsSuccess(false);
          setEmail('');
          setName('');
        }, 3000);
      } else {
        setError(data.error || 'Something went wrong. Please try again.');
      }

    } catch (err) {
      console.error('Newsletter signup failed:', err);
      setError('Network error. Please check your connection and try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setError('');
  };

  const content = getModalContent();

  return (
    <>
      {/* CTA Button */}
      <button
        onClick={handleCTAClick}
        className={className || `
          btn btn-primary transition-all duration-200 hover:-translate-y-0.5
          focus:outline-none focus:ring-2 focus:ring-ember-orange focus:ring-offset-2 focus:ring-offset-shadow-black
        `}
        aria-label={`Open newsletter signup - ${getButtonText()}`}
        data-testid={`newsletter-cta-${variant}`}
      >
        {getButtonText()}
      </button>

      {/* Modal */}
      {showModal && (
        <div
          className="fixed inset-0 bg-shadow-black/80 backdrop-blur-sm z-[100] flex items-start justify-center p-4 pt-16"
          onClick={handleCloseModal}
        >
          <div
            className="relative bg-gradient-to-br from-shadow-black via-midnight-purple to-shadow-black p-8 rounded-2xl max-w-lg w-full max-h-[90vh] overflow-y-auto border border-mystic-violet/30 shadow-violet-glow"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={handleCloseModal}
              className="absolute top-4 right-4 text-moon-silver/60 hover:text-moon-silver transition-colors"
              aria-label="Close newsletter signup"
              data-testid="newsletter-modal-close"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {!isSuccess ? (
              <>
                {/* Header */}
                <div className="text-center mb-6">
                  <h2 className="text-2xl font-bold font-primary text-bone-white mb-2">
                    {content.title}
                  </h2>
                  <p className="text-ember-orange font-medium">
                    {content.subtitle}
                  </p>
                  <p className="text-moon-silver/80 mt-3">
                    {content.description}
                  </p>
                </div>

                {/* Benefits List */}
                <div className="mb-6">
                  <ul className="space-y-2">
                    {content.benefits.map((benefit, index) => (
                      <li
                        key={index}
                        className="flex items-center space-x-3"
                      >
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

                {/* Form */}
                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Name Input */}
                  <div>
                    <label htmlFor="newsletter-name" className="block text-sm font-medium text-moon-silver mb-2">
                      Your Name
                    </label>
                    <input
                      id="newsletter-name"
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="input-mystic w-full"
                      placeholder="Enter your name"
                      required
                      disabled={isSubmitting}
                      data-testid="newsletter-name-input"
                    />
                  </div>

                  {/* Email Input */}
                  <div>
                    <label htmlFor="newsletter-email" className="block text-sm font-medium text-moon-silver mb-2">
                      Email Address
                    </label>
                    <input
                      id="newsletter-email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="input-mystic w-full"
                      placeholder="Enter your email address"
                      required
                      disabled={isSubmitting}
                      data-testid="newsletter-email-input"
                    />
                  </div>

                  {/* Error Message */}
                  {error && (
                    <div
                      className="text-red-400 text-sm bg-red-400/10 border border-red-400/30 rounded-lg p-3"
                      data-testid="newsletter-error"
                    >
                      {error}
                    </div>
                  )}

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full btn btn-primary py-3 text-base font-semibold relative overflow-hidden disabled:opacity-50 disabled:cursor-not-allowed"
                    data-testid="newsletter-submit"
                  >
                    {isSubmitting ? (
                      <div className="flex items-center justify-center space-x-2">
                        <div className="w-5 h-5 border-2 border-bone-white border-t-transparent rounded-full animate-spin" />
                        <span>Joining...</span>
                      </div>
                    ) : (
                      'Get Your Free Book Now'
                    )}
                  </button>
                </form>

                {/* Privacy Note */}
                <div className="mt-4 text-center">
                  <p className="text-xs text-moon-silver/60">
                    No spam ever. Unsubscribe anytime. We respect your privacy.
                  </p>
                </div>
              </>
            ) : (
              /* Success State */
              <div
                className="text-center py-8"
                data-testid="newsletter-success"
              >
                <div className="text-6xl mb-4">✨</div>
                <h3 className="text-2xl font-bold font-primary text-bone-white mb-4">
                  Welcome to the Supernatural Side!
                </h3>
                <p className="text-moon-silver/80 mb-6">
                  You're now part of Gwen's exclusive reader community. Check your email for your free books and get ready for snarky heroines and grumpy heroes!
                </p>
                <div className="bg-ember-orange/10 border border-ember-orange/30 rounded-lg p-4">
                  <p className="text-ember-orange text-sm font-medium">
                    🔮 Your free paranormal romance pack is on its way!
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default NewsletterCTA;
