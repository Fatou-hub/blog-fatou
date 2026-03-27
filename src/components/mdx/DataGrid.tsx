interface DataItem {
  number: string;
  label: string;
}

interface DataGridProps {
  items: DataItem[];
}

export function DataGrid({ items }: DataGridProps) {
  return (
    <div className="data-grid" role="list">
      {items.map((item, index) => (
        <div key={index} className="data-item" role="listitem">
          <span className="data-number" aria-label={item.number}>{item.number}</span>
          <span className="data-label">{item.label}</span>
        </div>
      ))}
    </div>
  );
}
