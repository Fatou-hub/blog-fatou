interface SectionDividerProps {
  label: string;
}

export function SectionDivider({ label }: SectionDividerProps) {
  return (
    <div className="section-divider" aria-hidden="true">
      <span>{label}</span>
    </div>
  );
}
