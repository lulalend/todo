import './style.css';
import { useState } from 'react';
import { RadioGroup } from './components/radioGroup/RadioGroup.tsx';
import { Dropdown } from './components/dropdown/Dropdown.tsx';

export const ListSettings = () => {
  const [status, setStatus] = useState<'all' | 'active' | 'completed'>('all');
  const [sortBy, setSortBy] = useState<'name' | 'status'>('name');

  const statusOptions = [
    { value: 'all', label: 'Все' },
    { value: 'active', label: 'Активные' },
    { value: 'completed', label: 'Завершенные' },
  ];

  const sortOptions = [
    { value: 'name', label: 'Наименование' },
    { value: 'status', label: 'Статус' },
  ];

  return (
    <div className='settingsContainer'>
      <div className='row'>
        <span className='greyFont'>Статус</span>
        <RadioGroup
          options={statusOptions}
          selectedValue={status}
          onChange={(value) => setStatus(value as 'all' | 'active' | 'completed')}
        />
      </div>
      <div className='row'>
        <span className='greyFont'>Сортировка</span>
        <Dropdown
          options={sortOptions}
          selectedValue={sortBy}
          onChange={(value) => setSortBy(value as 'name' | 'status')}
        />
      </div>
    </div>
  );
};