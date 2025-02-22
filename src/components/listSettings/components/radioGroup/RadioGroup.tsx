import './style.css';

type Props = {
  options: { value: string; label: string }[];
  selectedValue: string;
  onChange: (value: string) => void;
};

export const RadioGroup = (
  {
    options,
    selectedValue,
    onChange,
  }: Props ) => (
  <div className='radioGroup'>
    {options.map((option) => (
      <label key={option.value} className='radioOption'>
        <input
          type='radio'
          value={option.value}
          checked={selectedValue === option.value}
          onChange={() => onChange(option.value)}
        />
        <div className='customRadio'></div>
        <span>{option.label}</span>
      </label>
    ))}
  </div>
);
