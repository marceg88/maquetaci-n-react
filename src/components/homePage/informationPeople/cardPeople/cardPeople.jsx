import { Card } from "react-bootstrap"

import "./cardPeople.css"

function CardPeople({ img, name, description }){
  return(
    <Card className="card-container">
      <Card.Img className="img-card" variant="top" src={img}></Card.Img>
      <Card.Body className="card-body">
        <Card.Title className="title-card">{name}</Card.Title>
        <Card.Text className="text-card">
          {description}
          <p>@achoo</p>
        </Card.Text>
      </Card.Body>
    </Card> 
  )
}

export default CardPeople