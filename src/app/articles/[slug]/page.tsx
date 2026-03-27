import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getArticle } from '@/features/articles/hooks/useArticle';
import { articleService } from '@/features/articles/services/articleService';
import { ArticleHeader } from '@/features/articles/ui/ArticleHeader';
import { ArticleBody } from '@/features/articles/ui/ArticleBody';

interface ArticlePageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const slugs = await articleService.getAllSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: ArticlePageProps): Promise<Metadata> {
  const { slug } = await params;
  const { article } = await getArticle(slug);

  if (!article) {
    return { title: 'Article introuvable' };
  }

  return {
    title: article.title,
    description: article.excerpt ?? article.kicker,
    openGraph: {
      title: article.title,
      description: article.excerpt ?? article.kicker,
      type: 'article',
      publishedTime: article.date,
      authors: [article.author],
      tags: article.tags,
    },
  };
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const { slug } = await params;
  const { article, error } = await getArticle(slug);

  if (error) {
    return (
      <div className="error-state" role="alert">
        <p className="error-state-title">Erreur de chargement</p>
        <p>{error}</p>
      </div>
    );
  }

  if (!article) {
    notFound();
  }

  return (
    <>
      <ArticleHeader metadata={article} />

      <Link href="/" className="back-link" aria-label="Retour à l'accueil">
        ← Tous les articles
      </Link>

      <div className="article-wrap">
        <ArticleBody contentHtml={article.contentHtml} />

        {article.tags.length > 0 && (
          <div className="tags" aria-label="Tags de l'article">
            {article.tags.map((tag) => (
              <span key={tag} className="tag">
                #{tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </>
  );
}
