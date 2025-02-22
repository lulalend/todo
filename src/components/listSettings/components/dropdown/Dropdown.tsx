import './style.css';

type Props = {
  options: { value: string; label: string }[];
  selectedValue: string;
  onChange: (value: string) => void;
};

export const Dropdown = (
  {
    options,
    selectedValue,
    onChange,
  }: Props) => (
  <select
    value={selectedValue}
    onChange={(e) => onChange(e.target.value)}
    className='dropdown'
  >
    {options.map((option) => (
      <option key={option.value} value={option.value}>
        {option.label}
      </option>
    ))}
  </select>
);