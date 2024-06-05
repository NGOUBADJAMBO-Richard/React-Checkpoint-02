// src/Player.js

import React from "react";
import Card from "react-bootstrap/Card";

const Player = ({
  name = "Unknown",
  team = "Unknown",
  nationality = "Unknown",
  jerseyNumber = "Unknown",
  age = "Unknown",
  imageUrl = "https://via.placeholder.com/150",
}) => {
  return (
    <Card style={{ width: "18rem", margin: "10px", boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)" }}>
      <Card.Img variant="top" src={imageUrl} alt={name} />
      <Card.Body style={{ backgroundColor: "#f9f9f9" }}>
        <Card.Title style={{ color: "#333", marginBottom: "10px", textAlign: "center" }}>{name}</Card.Title>
        <Card.Text style={{ fontSize: "14px" }}>
          <strong>Team:</strong> {team}
          <br />
          <strong>Nationality:</strong> {nationality}
          <br />
          <strong>Jersey Number:</strong> {jerseyNumber}
          <br />
          <strong>Age:</strong> {age}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Player;
