import React, { useState } from 'react';
import type { CollectionEntry } from 'astro:content';

interface BookCardProps {
  book: CollectionEntry<'books'> & { slug: string; coverUrl?: string };
  variant?: 'standard' | 'compact' | 'featured';
  showDescription?: boolean;
  showSeriesOrder?: boolean;
  className?: string;
}

const BookCard: React.FC<BookCardProps> = ({
  book,
  variant = 'standard',
  showDescription = true,
  showSeriesOrder = false,
  className = ''
}) => {
  const [imageError, setImageError] = useState(false);

  const getSpeciesBadgeColor = (species: string) => {
    const colors: Record<string, string> = {
      shifter: 'bg-ember-orange/20 text-ember-orange border border-ember-orange/40',
      vampire: 'bg-red-600/20 text-red-400 border border-red-600/40',
      fae: 'bg-purple-500/20 text-purple-300 border border-purple-500/40',
      ogre: 'bg-mystic-teal/20 text-mystic-teal border border-mystic-teal/40',
      auramancer: 'bg-mystic-violet/20 text-mystic-violet border border-mystic-violet/40',
      human: 'bg-fog-gray/20 text-fog-gray border border-fog-gray/40',
    };
    return colors[species.toLowerCase()] || 'bg-mystic-violet/20 text-mystic-violet border border-mystic-violet/40';
  };

  const getHeatLevelDisplay = (level: string) => {
    const displays: Record<string, { emoji: string; color: string }> = {
      mild: { emoji: '🔥', color: 'text-emerald-400' },
      medium: { emoji: '🔥🔥', color: 'text-amber-400' },
      spicy: { emoji: '🔥🔥🔥', color: 'text-red-400' },
    };
    return displays[level] || displays.medium;
  };

  const renderStars = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.4;

    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <span key={i} className="text-ember-orange">★</span>
      );
    }

    if (hasHalfStar) {
      stars.push(
        <span key="half" className="text-ember-orange">✬</span>
      );
    }

    const totalStars = fullStars + (hasHalfStar ? 1 : 0);
    const remainingStars = 5 - totalStars;
    for (let i = 0; i < remainingStars; i++) {
      stars.push(
        <span key={`empty-${i}`} className="text-fog-gray/50">☆</span>
      );
    }

    return stars;
  };

  const cardVariants: Record<string, string> = {
    standard: 'w-full max-w-sm',
    compact: 'w-40',
    featured: 'w-full max-w-md'
  };

  const imageVariants: Record<string, string> = {
    standard: 'h-80',
    compact: 'h-56',
    featured: 'h-96'
  };

  const handleCardClick = () => {
    if (typeof window !== 'undefined') {
      window.location.href = `/books/${book.slug}`;
    }
  };

  const handleViewBook = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (typeof window !== 'undefined') {
      window.location.href = `/books/${book.slug}`;
    }
  };

  const handlePurchaseClick = (e: React.MouseEvent, url: string) => {
    e.stopPropagation();
    if (typeof window !== 'undefined') {
      window.open(url, '_blank');
    }
  };

  const handleGoodreadsClick = (e: React.MouseEvent, url: string) => {
    e.stopPropagation();
    if (typeof window !== 'undefined') {
      window.open(url, '_blank');
    }
  };

  const heatDisplay = getHeatLevelDisplay(book.data.heatLevel);

  return (
    <div
      className={`
        group cursor-pointer
        transition-all duration-400 ease-out
        hover:-translate-y-2 hover:scale-[1.02]
        ${cardVariants[variant]} ${className}
      `}
      style={{
        transition: 'transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1), box-shadow 0.3s ease'
      }}
      onClick={handleCardClick}
      data-testid={`book-card-${book.slug}`}
    >
      {/* Book Cover Container */}
      <div className="relative mb-4">
        <div
          className={`
            relative overflow-hidden rounded-lg shadow-lg
            ${imageVariants[variant]}
            transition-all duration-400 ease-out
            border-2 border-dark-border
            group-hover:border-mystic-violet/70
            group-hover:shadow-[0_0_25px_rgba(107,70,193,0.5),0_0_50px_rgba(107,70,193,0.2),0_8px_32px_rgba(0,0,0,0.4)]
          `}
          style={{
            transition: 'border-color 0.3s ease, box-shadow 0.4s cubic-bezier(0.4, 0, 0.2, 1)'
          }}
        >
          {/* Book Cover Image */}
          {book.coverUrl && !imageError && (
            <img
              src={book.coverUrl}
              alt={`${book.data.title} book cover`}
              className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-110"
              onError={() => setImageError(true)}
              loading="lazy"
            />
          )}

          {/* Fallback for missing covers */}
          {(imageError || !book.coverUrl) && (
            <div className="w-full h-full bg-gradient-mystic flex items-center justify-center">
              <div className="text-center text-bone-white">
                <div className="text-4xl mb-2">📖</div>
                <div className="text-sm font-medium px-2">{book.data.title}</div>
              </div>
            </div>
          )}

          {/* Hover Overlay */}
          <div
            className="absolute inset-0 bg-gradient-to-t from-shadow-black/95 via-shadow-black/50 to-transparent opacity-0 group-hover:opacity-100 flex flex-col items-center justify-end p-4"
            style={{
              transition: 'opacity 0.35s ease-out'
            }}
          >
            {/* Quick View Badge at Top */}
            <div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transform scale-90 group-hover:scale-100"
              style={{
                transition: 'opacity 0.3s ease 0.1s, transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1) 0.1s'
              }}
            >
              <span className="bg-mystic-violet/90 backdrop-blur-sm text-bone-white text-sm font-semibold px-4 py-2 rounded-full border border-mystic-violet shadow-lg">
                Quick View
              </span>
            </div>

            {/* Action Buttons */}
            <div
              className="text-center space-y-2 transform translate-y-4 group-hover:translate-y-0"
              style={{
                transition: 'transform 0.35s cubic-bezier(0.4, 0, 0.2, 1)'
              }}
            >
              <button
                className="btn btn-secondary text-sm px-4 py-2 shadow-lg"
                onClick={handleViewBook}
                data-testid={`view-book-${book.slug}`}
              >
                View Book
              </button>
              {book.data.amazonUrl && (
                <button
                  className="btn btn-outline text-sm px-4 py-2 backdrop-blur-sm"
                  onClick={(e) => handlePurchaseClick(e, book.data.amazonUrl!)}
                  data-testid={`purchase-book-${book.slug}`}
                >
                  {book.data.isKU ? 'Read Free on KU' : `Buy ${book.data.price || '$4.99'}`}
                </button>
              )}
            </div>
          </div>

          {/* Corner badges */}
          <div className="absolute top-2 left-2 flex flex-col space-y-1">
            {book.data.featured && (
              <span className="bg-ember-orange text-bone-white text-xs px-2 py-1 rounded font-medium">
                Featured
              </span>
            )}
            {book.data.isKU && (
              <span className="bg-mystic-teal text-shadow-black text-xs px-2 py-1 rounded font-medium">
                KU
              </span>
            )}
            {showSeriesOrder && book.data.seriesOrder && (
              <span className="bg-mystic-violet text-bone-white text-xs px-2 py-1 rounded font-medium">
                #{book.data.seriesOrder}
              </span>
            )}
          </div>

          {/* Heat level indicator */}
          <div className="absolute top-2 right-2">
            <span
              className={`text-sm ${heatDisplay.color}`}
              title={`Heat level: ${book.data.heatLevel}`}
            >
              {heatDisplay.emoji}
            </span>
          </div>
        </div>
      </div>

      {/* Book Information */}
      <div className="space-y-2">
        {/* Series Info */}
        {book.data.series && (
          <div className="text-sm text-mystic-teal font-medium">
            {book.data.series} {book.data.seriesOrder && `#${book.data.seriesOrder}`}
          </div>
        )}

        {/* Title */}
        <h3
          className={`
            font-primary font-semibold text-bone-white line-clamp-2
            group-hover:text-ember-orange
            ${variant === 'compact' ? 'text-sm' : 'text-lg'}
          `}
          style={{
            transition: 'color 0.3s ease, text-shadow 0.3s ease',
            textShadow: 'none'
          }}
          onMouseEnter={(e) => e.currentTarget.style.textShadow = '0 0 20px rgba(255, 107, 53, 0.4)'}
          onMouseLeave={(e) => e.currentTarget.style.textShadow = 'none'}
        >
          {book.data.title}
        </h3>

        {/* Author */}
        <p className={`text-fog-gray ${variant === 'compact' ? 'text-xs' : 'text-sm'}`}>
          by {book.data.author}
        </p>

        {/* Rating */}
        {book.data.rating > 0 && (
          <div className="flex items-center space-x-2">
            <div className="flex items-center">
              {renderStars(book.data.rating)}
            </div>
            <span className="text-sm text-fog-gray">
              {book.data.rating} ({book.data.ratingCount?.toLocaleString() || 0})
            </span>
          </div>
        )}

        {/* Species Tags */}
        {book.data.species && book.data.species.length > 0 && (
          <div className="flex flex-wrap gap-1">
            {book.data.species.slice(0, variant === 'compact' ? 2 : 4).map((species) => (
              <a
                key={species}
                href={`/species/${species.toLowerCase()}`}
                className={`text-xs px-2 py-1 rounded capitalize hover:opacity-80 transition-opacity duration-200 ${getSpeciesBadgeColor(species)}`}
                onClick={(e) => e.stopPropagation()}
                data-testid={`species-${species}`}
              >
                {species}
              </a>
            ))}
            {book.data.species.length > (variant === 'compact' ? 2 : 4) && (
              <span className="text-xs text-fog-gray">
                +{book.data.species.length - (variant === 'compact' ? 2 : 4)} more
              </span>
            )}
          </div>
        )}

        {/* Description */}
        {showDescription && variant !== 'compact' && (
          <p className="text-sm text-moon-silver/80 line-clamp-3 leading-relaxed">
            {book.data.description}
          </p>
        )}

        {/* Action Buttons for Featured variant */}
        {variant === 'featured' && (
          <div className="flex space-x-2 pt-2">
            {book.data.amazonUrl && (
              <button
                className="btn btn-primary flex-1"
                onClick={(e) => handlePurchaseClick(e, book.data.amazonUrl!)}
                data-testid={`featured-purchase-${book.slug}`}
              >
                {book.data.isKU ? 'Read Free on KU' : `Buy ${book.data.price || '$4.99'}`}
              </button>
            )}
            {book.data.goodreadsUrl && (
              <button
                className="btn btn-ghost px-3"
                onClick={(e) => handleGoodreadsClick(e, book.data.goodreadsUrl!)}
                title="View on Goodreads"
                data-testid={`goodreads-${book.slug}`}
              >
                📚
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default BookCard;
