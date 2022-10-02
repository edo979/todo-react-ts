import { useState } from 'react'
import { Tab, Tabs } from 'react-bootstrap'
import { Todo } from '../hooks/useTodos'

type TaskListProps = {
  todos: Todo[]
}

export function TaskList({ todos }: TaskListProps) {
  const [key, setKey] = useState<string>('all')

  return (
    <Tabs
      id="controlled-tab"
      activeKey={key}
      onSelect={(k) => k && setKey(k)}
      className="mb-3"
    >
      <Tab eventKey="all" title="all">
        <ul>
          {todos.map((todo) => (
            <li key={todo.id}>{todo.todo}</li>
          ))}
        </ul>
      </Tab>
      <Tab eventKey="active" title="active">
        Content
      </Tab>
      <Tab eventKey="finished" title="finished">
        Content
      </Tab>
    </Tabs>
  )
}
