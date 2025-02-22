import { RootState } from './store';

export const selectFilteredTasks = (state: RootState) => {
  const { items, filter } = state.list;

  switch (filter) {
    case 'active':
      return items.filter((task) => !task.isCompleted);
    case 'completed':
      return items.filter((task) => task.isCompleted);
    default:
      return items;
  }
};

export const selectSortedTasks = (state: RootState) => {
  const { sortBy } = state.list;
  const filteredTasks = selectFilteredTasks(state);

  return [...filteredTasks].sort((a, b) => {
    if (sortBy === 'name') {
      return a.text.localeCompare(b.text);
    }
    if (sortBy === 'status') {
      return a.isCompleted === b.isCompleted ? 0 : a.isCompleted ? 1 : -1;
    }
    return 0;
  });
};