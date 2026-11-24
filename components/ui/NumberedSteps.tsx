type Step = { title: string; text: string };

type NumberedStepsProps = {
  steps: readonly Step[];
  /** Grid utility, e.g. "grid-fit-280". */
  className: string;
};

export function NumberedSteps({ steps, className }: NumberedStepsProps) {
  return (
    <ol className={`grid gap-10 ${className}`}>
      {steps.map((step, index) => (
        <li key={step.title} className="flex flex-col gap-1.5">
          <div aria-hidden="true" className="font-serif text-number leading-none text-accent">
            {index + 1}
          </div>
          <h3 className="text-lg font-semibold">{step.title}</h3>
          <p className="text-muted">{step.text}</p>
        </li>
      ))}
    </ol>
  );
}
