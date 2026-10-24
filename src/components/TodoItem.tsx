'use client'

import React from 'react'

interface TodoItemProps {
  id: string
  title: string
  complete: boolean
  toggleTodo: (id: string, complete: boolean) => Promise<void>
}

const TodoItem = ({ id, title, complete, toggleTodo }: TodoItemProps) => {
  return (
    <li className='flex gap-1 items-center'>
      <input
        id={id}
        type="checkbox"
        className="cursor-pointer peer"
        defaultChecked={complete}
        onChange={e => toggleTodo(id, e.target.checked)}
      />
      <label htmlFor={id} className='peer-checked:line-through peer-checked:text-slate-500'>{title}</label>
    </li>
  )
}

export default TodoItem
