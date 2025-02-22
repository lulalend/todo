import './style.css';
import { RadioGroup } from './components/radioGroup/RadioGroup.tsx';
import { Dropdown } from './components/dropdown/Dropdown.tsx';
import { RootState } from '../../state/store.ts';
import { useDispatch, useSelector } from 'react-redux';
import { Filter, Sort } from '../../types/types.ts';
import { setFilter, setSortBy } from '../../state/slices/listSlice.ts';

export const ListSettings = () => {
  const dispatch = useDispatch();
  const { filter, sortBy } = useSelector((state: RootState) => state.list);

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
          selectedValue={filter}
          onChange={(value) => dispatch(setFilter(value as Filter))}
        />
      </div>
      <div className='row'>
        <span className='greyFont'>Сортировка</span>
        <Dropdown
          options={sortOptions}
          selectedValue={sortBy}
          onChange={(value) => dispatch(setSortBy(value as Sort))}
        />
      </div>
    </div>
  );
};