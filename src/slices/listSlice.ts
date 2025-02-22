import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { Task } from '../types/types.ts';

type ListState = {
  items: Task[];
}

const initialState: ListState = {
  items: [],
};

const listSlice = createSlice({
  name: 'list',
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<string>) => {
      const newItem: Task = {
        id: state.items.length > 0 ? state.items[state.items.length - 1].id + 1 : 0,
        text: action.payload,
        isCompleted: false,
      };
      state.items.push(newItem);
    },
    removeItem: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter(item =>
        item.id !== action.payload
      );
    },
    toggleCompleted: (state, action: PayloadAction<number>) => {
      state.items = state.items.map(item =>
        item.id === action.payload ? {...item, isCompleted: !item.isCompleted} : item
      );
    },
  },
});

export const { addItem, removeItem, toggleCompleted } = listSlice.actions;

export default listSlice.reducer;