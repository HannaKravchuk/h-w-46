import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchTodos = createAsyncThunk(
  'todo/fetchTodos',
  async (_, thunkAPI) => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      const mockTodos = [
        { id: 1, text: 'Buy groceries', completed: false },
        { id: 2, text: 'Walk the dog', completed: true },
        { id: 3, text: 'Read a book', completed: false },
        { id: 4, text: 'Go to the gym', completed: true },
        { id: 5, text: 'Do laundry', completed: false },
      ];
      return mockTodos;
    } catch (error) {
      return thunkAPI.rejectWithValue('Failed to fetch todos');
    }
  }
);

