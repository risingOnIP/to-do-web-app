import Link from 'next/link'
import React from 'react'
import { prisma } from '../db'
import TodoItem from '../components/TodoItem';

async function getTodos() {
  return  await prisma.todo.findMany(); 
}


const ToDoMainPage =  async () => {
  const todos = await getTodos(); 
  return (
    <>
      <header className="flex justify-between items-center mb-4">
        <h1>To Do App</h1>
        <Link href="/new" className="border border-slate-300 text-slate-300 px-2 py-1 rounded hover:bg-slate-700 active:bg-slate-700 active:scale-95 transition duration-200 ease-in-out outline-none">New Page Link</Link>
      </header>

      <ul className="pl-4">
        {todos.map(todo => (
          <TodoItem key={todo.id} {...todo}></TodoItem>
        ))}
      </ul>
    </>
  )
}

export default ToDoMainPage