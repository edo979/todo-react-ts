import { Col, Container, Row } from 'react-bootstrap'
import { Navbar } from './components/Navbar'
import { Tabs } from './components/Tabs'

function App() {
  return (
    <>
      <Container className="mb-4">
        <Row className="mb-5 justify-content-center">
          <Col xs xl={8}>
            <Navbar />
          </Col>
        </Row>

        <Row className="justify-content-center">
          <Col xs xl={8}>
            <Tabs />
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default App
