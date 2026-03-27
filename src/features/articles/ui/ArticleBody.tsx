interface ArticleBodyProps {
  contentHtml: string;
}

/**
 * Pure presentation component.
 * Receives pre-processed HTML content as a prop.
 * The content has already been sanitized by the remark pipeline.
 */
export function ArticleBody({ contentHtml }: ArticleBodyProps) {
  return (
    <div
      className="article-body"
      dangerouslySetInnerHTML={{ __html: contentHtml }}
    />
  );
}
