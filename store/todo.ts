import create from "zustand";
import {devtools, persist} from "zustand/middleware";

let store: any = (set: any) => ({
  todos: ['공부하기', '점심먹기'],
  addTodo: (todo: string) => set((state: { todos: string[]; }) => ({todos: [...state.todos, todo]}))
});

store = devtools(store);
//localstorage
store = persist(store, {name: 'todos'});

const useTodoStore = create(store)

export default useTodoStore