import { useEffect, useRef, useState } from 'react'
import './App.css'
import Editor from './components/Editor';
import { Todo } from './types';
import TodoItem from './components/TodoItem';


function App() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const idRef = useRef(0);

  const onClickAdd = (text: string) => {
    setTodos([
      ...todos,
      {
        id: idRef.current++,
        content: text,
      }
    ]);
  }

  useEffect(() => {

  }, [todos]);

  const onClickDelete = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  }

  return (
    <div>
      <h1 className='font-semibold'>Todo</h1>
      <Editor onClickAdd={onClickAdd} />
      <div>
        {todos.map((todo) => (
          <TodoItem key={todo.id} {...todo} onClickDelete={onClickDelete}/>
        ))}
      </div>
    </div>
  )
}

export default App
