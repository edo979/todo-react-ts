import { createContext, ReactNode, useContext, useState } from 'react'

type Task = {
  id: string
  task: string
}

type TasksContext = {
  tasks: Task[]
}

type TasksProviderProps = {
  children: ReactNode
}

const TasksContext = createContext({} as TasksContext)

export function useTasks() {
  return useContext(TasksContext)
}

export function TasksProvider({ children }: TasksProviderProps) {
  const [tasks, setTasks] = useState<Task[]>([])

  return (
    <TasksContext.Provider
      value={{
        tasks,
      }}
    >
      {children}
    </TasksContext.Provider>
  )
}
