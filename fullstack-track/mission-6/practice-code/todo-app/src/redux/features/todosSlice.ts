import { ITodo } from "@/interface/todo";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

// Define a type for the slice state
interface TodoState {
  id?: number;
  title: string;
  description: string;
  priority: "low" | "medium" | "high";
  completed?: boolean;
}

// Define the initial state using that type
const initialState: TodoState[] = [];

export const todoSlice = createSlice({
  name: "todo",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    // Use the PayloadAction type to declare the contents of `action.payload`
    addTodo: (state, action: PayloadAction<ITodo>) => {
      state.push({
        ...action.payload,
        id: action.payload.id ?? Date.now(),
        completed: action.payload.completed ?? false,
      });
    },
    updateTodo: (state, action: PayloadAction<ITodo>) => {
      const { id, title, description, priority } = action.payload;
      const todo = state.find((todo) => todo.id === id);
      if (todo) {
        todo.title = title;
        todo.description = description;
        todo.priority = priority;
        todo.completed = false;
      }
    },
    deleteTodo: (state, action: PayloadAction<number>) => {
      return state.filter((todo) => todo.id !== action.payload);
    },
    toggleTodo: (state, action: PayloadAction<number>) => {
      const todo = state.find((todo) => todo.id === action.payload);
      if (todo) {
        todo.completed = !todo.completed;
      }
    },
  },
});

// Other code such as selectors can use the imported `RootState` type
export const selectTodos = (state: RootState) => state.todos;

// Action creators are generated for each case reducer function
export const { addTodo, updateTodo, deleteTodo, toggleTodo } = todoSlice.actions;

// Reducer
export default todoSlice.reducer;
