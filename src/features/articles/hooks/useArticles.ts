import { articleService } from '../services/articleService';
import type { ArticleServiceInterface } from '../services/articleService.interface';
import type { ArticleMetadata } from '../types/article.types';

interface UseArticlesReturn {
  articles: ArticleMetadata[];
  error: string | null;
}

/**
 * Server-side data fetching function that follows the hook contract.
 * Used in Server Components to retrieve the full article list.
 * Dependencies are injected for testability.
 */
export async function getArticles(
  service: ArticleServiceInterface = articleService
): Promise<UseArticlesReturn> {
  try {
    const articles = await service.getAllArticles();
    return { articles, error: null };
  } catch {
    return { articles: [], error: 'Impossible de charger les articles.' };
  }
}
