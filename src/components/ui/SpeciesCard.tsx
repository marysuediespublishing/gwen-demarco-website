import React from 'react';
import type { CollectionEntry } from 'astro:content';

interface SpeciesCardProps {
  species: CollectionEntry<'species'> & { slug: string };
  variant?: 'standard' | 'compact' | 'featured';
  showDescription?: boolean;
  className?: string;
}

const SpeciesCard: React.FC<SpeciesCardProps> = ({
  species,
  variant = 'standard',
  showDescription = true,
  className = ''
}) => {
  const getSpeciesEmoji = (id: string): string => {
    const emojiMap: Record<string, string> = {
      shifters: '🐺',
      vampires: '🧛',
      fae: '🧚',
      ogres: '👹',
      auramancers: '✨',
      humans: '👤',
      hyvas: '🦎',
      'bennu-shifters': '🔥',
    };
    return emojiMap[id] || '🌙';
  };

  const getSpeciesBadgeColor = (speciesId: string): string => {
    const colors: Record<string, string> = {
      shifters: 'bg-ember-orange/20 text-ember-orange border border-ember-orange/40',
      vampires: 'bg-red-600/20 text-red-400 border border-red-600/40',
      fae: 'bg-purple-500/20 text-purple-300 border border-purple-500/40',
      ogres: 'bg-mystic-teal/20 text-mystic-teal border border-mystic-teal/40',
      auramancers: 'bg-mystic-violet/20 text-mystic-violet border border-mystic-violet/40',
      humans: 'bg-fog-gray/20 text-fog-gray border border-fog-gray/40',
    };
    return colors[speciesId] || 'bg-mystic-violet/20 text-mystic-violet border border-mystic-violet/40';
  };

  const formatSeriesName = (slug: string): string => {
    const seriesMap: Record<string, string> = {
      'sophie-feegle': 'Sophie Feegle',
      'kingdom-of-erishum': 'Kingdom of Erishum',
      'auras-and-embers': 'Auras & Embers',
    };

    if (seriesMap[slug]) {
      return seriesMap[slug];
    }

    return slug.split('-').map(word =>
      word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
    ).join(' ');
  };

  const cardVariants: Record<string, string> = {
    standard: 'w-full max-w-sm',
    compact: 'w-56',
    featured: 'w-full max-w-md'
  };

  const handleCardClick = () => {
    if (typeof window !== 'undefined') {
      window.location.href = `/species/${species.slug}`;
    }
  };

  const handleViewSpecies = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (typeof window !== 'undefined') {
      window.location.href = `/species/${species.slug}`;
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
      data-testid={`species-card-${species.slug}`}
    >
      {/* Species Visual Container */}
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

          {/* Species Icon/Visual */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <div className="text-6xl mb-2 opacity-80 group-hover:opacity-100 transition-opacity group-hover:scale-110 transform duration-300">
                {getSpeciesEmoji(species.slug)}
              </div>
            </div>
          </div>

          {/* Hover Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-shadow-black/90 via-shadow-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-end justify-center p-4">
            <button
              className="btn btn-secondary text-sm px-4 py-2"
              onClick={handleViewSpecies}
              data-testid={`view-species-${species.slug}`}
            >
              Learn More
            </button>
          </div>

          {/* Corner badge with species color */}
          <div className="absolute top-2 left-2">
            <span className={`text-xs px-2 py-1 rounded font-medium ${getSpeciesBadgeColor(species.slug)}`}>
              Species
            </span>
          </div>
        </div>
      </div>

      {/* Species Information */}
      <div className="space-y-2">
        {/* Name */}
        <h3 className={`
          font-primary font-semibold text-bone-white group-hover:text-ember-orange transition-colors line-clamp-2
          ${variant === 'compact' ? 'text-base' : 'text-lg'}
        `}>
          {species.data.name}
        </h3>

        {/* Series Tags */}
        {species.data.series && species.data.series.length > 0 && (
          <div className="flex flex-wrap gap-1">
            {species.data.series.slice(0, variant === 'compact' ? 2 : 3).map((seriesSlug: string) => (
              <a
                key={seriesSlug}
                href={`/series/${seriesSlug}`}
                className="text-xs px-2 py-1 rounded bg-mystic-teal/20 text-mystic-teal border border-mystic-teal/40 hover:opacity-80 transition-opacity duration-200"
                onClick={(e) => e.stopPropagation()}
                data-testid={`series-${seriesSlug}`}
              >
                {formatSeriesName(seriesSlug)}
              </a>
            ))}
            {species.data.series.length > (variant === 'compact' ? 2 : 3) && (
              <span className="text-xs text-fog-gray">
                +{species.data.series.length - (variant === 'compact' ? 2 : 3)} more
              </span>
            )}
          </div>
        )}

        {/* Description */}
        {showDescription && variant !== 'compact' && species.data.description && (
          <p className="text-sm text-moon-silver/80 line-clamp-3 leading-relaxed">
            {species.data.description}
          </p>
        )}

        {/* Abilities preview for featured variant */}
        {variant === 'featured' && species.data.abilities && (
          <div className="pt-2">
            <div className="text-xs text-fog-gray uppercase tracking-wide mb-1">Abilities</div>
            <p className="text-sm text-moon-silver/70 line-clamp-2">
              {species.data.abilities}
            </p>
          </div>
        )}

        {/* Action Button for Featured variant */}
        {variant === 'featured' && (
          <div className="pt-2">
            <button
              className="btn btn-primary w-full"
              onClick={handleViewSpecies}
              data-testid={`featured-view-${species.slug}`}
            >
              Explore Species
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default SpeciesCard;
