import { Card } from "react-bootstrap";

import "./cardInformationUser.css"

function CardInformationUser({ firstName, lastName, userName, email, age, address, contact }){
    return(
        // <div className="container-profile">
            <Card className="card-container-detail">
            <div className="container-user-top">

            </div>
            <Card.Body className="card-body-detail">
                <Card.Title className="title-card-detail">{userName}</Card.Title>
                <Card.Text className="text-card-detail">
                    <p>User Name: {`${firstName} " " ${lastName}`}</p>
                    <p>Email: {email}</p>
                    <p>Age: {age}</p>
                    <p>Residence Address: {address}</p>
                    <p>Telephone Contact: {contact}</p>
                </Card.Text>
            </Card.Body>
            </Card> 
        // </div>
    )
}

export default CardInformationUser