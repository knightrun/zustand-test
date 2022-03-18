import React from 'react';
import useTodoStore from "../store/todo";


function TodoList() {
  const todos = useTodoStore((state: { todos: string[]; }) => state.todos);
  return (
    <div>
      <p>오늘 해야하일 {todos.length} 건</p>
      <ul>
        {todos.map((todo:string, index:number) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
