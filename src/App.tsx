import './App.css';
import plusSvg from './assets/plus.svg';
import { TaskList } from './components/taskList/TaskList.tsx';
import { ListSettings } from './components/listSettings/ListSettings.tsx';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem, setItems } from './state/slices/listSlice.ts';
import { RootState } from './state/store.ts';

export const App = () => {
  const [inputValue, setInputValue] = useState('');
  const dispatch = useDispatch();
  const tasks = useSelector((state: RootState) => state.list.items);

  useEffect(() => {
    const savedState = localStorage.getItem('reduxState');
    if (savedState) {
      const parsedState = JSON.parse(savedState);
      dispatch(setItems(parsedState));
    }
  }, [dispatch]);

  useEffect(() => {
    localStorage.setItem('reduxState', JSON.stringify(tasks));
  }, [tasks]);

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