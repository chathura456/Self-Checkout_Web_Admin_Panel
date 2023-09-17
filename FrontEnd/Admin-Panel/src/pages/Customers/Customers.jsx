import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import "./Customer.css";

function Customers() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Fetch data from the endpoint
    fetch("http://localhost:5000/users")
      .then((response) => response.json())
      .then((data) => setUsers(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);
  return (
    <div className="main-cont1">
      <h1>Customer</h1>
      <div className="table-container">
        <Table bordered>
          <thead>
            <tr>
              <th>ID</th>
              <th>Username</th>
              <th>Email</th>
              <th>User Type</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user._id}>
                <td>{user._id}</td>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td style={{ textAlign: "center" }}>{user.userType}</td>
                <td style={{ textAlign: "center" }}>
                  <span
                    role="img"
                    aria-label="edit"
                    style={{ cursor: "pointer", marginRight: "10px" }}
                  >
                    ✏️
                  </span>
                  <span
                    role="img"
                    aria-label="delete"
                    style={{ cursor: "pointer" }}
                  >
                    🗑️
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
}

export default Customers;
