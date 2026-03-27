interface ComparisonColumn {
  title: string;
  items: string[];
  highlighted?: boolean;
}

interface ComparisonProps {
  columns: ComparisonColumn[];
}

export function Comparison({ columns }: ComparisonProps) {
  return (
    <div className="comparison" role="list">
      {columns.map((col, index) => (
        <div
          key={index}
          className={`comparison-col${col.highlighted ? ' highlight' : ''}`}
          role="listitem"
        >
          <h4 className="comparison-title">{col.title}</h4>
          <ul className="comparison-items">
            {col.items.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
