interface CheckboxOption {
  id: string;
  label: string;
}

interface CheckboxGroupProps {
  legend: string;
  options: CheckboxOption[];
  selected: string[];
  onChange: (selected: string[]) => void;
}

/** Shared multi-select checkbox group, e.g. the Appointment form's service picker. */
export default function CheckboxGroup({
  legend,
  options,
  selected,
  onChange,
}: CheckboxGroupProps) {
  const toggle = (id: string) => {
    onChange(
      selected.includes(id)
        ? selected.filter((selectedId) => selectedId !== id)
        : [...selected, id],
    );
  };

  return (
    <fieldset className="flex flex-col gap-2">
      <legend className="font-body text-sm font-medium text-espresso">{legend}</legend>
      <div className="flex flex-wrap gap-x-6 gap-y-3">
        {options.map((option) => (
          <label
            key={option.id}
            className="flex items-center gap-2 font-body text-sm text-espresso"
          >
            <input
              type="checkbox"
              checked={selected.includes(option.id)}
              onChange={() => toggle(option.id)}
              className="h-4 w-4 rounded border-rose-gold/40 text-terracotta focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-terracotta focus-visible:ring-offset-2"
            />
            {option.label}
          </label>
        ))}
      </div>
    </fieldset>
  );
}
