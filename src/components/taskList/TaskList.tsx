import { useState } from 'react';
import { Task } from '../../types/types.ts';
import trashSvg from '../../assets/trash.svg';
import './style.css';

export const TaskList = () => {
  const [tasks, setTasks] = useState<Task[]>([
    {
      id: 1,
      text: 'Городской цикл',
      isCompleted: false,
    },
    {
      id: 2,
      text: 'Закрыто',
      isCompleted: true,
    },
  ]);

  const deleteTask = (id: number) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const toggleTask = (id: number) => {
    setTasks(tasks.map(task =>
      task.id === id ? {...task, isCompleted: !task.isCompleted} : task
    ));
  };

  return (
    <div className='taskList'>
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