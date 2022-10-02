import { Container, Navbar as NavbarBs, Form, Button } from 'react-bootstrap'

export function Navbar() {
  return (
    <NavbarBs className="px-4 mt-4 shadow-sm" sticky="top">
      <NavbarBs.Brand href="#">Taskify</NavbarBs.Brand>
      <Form className="d-flex w-100">
        <Form.Control
          type="search"
          placeholder="Enter Todo"
          className="me-2"
          size="lg"
        />
        <Button>Go</Button>
      </Form>
    </NavbarBs>
  )
}
