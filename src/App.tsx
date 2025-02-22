import './App.css';
import plusSvg from './assets/plus.svg';
import { TaskList } from './components/taskList/TaskList.tsx';
import { ListSettings } from './components/listSettings/ListSettings.tsx';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addItem } from './state/slices/listSlice.ts';

export const App = () => {
  const [inputValue, setInputValue] = useState('');
  const dispatch = useDispatch();

  const handleAddItem = () => {
    if (inputValue.trim()) {
      dispatch(addItem(inputValue));
      setInputValue('');
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleAddItem();
    }
  };

  return (
    <div className='container'>
      <div className='newTask'>
        <span className='greyFont'>Новая задача</span>
        <div className='addSection'>
          <input
            type='text'
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={handleKeyDown}
          />
          <button
            className='addButton'
            onClick={handleAddItem}
          >
            <img src={plusSvg} alt='Plus icon' />
            Добавить
          </button>
        </div>
      </div>
      <main>
        <h1>Список задач</h1>
        <div className='taskContainer'>
          <TaskList />
          <ListSettings />
        </div>
      </main>
    </div>
  );
};