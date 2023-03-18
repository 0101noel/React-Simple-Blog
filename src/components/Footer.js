import { Container, Row, Col } from 'react-bootstrap';

function Footer() {
  return (
    <Container fluid className="bg-light mt-5">
      <Row>
        <Col className="text-center py-3">
          <p>&copy; 2023 Capstone Project</p>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
