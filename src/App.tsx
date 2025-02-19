import './App.css';
import plusSvg from './assets/plus.svg';

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
    </div>
  );
};