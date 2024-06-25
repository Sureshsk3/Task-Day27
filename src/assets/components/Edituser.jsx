import React, { useState, useEffect } from "react";
import { Button, Form } from "react-bootstrap";
import Preview from "./../components/Preview";
import AxiosService from "../common/Axios";
import Apirouter from "../common/ApiRouter";
import { useNavigate, useParams } from "react-router-dom";
import toast from "react-hot-toast";

function Edituser() {
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

  const { id } = useParams();

  const getData = async (id) => {
    try {
      const res = await AxiosService.get(`${Apirouter.USER.path}/${id}`);
      if (res.status === 200) {
        setName(res.data.name);
        setImage(res.data.image);
        setuserName(res.data.userName);
        setEmail(res.data.email);
        setNo(res.data.address.no);
        setStreet(res.data.address.street);
        setCity(res.data.address.city);
        setZipcode(res.data.address.zipcode);
        setPhone(res.data.phone);
        setWebsite(res.data.website);
        setCompany(res.data.company.company);
        setCompanyAdd(res.data.company.companyAdd);
        setRole(res.data.company.role);
      }
    } catch (error) {
      toast.error("Internal server Error");
    }
  };
  useEffect(() => {
    if (id) {
      getData(id);
    }
  }, []);

  const handleSubmit = async () => {
    try {
      const res = await AxiosService.put(`${Apirouter.USER.path}/${id}`, {
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
      if (res.status === 200) {
        toast.success("User Edited Successful!");
        navigate("/");
      } else {
        toast.error("Internal server Error");
      }
    } catch (error) {
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
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Control
              type="text"
              placeholder="Enter Image Url"
              value={image}
              onChange={(e) => setImage(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Control
              type="text"
              placeholder="Enter UserName"
              value={userName}
              onChange={(e) => setuserName(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Control
              type="email"
              placeholder="Enter Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>
          <div className="add-input">
            <Form.Group className="mb-3 child">
              <Form.Control
                type="text"
                placeholder="Flat
            /No"
                value={no}
                onChange={(e) => setNo(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3 child">
              <Form.Control
                type="text"
                placeholder="Enter Street"
                value={street}
                onChange={(e) => setStreet(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3 child">
              <Form.Control
                type="text"
                placeholder="Enter City "
                value={city}
                onChange={(e) => setCity(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3 child">
              <Form.Control
                type="number"
                placeholder="Enter Zipcode"
                value={zipcode}
                onChange={(e) => setZipcode(e.target.value)}
              />
            </Form.Group>
          </div>
          <Form.Group className="mb-3">
            <Form.Control
              type="number"
              placeholder="Enter Phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Control
              type="text"
              placeholder="Enter Website Url"
              value={website}
              onChange={(e) => setWebsite(e.target.value)}
            />
          </Form.Group>
          <div className="Comp-input">
            <Form.Group className="mb-3 child">
              <Form.Control
                type="text"
                placeholder="Enter Company Name"
                value={company}
                onChange={(e) => setCompany(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3 child">
              <Form.Control
                type="text"
                placeholder="Enter Company Address"
                value={companyAdd}
                onChange={(e) => setCompanyAdd(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3 child">
              <Form.Control
                type="text"
                placeholder="Enter Role"
                value={role}
                onChange={(e) => setRole(e.target.value)}
              />
            </Form.Group>
          </div>

          <Button variant="primary" onClick={() => handleSubmit()}>
            Save
          </Button>
        </Form>
      </div>
    </section>
  );
}

export default Edituser;
