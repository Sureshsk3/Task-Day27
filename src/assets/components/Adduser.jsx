import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import Preview from "./../components/Preview";
import AxiosService from "../common/Axios";
import Apirouter from "../common/ApiRouter";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
function Adduser() {
  const navigate = useNavigate();
  const [name, setName] = useState();
  const [image, setImage] = useState();
  const [userName, setuserName] = useState();
  const [email, setEmail] = useState();
  const [no, setNo] = useState();
  const [street, setStreet] = useState();
  const [city, setCity] = useState();
  const [zipcode, setZipcode] = useState();
  const [phone, setPhone] = useState();
  const [website, setWebsite] = useState();
  const [company, setCompany] = useState();
  const [companyAdd, setCompanyAdd] = useState();
  const [role, setRole] = useState();

  const handleSubmit = async () => {
    const res = await AxiosService.post(Apirouter.USER.path, {
      name,
      image,
      userName,
      email,
      address: {
        no,
        street,
        city,
        zipcode,
      },
      phone,
      website,
      company: {
        company,
        companyAdd,
        role,
      },
    });
    if (res.status === 201) {
      toast.success("User Added Successful!");
      navigate("/");
    } else {
      toast.error("Internal server Error");
    }
  };
  return (
    <section className="container grid-item mt-5">
      <div className="child-con">
        <Form>
          <Form.Group className="mb-3">
            <Form.Control
              type="text"
              placeholder="Enter Name"
              onChange={(e) => setName(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Control
              type="text"
              placeholder="Enter Image Url"
              onChange={(e) => setImage(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Control
              type="text"
              placeholder="Enter UserName"
              onChange={(e) => setuserName(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Control
              type="email"
              placeholder="Enter Email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>
          <div className="add-input">
            <Form.Group className="mb-3 child">
              <Form.Control
                type="text"
                placeholder="Flat
            /No"
                onChange={(e) => setNo(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3 child">
              <Form.Control
                type="text"
                placeholder="Enter Street"
                onChange={(e) => setStreet(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3 child">
              <Form.Control
                type="text"
                placeholder="Enter City "
                onChange={(e) => setCity(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3 child">
              <Form.Control
                type="number"
                placeholder="Enter Zipcode"
                onChange={(e) => setZipcode(e.target.value)}
              />
            </Form.Group>
          </div>
          <Form.Group className="mb-3">
            <Form.Control
              type="number"
              placeholder="Enter Phone"
              onChange={(e) => setPhone(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Control
              type="text"
              placeholder="Enter Website Url"
              onChange={(e) => setWebsite(e.target.value)}
            />
          </Form.Group>
          <div className="Comp-input">
            <Form.Group className="mb-3 child">
              <Form.Control
                type="text"
                placeholder="Enter Company Name"
                onChange={(e) => setCompany(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3 child">
              <Form.Control
                type="text"
                placeholder="Enter Company Address"
                onChange={(e) => setCompanyAdd(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3 child">
              <Form.Control
                type="text"
                placeholder="Enter Role"
                onChange={(e) => setRole(e.target.value)}
              />
            </Form.Group>
          </div>

          <Button variant="primary" onClick={() => handleSubmit()}>
            Save
          </Button>
        </Form>
      </div>
      <div className="child-con">
        <Preview
          name={name}
          image={image}
          email={email}
          userName={userName}
          no={no}
          street={street}
          city={city}
          zipcode={zipcode}
          phone={phone}
          website={website}
          company={company}
          companyAdd={companyAdd}
          role={role}
        />
      </div>
    </section>
  );
}

export default Adduser;
