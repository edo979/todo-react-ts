import { useState } from 'react'
import { TaskList } from './TaskList'
import { Tab, Tabs as TabsBs } from 'react-bootstrap'
import { Todo } from '../hooks/useTasks'

type TabsProps = {
  tasks: Todo[]
}

export function Tabs({ tasks }: TabsProps) {
  const [key, setKey] = useState<string>('all')

  return (
    <TabsBs
      id="controlled-tab"
      activeKey={key}
      onSelect={(k) => k && setKey(k)}
      className="mb-3"
    >
      <Tab eventKey="all" title="all">
        <TaskList tasks={tasks} />
      </Tab>
      <Tab eventKey="active" title="active">
        Content
      </Tab>
      <Tab eventKey="finished" title="finished">
        Content
      </Tab>
    </TabsBs>
  )
}
