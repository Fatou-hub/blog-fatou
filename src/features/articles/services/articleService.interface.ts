import type { Article, ArticleMetadata, Slug } from '../types/article.types';

export interface ArticleServiceInterface {
  getAllArticles(): Promise<ArticleMetadata[]>;
  getArticleBySlug(slug: Slug): Promise<Article | null>;
  getAllSlugs(): Promise<Slug[]>;
}
