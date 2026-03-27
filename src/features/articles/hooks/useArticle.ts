import { articleService } from '../services/articleService';
import type { ArticleServiceInterface } from '../services/articleService.interface';
import type { Article, Slug } from '../types/article.types';

interface UseArticleReturn {
  article: Article | null;
  error: string | null;
}

/**
 * Server-side data fetching function that follows the hook contract.
 * Used in Server Components to retrieve a single article by slug.
 * Dependencies are injected for testability.
 */
export async function getArticle(
  slug: Slug,
  service: ArticleServiceInterface = articleService
): Promise<UseArticleReturn> {
  try {
    const article = await service.getArticleBySlug(slug);
    return { article, error: null };
  } catch {
    return { article: null, error: 'Impossible de charger cet article.' };
  }
}
