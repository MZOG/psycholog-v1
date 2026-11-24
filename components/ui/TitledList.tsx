export function TitledList({ title, items }: { title: string; items: readonly string[] }) {
  return (
    <div className="flex flex-col gap-5">
      <h2 className="font-serif text-h2-sm leading-heading font-normal">{title}</h2>
      <ul className="flex flex-col gap-3.5 text-muted">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
