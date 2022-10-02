import { useState } from 'react'
import { TaskList } from './TaskList'
import { Tab, Tabs as TabsBs } from 'react-bootstrap'

export function Tabs() {
  const [key, setKey] = useState<string>('all')

  return (
    <TabsBs
      id="controlled-tab"
      activeKey={key}
      onSelect={(k) => k && setKey(k)}
      className="mb-3"
    >
      <Tab eventKey="all" title="all">
        <TaskList filterTasks="all" />
      </Tab>
      <Tab eventKey="active" title="active">
        <TaskList filterTasks="active" />
      </Tab>
      <Tab eventKey="finished" title="finished">
        <TaskList filterTasks="finished" />
      </Tab>
    </TabsBs>
  )
}
