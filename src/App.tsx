import { Col, Container, Row } from 'react-bootstrap'
import { Navbar } from './components/Navbar'
import { TaskList } from './components/TaskList'
import { useTodos } from './hooks/useTodos'

function App() {
  const [todos, setTodos] = useTodos()

  const handleAddTodo = (todo: string): void => setTodos(todo)

  return (
    <>
      <Container className="mb-4">
        <Row className="mb-5 justify-content-center">
          <Col xs xl={8}>
            <Navbar addTodo={handleAddTodo} />
          </Col>
        </Row>

        <Row className="justify-content-center">
          <Col xs xl={8}>
            <TaskList todos={todos} />
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default App
