import React, {useRef} from 'react';
import useTodoStore from "../store/todo";

function Input() {
  const inputRef = useRef<HTMLInputElement>(null);
  const addTodo = useTodoStore((state: { addTodo: object; }) => state.addTodo);

  const add = () => {
    if(inputRef.current) {
      addTodo(inputRef.current.value);
      inputRef.current.value = '';
    }
  }

  return (
    <div>
      <input type="text" ref={inputRef}/>
      <button onClick={add}>할일 추가</button>
    </div>
  );
}

export default Input;