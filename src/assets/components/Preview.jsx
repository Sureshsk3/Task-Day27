import React from "react";
import { Card } from "react-bootstrap";
import User from "./../User.png";

function Preview(props) {
  return (
    <Card style={{ width: "20rem" }} className="card-con">
      <Card.Img
        className="top mt-3 mb-3"
        src={props.image ? props.image : User}
        style={{ width: "200px", height: "200px" }}
      />
      <Card.Body>
        <Card.Title>
          <strong>
            <i>NAME : {props.name}</i>
          </strong>
        </Card.Title>
        <Card.Text>UserName : {props.userName} </Card.Text>
        <Card.Text>Email : {props.email}</Card.Text>
        <Card.Text>
          Address : {props.no} {props.street} {props.city} {props.zipcode}.{" "}
        </Card.Text>
        <Card.Text>Phone: {props.phone}</Card.Text>
        <Card.Text>WebSite : {props.website} </Card.Text>
        <Card.Text>
          Company : {props.company} {props.companyAdd} {props.role}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default Preview;
