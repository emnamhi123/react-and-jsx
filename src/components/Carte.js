import React from "react";
import Card from "react-bootstrap/Card";

const Carte = ({ pcName, pcImage, pcDescription, pcPrice, userPrenom }) => {
  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={pcImage} />
        <Card.Body>
          <Card.Text>
            {pcName}
            <br />
            {pcDescription}
            <br />
            {pcPrice}
            <br />
            {userPrenom}
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Carte;
