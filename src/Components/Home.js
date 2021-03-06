import React from 'react';
import { Container, Row, Col, CardDeck, Card, Button, Image } from 'react-bootstrap/';
import { useHistory } from 'react-router-dom';
import WheelCategories from './WheelCategories';
import WheelDecider from "./WheelDecider";

export default function Home() {
  const history = useHistory();
  return (
    <>
      <Container fluid style={{background:"#D3B786",color: '#58483A'}}>
        <Row>
          <h3>What's for dinner?...or breakfast, lunch, snack...</h3>
        </Row>
        <Row>
          <Col lg={1}></Col>
          <Col lg={2}><Image width={150} height={150} src="https://i.postimg.cc/Kcf4HNyn/luke-michael-1c-WZgn-Bh-ZRs-unsplash200.png" roundedCircle 
            alt="Photo of pomegranates, oranges, grapefruits and lemons, Photo by Luke Michael on Unsplash"/></Col>
          <Col lg={2}><Image width={150} height={150} src="https://i.postimg.cc/HnRHXjfk/likemeat-Cb-NAux-SZTFo-unsplash.jpg" rounded 
            alt="Photo of diagonally sliced flatbread pizza, Photo by LikeMeat on Unsplash"/></Col>
          <Col lg={2}><Image width={150} height={150} src="https://i.postimg.cc/T3d4dTyy/brooke-lark-oaz0rays-ASk-unsplash.jpg" roundedCircle
            alt="Photo of pureed vegetable soup with toppings in a bowl with utensils, Photo by Brooke Lark on Unsplash"/></Col>
          <Col lg={2}><Image width={150} height={150} src="https://i.postimg.cc/vTWGsG4q/alison-marras-4zm5e0-Zg-Yj-E-unsplash.jpg" rounded 
            alt="Photo of avocado toast with over-easy egg on white plate, Photo by Alison Marras on Unsplash"/></Col>
          <Col lg={2}><Image width={150} height={150} src="https://i.postimg.cc/P5FbZHqF/nica-cn-Hl-Wz-U-v-Ldf-U-unsplash.jpg" roundedCircle 
            alt="Photo of blueberries, Photo by Nica Cn on Unsplash"/></Col>
          <Col lg={1}></Col>
        </Row>
        <br/>
        <Row>
          <Col lg={6} className="home-cards">
            <CardDeck>  
              <Card style={{width: '400px', height: '515px', background:'#F9EEC9'}}>
                <Card.Header>Feeling like cooking?</Card.Header>
                <Card.Img variant="bottom" width={400} height={250} src="https://i.postimg.cc/vBp6h7gJ/katie-smith-u-Qs1802-D0-CQ-unsplash.jpg" 
                  alt="Photo of ingredients on a cutting board with knife,Photo by Katie Smith on Unsplash"/>
                <Card.Body>
                  <Card.Title></Card.Title>
                  <Card.Text>
                    Need a spot for your favorite menu ideas? Add your unique menu combinations, recipes and notes in the Meals tab.
                  </Card.Text>
                  <Button onClick={() => history.push('/meals')} variant="secondary" style={{background:'#597718'}}>Go to Meals!</Button>
                </Card.Body>
              </Card>
              <Card style={{width: '400px', height: '515px', background:'#F9EEC9'}}>
              <Card.Header>Feeling like writing?</Card.Header>
                <Card.Img variant="bottom" width={400} height={250} src="https://i.postimg.cc/7Y5vvgRC/thom-holmes-k-x-Kzow-QRn8-unsplash.jpg" 
                  alt="Photo of open journal next to coffee mug and milk glass on distressed wood table in a cafe, Photo by Thom Holmes on Unsplash"/>
                <Card.Body>
                  <Card.Title></Card.Title>
                  <Card.Text>
                  Need to journal about any and all things food related? Add your food tracking, things you want to try (or avoid!) and notes in the Journal tab.
                  </Card.Text>
                  <Button onClick={() => history.push('/journal')} variant="secondary" style={{background:'#597718'}}>Go to Journal!</Button>
                </Card.Body>
              </Card>
              </CardDeck>
            </Col>
            <Col lg={3} className="wheel-categories">
              <p>Can't decide? Enter your ideas here and spin the wheel!</p>
              <WheelCategories />
            </Col>
            <Col lg={3} className="wheel-decider">
              <Row>
                <WheelDecider />
              </Row>
            </Col>
          </Row>
      </Container>
    </>
  );
}