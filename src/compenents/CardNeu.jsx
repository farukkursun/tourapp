import { Container, Row, Col, Card } from "react-bootstrap";

const CardNeu = ({data}) => {
  
  return (
    <Container className="mt-4 p-4 d-flex justify-content-center">
      <Row className="g-4">
        {data.map((element) => {
          const {id, title, desc, image}= element;
          return (
            <Col key= {id} sm={12} md={6} lg={4}>
              <Card className="card" >
              <Card.Title className="ms-2">{title}</Card.Title>
                <Card.Img className="img" variant="top" src={image} />
                <Card.Body className="overlay">
                 
                  <Card.Text className="cardtext">{desc}</Card.Text>
                  
                </Card.Body>
              </Card>
            </Col>
          );
        })} 
      </Row>
    </Container>
  )
}

export default CardNeu