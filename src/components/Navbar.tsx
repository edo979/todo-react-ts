import { useRef } from 'react'
import { Navbar as NavbarBs, Form, Button } from 'react-bootstrap'
import { useTasks } from '../context/TasksContext'

export function Navbar() {
  const input = useRef<HTMLInputElement>(null)
  const { addTask } = useTasks()

  return (
    <NavbarBs
      className="px-4 mt-4 shadow-sm flex-sm-row flex-column"
      sticky="top"
    >
      <NavbarBs.Brand href="#">Taskify</NavbarBs.Brand>
      <Form
        className="d-flex  w-100 flex-sm-row flex-column gap-2 gap-sm-0"
        onSubmit={(e) => {
          e.preventDefault()

          if (input.current == null || input.current.value === '') return
          addTask(input.current.value)
        }}
      >
        <Form.Control
          ref={input}
          type="search"
          placeholder="Enter Todo"
          className="me-2"
          size="lg"
        />
        <Button type="submit">Go</Button>
      </Form>
    </NavbarBs>
  )
}
