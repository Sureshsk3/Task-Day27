import React, { useState, useEffect } from "react";
import { Table } from "react-bootstrap";
import Apirouter from "../common/ApiRouter";
import AxiosService from "../common/Axios";
import { FaUserEdit } from "react-icons/fa";
import { FaTrash } from "react-icons/fa6";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
function ViewUser() {
  const [data, setData] = useState([]);
  const navigate = useNavigate();
  const getData = async () => {
    try {
      const res = await AxiosService.get(Apirouter.USER.path);
      if (res.status === 200) {
        setData(res.data);
      } else {
        toast.error("Internal server Error");
      }
    } catch (error) {
      toast.error("Internal server Error");
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const handleDelete = async (id) => {
    try {
      const res = await AxiosService.delete(`${Apirouter.USER.path}/${id}`);
      if (res.status === 200) {
        toast.success("User Deleted Successful!");
        getData();
      } else {
        toast.error("Internal server Error");
      }
    } catch (error) {
      toast.error("Internal server Error");
    }
  };

  const handleEdit = (id) => {
    navigate(`/edit-user/${id}`);
  };
  return (
    <Table striped bordered hover style={{ textAlign: "center" }}>
      <thead>
        <tr>
          <th>Id</th>
          <th>Name</th>
          <th>Email</th>
          <th>Phone</th>
          <th>Website</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {data.map((e, i) => {
          return (
            <tr key={i}>
              <td>{i + 1}</td>
              <td>{e.name}</td>
              <td>{e.email}</td>
              <td>{e.phone}</td>
              <td>{e.website}</td>
              <td>
                <FaUserEdit
                  className="btn-item"
                  onClick={() => handleEdit(e.id)}
                />
                &nbsp;
                <FaTrash
                  className="btn-item"
                  onClick={() => handleDelete(e.id)}
                />
              </td>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
}

export default ViewUser;
