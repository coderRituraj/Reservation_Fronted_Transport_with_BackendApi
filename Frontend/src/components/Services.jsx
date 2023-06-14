import React from 'react'
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';


const Services = () => {
  return (
    <div>

      <br/>
      <Row xs={1} md={4} className="g-4">
      <Col>
      {Array.from({ length: 1 }).map((_, idx) => (
        <Col>
          <Card style={{width:"300px"}}>
            <Card.Img variant="top" src="https://images.wisegeek.com/girl-using-atm.jpg" style={{widht:"300px", height:"250px"}} />

        <Row xs={1} md={3} className="g-4">
      {Array.from({ length: 1 }).map((_, idx) => (
        <Col>
          <Card>
            <Card.Img variant="top" src="https://media.spokesman.com/photos/2017/11/06/IMG_8374.jpg" width='200' height='10' />

            <Card.Body>
              <Card.Title>ATM'S</Card.Title>
              <Card.Text>
                This is Services
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

      ))}</Col>
      <Col>
      {Array.from({ length: 1 }).map((_, idx) => (
        <Col>
          <Card style={{width:"300px"}}>
            <Card.Img variant="top" src="https://tse1.mm.bing.net/th/id/OIP.d_vofSG-MiThAHi-bgi9GgHaE8?pid=ImgDet&rs=1" style={{widht:"300px", height:"250px"}}/>

      ))}
    </Row>
    <Row xs={1} md={3} className="g-4">
      {Array.from({ length: 1 }).map((_, idx) => (
        <Col>
          <Card>
            <Card.Img variant="top" src="https://th.bing.com/th/id/R.a3b35c358423bf2c981ecfe626fb69bf?rik=brAJKz6HGvoyiA&riu=http%3a%2f%2fmontrosesquareapartments.com%2fblog%2fwp-content%2fuploads%2f2019%2f10%2fapartment-tour-checklist.jpeg&ehk=rt2m%2b%2fMjI4yFXAdUIGRGwZ4Xi7ifb2lqWlLXLnE06Vc%3d&risl=&pid=ImgRaw&r=0" />

            <Card.Body>
              <Card.Title>Flats/PG</Card.Title>
              <Card.Text>
                This is Services
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}

      </Col>
      <Col>
      {Array.from({ length: 1 }).map((_, idx) => (
        <Col>
          <Card style={{width:"300px"}}>
            <Card.Img variant="top" src="https://jooinn.com/images/hotel-1.jpg" style={{width:"300px", height:"250px"}} />

    </Row>
    <Row xs={1} md={3} className="g-4">
      {Array.from({ length: 1 }).map((_, idx) => (
        <Col>
          <Card>
            <Card.Img variant="top" src="https://jooinn.com/images/hotel-1.jpg" />

            <Card.Body>
              <Card.Title>Hotel's</Card.Title>
              <Card.Text>
                This is Services
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}

      </Col>
      <Col>
      {Array.from({ length: 1 }).map((_, idx) => (
        <Col>
          <Card style={{width:"300px"}}>
            <Card.Img variant="top" src="https://th.bing.com/th/id/OIP.t45bHhy5tmFmdY1ieccG-wHaE8?pid=ImgDet&rs=1" style={{widht:"300px", height:"250px"}} />

    </Row>
    <Row xs={1} md={3} className="g-4">
      {Array.from({ length: 1 }).map((_, idx) => (
        <Col>
          <Card>
            <Card.Img variant="top" src="https://th.bing.com/th/id/OIP.t45bHhy5tmFmdY1ieccG-wHaE8?pid=ImgDet&rs=1" />

            <Card.Body>
              <Card.Title>Shopping</Card.Title>
              <Card.Text>
                This is Services
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}

      </Col>
    </Row>
    <br/>
    <br/>

    </Row>

    </div>
  )
}

export default Services