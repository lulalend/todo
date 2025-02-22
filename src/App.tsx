import './App.css';
import plusSvg from './assets/plus.svg';
import { TaskList } from './components/taskList/TaskList.tsx';
import { ListSettings } from './components/listSettings/ListSettings.tsx';

export const App = () => {
  return (
    <div className='container'>
      <div className='newTask'>
        <span className='greyFont'>Новая задача</span>
        <div className='addSection'>
          <input type='text'/>
          <button className='addButton'>
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