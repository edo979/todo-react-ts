import { createContext, ReactNode, useContext } from 'react'

// type Task = {
//   id: string
//   todo: string
// }

// type TasksContext = {
//   tasks: string
// }

type TasksProviderProps = {
  children: ReactNode
}

const TasksContext = createContext({})

export function useTasks() {
  return useContext(TasksContext)
}

export function TasksProvider({ children }: TasksProviderProps) {
  return <TasksContext.Provider value={{}}>{children}</TasksContext.Provider>
}
