import { createContext, ReactNode, useContext } from 'react'
import { useLocalStorage } from '../hooks/useLocalStorage'

type Task = {
  id: number
  task: string
  isDone: boolean
}

type TasksContext = {
  tasks: Task[]
  addTask: (task: string) => void
  editTask: (id: number, editedTask: string) => void
  finishedTask: (id: number) => void
  removeTask: (id: number) => void
  getTasksFilter: (filterTasks: string) => (t: Task) => boolean
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
  const [tasks, setTasks] = useLocalStorage<Task[]>('taskify-app', [])

  function addTask(task: string): void {
    setTasks((tasks) => [...tasks, { id: getId(tasks), task, isDone: false }])
  }

  function editTask(id: number, editedTask: string): void {
    setTasks((tasks) =>
      tasks.map((t) => {
        if (t.id === id) {
          return { ...t, task: editedTask }
        }
        return t
      })
    )
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

  function finishedTask(id: number): void {
    setTasks((tasks) =>
      tasks.map((task) => {
        if (task.id === id) return { ...task, isDone: !task.isDone }
        return task
      })
    )
  }

  function removeTask(id: number): void {
    setTasks((tasks) => tasks.filter((task) => task.id != id))
  }

  return (
    <TasksContext.Provider
      value={{
        tasks,
        addTask,
        editTask,
        getTasksFilter,
        finishedTask,
        removeTask,
      }}
    >
      {children}
    </TasksContext.Provider>
  )
}
