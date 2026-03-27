interface PullQuoteProps {
  children: React.ReactNode;
}

export function PullQuote({ children }: PullQuoteProps) {
  return (
    <blockquote className="pullquote" role="complementary">
      <div className="pullquote-content">{children}</div>
    </blockquote>
  );
}
