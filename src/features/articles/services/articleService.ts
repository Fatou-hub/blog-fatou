import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import remarkGfm from 'remark-gfm';
import remarkHtml from 'remark-html';
import type { ArticleServiceInterface } from './articleService.interface';
import type { Article, ArticleMetadata, Slug } from '../types/article.types';

const ARTICLES_DIRECTORY = path.join(process.cwd(), 'content/articles');

class ArticleService implements ArticleServiceInterface {
  async getAllArticles(): Promise<ArticleMetadata[]> {
    try {
      const fileNames = fs.readdirSync(ARTICLES_DIRECTORY);
      const markdownFiles = fileNames.filter((name) => name.endsWith('.md'));

      const articles = await Promise.all(
        markdownFiles.map((fileName) => this.readMetadata(fileName))
      );

      const validArticles = articles.filter(
        (article): article is ArticleMetadata => article !== null
      );

      return validArticles.sort((a, b) => (a.date < b.date ? 1 : -1));
    } catch (error) {
      console.error('ArticleService.getAllArticles error:', error);
      throw new Error('Could not load articles list');
    }
  }

  async getArticleBySlug(slug: Slug): Promise<Article | null> {
    try {
      const fullPath = path.join(ARTICLES_DIRECTORY, `${slug}.md`);

      if (!fs.existsSync(fullPath)) {
        return null;
      }

      const fileContents = fs.readFileSync(fullPath, 'utf8');
      const { data, content } = matter(fileContents);

      const processedContent = await remark()
        .use(remarkGfm)
        .use(remarkHtml, { sanitize: false })
        .process(content);

      const contentHtml = processedContent.toString();

      return {
        title: String(data['title'] ?? ''),
        slug,
        date: String(data['date'] ?? ''),
        kicker: String(data['kicker'] ?? ''),
        author: String(data['author'] ?? ''),
        authorTitle: String(data['authorTitle'] ?? ''),
        readingTime: String(data['readingTime'] ?? ''),
        tags: Array.isArray(data['tags']) ? (data['tags'] as string[]) : [],
        excerpt: data['excerpt'] ? String(data['excerpt']) : undefined,
        contentHtml,
      };
    } catch (error) {
      console.error(`ArticleService.getArticleBySlug error for "${slug}":`, error);
      throw new Error(`Could not load article: ${slug}`);
    }
  }

  async getAllSlugs(): Promise<Slug[]> {
    try {
      const fileNames = fs.readdirSync(ARTICLES_DIRECTORY);
      return fileNames
        .filter((name) => name.endsWith('.md'))
        .map((name) => name.replace(/\.md$/, ''));
    } catch (error) {
      console.error('ArticleService.getAllSlugs error:', error);
      throw new Error('Could not load article slugs');
    }
  }

  private readMetadata(fileName: string): ArticleMetadata | null {
    try {
      const slug = fileName.replace(/\.md$/, '');
      const fullPath = path.join(ARTICLES_DIRECTORY, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf8');
      const { data } = matter(fileContents);

      return {
        title: String(data['title'] ?? ''),
        slug,
        date: String(data['date'] ?? ''),
        kicker: String(data['kicker'] ?? ''),
        author: String(data['author'] ?? ''),
        authorTitle: String(data['authorTitle'] ?? ''),
        readingTime: String(data['readingTime'] ?? ''),
        tags: Array.isArray(data['tags']) ? (data['tags'] as string[]) : [],
        excerpt: data['excerpt'] ? String(data['excerpt']) : undefined,
      };
    } catch {
      return null;
    }
  }
}

export const articleService = new ArticleService();
export type { ArticleServiceInterface };
