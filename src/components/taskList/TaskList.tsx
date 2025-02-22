import { Task } from '../../types/types.ts';
import trashSvg from '../../assets/trash.svg';
import './style.css';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store.ts';
import { removeItem, toggleCompleted } from '../../slices/listSlice.ts';

export const TaskList = () => {
  const dispatch = useDispatch();
  const tasks = useSelector((state: RootState) => state.list.items);

  const deleteTask = (id: number) => {
    dispatch(removeItem(id));
  };

  const toggleTask = (id: number) => {
    dispatch(toggleCompleted(id));
  };

  return (
    <div className='listContainer'>
      {tasks.map((task: Task) => (
        <div key={task.id} className='task'>
          <input
            id={`checkbox-${task.id}`}
            type='checkbox'
            className='checkbox'
            checked={task.isCompleted}
            onChange={() => toggleTask(task.id)}
          />
          <label htmlFor={`checkbox-${task.id}`} className='checkboxLabel'></label>
          <span className={task.isCompleted ? 'completed' : ''}>
            {task.text}
          </span>
          <button
            className='deleteButton'
            onClick={() => deleteTask(task.id)}
          >
            <img src={trashSvg} alt='Trash icon' />
          </button>
        </div>
      ))}
    </div>
  );
};