// src/Player.js
import React from 'react';
import { Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function Player({ name, team, nationality, jerseyNumber, age, image }) {
  const cardStyle = {
    width: '18rem',
    height:"4rem",
    margin: '10px',
    boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)'
  };

  return (
    <Card style={cardStyle}>
      <Card.Img variant="top" src={image} alt={`${name}'s photo`} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
          <strong>Team:</strong> {team} <br />
          <strong>Nationality:</strong> {nationality} <br />
          <strong>Jersey Number:</strong> {jerseyNumber} <br />
          <strong>Age:</strong> {age}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

// Default props
Player.defaultProps = {
  name: "Unknown Player",
  team: "Unknown Team",
  nationality: "Unknown",
  jerseyNumber: 0,
  age: 0,
  image: "https://via.placeholder.com/150"
};

export default Player;
