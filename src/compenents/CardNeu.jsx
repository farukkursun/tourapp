import { Container, Row, Col, Card } from "react-bootstrap";

const CardNeu = ({dat}) => {
  // console.log(dat);
  return (
    <Container className="mt-4 p-4 d-flex justify-content-center">
      <Row className=" g-3">
        {dat.map((eleman) => {
          return (
            <Col sm={12} md={6} lg={3}>
              <Card className="card" >
              <Card.Title>{eleman.title}</Card.Title>
                <Card.Img className="img" variant="top" src={eleman.image} />
                <Card.Body className="overlay">
                 
                  <Card.Text className="cardtext">{eleman.desc}</Card.Text>
                  
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