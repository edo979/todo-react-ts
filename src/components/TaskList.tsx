import { useState } from 'react'
import { Tab, Tabs } from 'react-bootstrap'

export function TaskList() {
  const [key, setKey] = useState<string>('home')

  return (
    <Tabs
      id="controlled-tab"
      activeKey={key}
      onSelect={(k) => k && setKey(k)}
      className="mb-3"
    >
      <Tab eventKey="all" title="all">
        Content
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
