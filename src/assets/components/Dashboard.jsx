import React, { useEffect, useState } from "react";
import { Card, ListGroup } from "react-bootstrap";
import AxioService from "./../common/Axios";
import Apirouter from "../common/ApiRouter";
import toast from "react-hot-toast";
function Dashboard() {
  const [data, setData] = useState([]);

  const getdata = async () => {
    try {
      const res = await AxioService.get(Apirouter.USER.path);
      if (res.status === 200) {
        setData(res.data);
      }
    } catch (error) {
      toast.error("Internal server Error");
    }
  };

  useEffect(() => {
    getdata();
  }, []);
  return (
    <section className="container mt-3">
      <div className="row">
        {data.map((e, i) => {
          return (
            <Card style={{ width: "22rem" }} className="card" key={i}>
              <div className="img-item">
                <Card.Img
                  variant="top"
                  src={e.image}
                  className="mt-3"
                  style={{ width: "150px" }}
                />
              </div>
              <Card.Body>
                <Card.Title>{console.log(e)}</Card.Title>
                <Card.Text>
                  <strong>
                    <h>NAME : {e.name}</h>
                  </strong>
                </Card.Text>
              </Card.Body>
              <ListGroup className="list-group-flush">
                <ListGroup.Item className="card-item">
                  UserName : {e.userName}
                </ListGroup.Item>
                <ListGroup.Item className="card-item">
                  Email : {e.email}
                </ListGroup.Item>
                <ListGroup.Item className="card-item">
                  Phone : {e.phone}
                </ListGroup.Item>
                <ListGroup.Item className="card-item">
                  Website : {e.website}
                </ListGroup.Item>
                <ListGroup.Item className="card-item">
                  Address : {e.address.no} {e.address.street} {e.address.city}{" "}
                  {e.address.zipcode}
                </ListGroup.Item>
                <ListGroup.Item className="card-item">
                  Company : {e.company.company} {e.company.companyAdd}{" "}
                  {e.company.role}
                </ListGroup.Item>
              </ListGroup>
            </Card>
          );
        })}
      </div>
      <div></div>
    </section>
  );
}

export default Dashboard;
