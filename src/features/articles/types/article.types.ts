export type Slug = string;

export interface ArticleMetadata {
  title: string;
  slug: Slug;
  date: string; // ISO 8601
  kicker: string;
  author: string;
  authorTitle: string;
  readingTime: string;
  tags: string[];
  excerpt?: string;
}

export interface Article extends ArticleMetadata {
  contentHtml: string;
}
