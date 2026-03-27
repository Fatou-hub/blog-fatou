import type { ArticleMetadata } from '../types/article.types';

interface ArticleHeaderProps {
  metadata: ArticleMetadata;
}

function formatDate(isoDate: string): string {
  return new Date(isoDate).toLocaleDateString('fr-FR', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
}

export function ArticleHeader({ metadata }: ArticleHeaderProps) {
  const { title, kicker, date, author, readingTime } = metadata;

  return (
    <div className="article-hero">
      <p className="hero-kicker">{kicker}</p>

      <h1 className="hero-title" dangerouslySetInnerHTML={{ __html: title }} />

      <div className="hero-meta">
        <span>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
            <circle cx="12" cy="12" r="10" />
            <polyline points="12 6 12 12 16 14" />
          </svg>
          {readingTime} de lecture
        </span>
        <span className="hero-meta-dot" aria-hidden="true" />
        <span>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
            <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
            <line x1="16" y1="2" x2="16" y2="6" />
            <line x1="8" y1="2" x2="8" y2="6" />
            <line x1="3" y1="10" x2="21" y2="10" />
          </svg>
          <time dateTime={date}>{formatDate(date)}</time>
        </span>
        <span className="hero-meta-dot" aria-hidden="true" />
        <span>par {author}</span>
      </div>
    </div>
  );
}
