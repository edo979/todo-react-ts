import { useRef } from 'react'
import { Container, Navbar as NavbarBs, Form, Button } from 'react-bootstrap'

type NavbarProps = {
  addTodo: (todo: string) => void
}

export function Navbar({ addTodo }: NavbarProps) {
  const input = useRef()

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

          addTodo(input.current.value)
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
