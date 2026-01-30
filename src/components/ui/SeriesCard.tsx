import React from 'react';
import type { CollectionEntry } from 'astro:content';

interface SeriesCardProps {
  series: CollectionEntry<'series'> & { slug: string };
  variant?: 'standard' | 'compact' | 'featured';
  showDescription?: boolean;
  className?: string;
}

const SeriesCard: React.FC<SeriesCardProps> = ({
  series,
  variant = 'standard',
  showDescription = true,
  className = ''
}) => {
  const getStatusBadgeStyle = (status: string) => {
    if (status === 'complete') {
      return 'bg-ember-orange/20 text-ember-orange border border-ember-orange/40';
    }
    return 'bg-mystic-teal/20 text-mystic-teal border border-mystic-teal/40';
  };

  const getSpeciesBadgeColor = (species: string) => {
    const colors: Record<string, string> = {
      shifters: 'bg-ember-orange/20 text-ember-orange border border-ember-orange/40',
      vampires: 'bg-red-600/20 text-red-400 border border-red-600/40',
      fae: 'bg-purple-500/20 text-purple-300 border border-purple-500/40',
      ogres: 'bg-mystic-teal/20 text-mystic-teal border border-mystic-teal/40',
      auramancers: 'bg-mystic-violet/20 text-mystic-violet border border-mystic-violet/40',
      humans: 'bg-fog-gray/20 text-fog-gray border border-fog-gray/40',
    };
    return colors[species.toLowerCase()] || 'bg-mystic-violet/20 text-mystic-violet border border-mystic-violet/40';
  };

  const formatSpeciesName = (slug: string): string => {
    const speciesMap: Record<string, string> = {
      'shifters': 'Shifters',
      'ogres': 'Ogres',
      'vampires': 'Vampires',
      'fae': 'Fae',
      'auramancers': 'Auramancers',
      'humans': 'Humans',
      'hyvas': 'Hyvas',
      'bennu-shifters': 'Bennu Shifters'
    };

    if (speciesMap[slug]) {
      return speciesMap[slug];
    }

    return slug.split('-').map(word =>
      word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
    ).join(' ');
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
    compact: 'w-56',
    featured: 'w-full max-w-md'
  };

  const handleCardClick = () => {
    if (typeof window !== 'undefined') {
      window.location.href = `/series/${series.slug}`;
    }
  };

  const handleViewSeries = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (typeof window !== 'undefined') {
      window.location.href = `/series/${series.slug}`;
    }
  };

  return (
    <div
      className={`
        group cursor-pointer transition-all duration-300
        hover:-translate-y-2 hover:shadow-mystic
        ${cardVariants[variant]} ${className}
      `}
      onClick={handleCardClick}
      data-testid={`series-card-${series.slug}`}
    >
      {/* Series Visual Container */}
      <div className="relative mb-4">
        <div
          className={`
            relative overflow-hidden rounded-lg shadow-lg
            ${variant === 'compact' ? 'h-40' : variant === 'featured' ? 'h-56' : 'h-48'}
            group-hover:shadow-violet-glow transition-all duration-400
            border border-dark-border group-hover:border-mystic-violet/50
            bg-gradient-to-br from-midnight-purple/60 to-shadow-black
          `}
        >
          {/* Mystical Background Pattern */}
          <div className="absolute inset-0 opacity-30">
            <div className="absolute inset-0 bg-gradient-fog"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-mystic-violet/20 rounded-full blur-3xl"></div>
          </div>

          {/* Series Icon/Visual */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <div className="text-6xl mb-2 opacity-80 group-hover:opacity-100 transition-opacity">
                📚
              </div>
              <div className="text-2xl font-primary font-bold text-bone-white">
                {series.data.bookCount}
              </div>
              <div className="text-sm text-fog-gray">
                {series.data.bookCount === 1 ? 'Book' : 'Books'}
              </div>
            </div>
          </div>

          {/* Hover Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-shadow-black/90 via-shadow-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-end justify-center p-4">
            <button
              className="btn btn-secondary text-sm px-4 py-2"
              onClick={handleViewSeries}
              data-testid={`view-series-${series.slug}`}
            >
              Explore Series
            </button>
          </div>

          {/* Corner badges */}
          <div className="absolute top-2 left-2 flex flex-col space-y-1">
            {series.data.featured && (
              <span className="bg-ember-orange text-bone-white text-xs px-2 py-1 rounded font-medium">
                Featured
              </span>
            )}
            {series.data.completionStatus && (
              <span className={`text-xs px-2 py-1 rounded font-medium capitalize ${getStatusBadgeStyle(series.data.completionStatus)}`}>
                {series.data.completionStatus}
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Series Information */}
      <div className="space-y-2">
        {/* Title */}
        <h3 className={`
          font-primary font-semibold text-bone-white group-hover:text-ember-orange transition-colors line-clamp-2
          ${variant === 'compact' ? 'text-base' : 'text-lg'}
        `}>
          {series.data.title}
        </h3>

        {/* Book Count & Status */}
        <div className="flex items-center gap-2 text-sm text-fog-gray">
          <span className="flex items-center gap-1">
            <svg className="w-4 h-4 text-mystic-violet" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
            {series.data.bookCount} {series.data.bookCount === 1 ? 'Book' : 'Books'}
          </span>
        </div>

        {/* Rating */}
        {series.data.overallRating && series.data.overallRating > 0 && (
          <div className="flex items-center space-x-2">
            <div className="flex items-center">
              {renderStars(series.data.overallRating)}
            </div>
            <span className="text-sm text-fog-gray">
              {series.data.overallRating} {series.data.totalRatings && `(${series.data.totalRatings.toLocaleString()})`}
            </span>
          </div>
        )}

        {/* Species Tags */}
        {series.data.species && series.data.species.length > 0 && (
          <div className="flex flex-wrap gap-1">
            {series.data.species.slice(0, variant === 'compact' ? 2 : 3).map((species: string) => (
              <a
                key={species}
                href={`/species/${species.toLowerCase()}`}
                className={`text-xs px-2 py-1 rounded capitalize hover:opacity-80 transition-opacity duration-200 ${getSpeciesBadgeColor(species)}`}
                onClick={(e) => e.stopPropagation()}
                data-testid={`species-${species}`}
              >
                {formatSpeciesName(species)}
              </a>
            ))}
            {series.data.species.length > (variant === 'compact' ? 2 : 3) && (
              <span className="text-xs text-fog-gray">
                +{series.data.species.length - (variant === 'compact' ? 2 : 3)} more
              </span>
            )}
          </div>
        )}

        {/* Description */}
        {showDescription && variant !== 'compact' && (
          <p className="text-sm text-moon-silver/80 line-clamp-3 leading-relaxed">
            {series.data.description}
          </p>
        )}

        {/* Action Button for Featured variant */}
        {variant === 'featured' && (
          <div className="pt-2">
            <button
              className="btn btn-primary w-full"
              onClick={handleViewSeries}
              data-testid={`featured-view-${series.slug}`}
            >
              Explore Series
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default SeriesCard;
