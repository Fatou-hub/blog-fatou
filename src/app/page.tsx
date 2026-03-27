import type { Metadata } from 'next';
import { getArticles } from '@/features/articles/hooks/useArticles';
import { ArticleCard } from '@/features/articles/ui/ArticleCard';

export const metadata: Metadata = {
  title: 'Fatou — QA Reliability Engineer',
  description:
    'Articles sur la qualité logicielle, la fiabilité des systèmes, la sobrieté numérique et l’éthique technologique.',
};

export default async function HomePage() {
  const { articles, error } = await getArticles();

  return (
    <>
      <div className="home-hero">
        <p className="home-hero-label">Blog · Publication indépendante</p>
        <h1 className="home-hero-name">Fatou</h1>
        <p className="home-hero-role">
          QA Reliability Engineer — Systèmes fiables, sobres et durables.
          <br />
          Écrits sur la tech, la qualité logicielle et l’éthique numérique.
        </p>
      </div>

      <section className="articles-section" aria-label="Articles">
        <p className="articles-section-label">Articles publiés</p>

        {error && (
          <div className="error-state" role="alert">
            <p className="error-state-title">Erreur de chargement</p>
            <p>{error}</p>
          </div>
        )}

        {!error && articles.length === 0 && (
          <div className="error-state">
            <p className="error-state-title">Aucun article pour le moment</p>
            <p>Revenez bientôt.</p>
          </div>
        )}

        {!error &&
          articles.map((article) => (
            <ArticleCard key={article.slug} article={article} />
          ))}
      </section>
    </>
  );
}
