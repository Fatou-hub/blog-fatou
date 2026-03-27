import Link from 'next/link';
import type { ArticleMetadata } from '../types/article.types';

interface ArticleCardProps {
  article: ArticleMetadata;
}

function formatDate(isoDate: string): string {
  return new Date(isoDate).toLocaleDateString('fr-FR', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
}

export function ArticleCard({ article }: ArticleCardProps) {
  const { title, slug, date, kicker, readingTime, tags } = article;

  return (
    <article className="article-card">
      <Link href={`/articles/${slug}`} className="article-card-link">
        <header className="article-card-header">
          <p className="article-card-kicker">{kicker}</p>
          <h2 className="article-card-title">{title}</h2>
          {article.excerpt && (
            <p className="article-card-excerpt">{article.excerpt}</p>
          )}
        </header>

        <footer className="article-card-footer">
          <div className="article-card-meta">
            <time dateTime={date}>{formatDate(date)}</time>
            <span className="meta-dot" aria-hidden="true" />
            <span>{readingTime} de lecture</span>
          </div>

          {tags.length > 0 && (
            <ul className="article-card-tags" aria-label="Tags">
              {tags.slice(0, 3).map((tag) => (
                <li key={tag} className="article-tag">
                  #{tag}
                </li>
              ))}
            </ul>
          )}
        </footer>
      </Link>
    </article>
  );
}
