import { createContext, ReactNode, useContext, useState } from 'react'

type Task = {
  id: number
  task: string
}

type TasksContext = {
  tasks: Task[]
  addTask: (task: string) => void
}

type TasksProviderProps = {
  children: ReactNode
}

function getId(tasks: Task[]): number {
  const id = tasks.reduce((acc, curr) => (curr.id > acc ? curr.id : acc), 0)

  return id + 1
}

const TasksContext = createContext({} as TasksContext)

export function useTasks() {
  return useContext(TasksContext)
}

export function TasksProvider({ children }: TasksProviderProps) {
  const [tasks, setTasks] = useState<Task[]>([])

  function addTask(task: string): void {
    setTasks((tasks) => [...tasks, { id: getId(tasks), task }])
  }

  return (
    <TasksContext.Provider
      value={{
        addTask,
        tasks,
      }}
    >
      {children}
    </TasksContext.Provider>
  )
}
