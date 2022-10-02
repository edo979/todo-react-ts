import { createContext, ReactNode, useContext, useState } from 'react'

type Task = {
  id: number
  task: string
  isDone: boolean
}

type TasksContext = {
  tasks: Task[]
  addTask: (task: string) => void
  getTasksFilter: (filterTasks: string) => (t: Task) => boolean
  finishedTask: (task: Task) => void
  removeTask: (id: number) => void
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
    setTasks((tasks) => [...tasks, { id: getId(tasks), task, isDone: false }])
  }

  function getTasksFilter(filterTasks: string): (t: Task) => boolean {
    switch (filterTasks) {
      case 'any':
        return (t) => true

      case 'active':
        return (t) => !t.isDone

      case 'finished':
        return (t) => t.isDone

      default:
        return (t) => true
    }
  }

  function finishedTask(task: Task): void {
    setTasks((tasks) =>
      tasks.map((t) => {
        if (t.id === task.id) return { ...t, isDone: !t.isDone }
        return t
      })
    )
  }

  function removeTask(id: number): void {
    setTasks((tasks) => tasks.filter((task) => task.id != id))
  }

  return (
    <TasksContext.Provider
      value={{
        addTask,
        tasks,
        getTasksFilter,
        finishedTask,
        removeTask,
      }}
    >
      {children}
    </TasksContext.Provider>
  )
}
