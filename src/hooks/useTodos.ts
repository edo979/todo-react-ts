import { useState } from 'react'

export type Todo = {
  id: string
  todo: string
}

function getId(): string {
  return new Date().toISOString()
}

export function useTodos() {
  const [todos, setTodos] = useState<Todo[]>([])

  const addTodo = (todo: string): void =>
    setTodos((todos) => [...todos, { id: getId(), todo }])

  return [todos, addTodo] as [typeof todos, typeof addTodo]
}
