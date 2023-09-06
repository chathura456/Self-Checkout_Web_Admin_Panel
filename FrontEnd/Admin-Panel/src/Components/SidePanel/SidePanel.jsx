import "@fortawesome/fontawesome-free/css/all.min.css";
import { MDBBtn, MDBIcon } from "mdb-react-ui-kit";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import React from "react";
import "./SidePanel.css";
/*
const SidePanel = () => {
  return (
    <div className="side-panel">
      <h1 className="website-name">Self Checkout</h1>
      <div className="buttons-section">
        <MDBBtn block color="primary" className="mb-2">
          <MDBIcon fas icon="tachometer-alt" className="me-2" />
          Dashboard
        </MDBBtn>
        <MDBBtn block color="primary" className="mb-2">
          <MDBIcon fas icon="box" className="me-2" />
          Products
        </MDBBtn>
        <MDBBtn block color="primary" className="mb-2">
          <MDBIcon fas icon="shopping-cart" className="me-2" />
          Orders
        </MDBBtn>
        <MDBBtn block color="primary" className="mb-2">
          <MDBIcon fas icon="users" className="me-2" />
          Customers
        </MDBBtn>
      </div>
      <div className="logout-section">
        <MDBBtn block color="danger">
          <MDBIcon fas icon="sign-out-alt" className="me-2" />
          Log Out
        </MDBBtn>
      </div>
    </div>
  );
};

export default SidePanel;
*/

const SidePanel = () => {
  return (
    <div className="side-panel">
      <h1 className="website-name">Self Checkout</h1>
      <hr />
      <div className="buttons-section">
        <MDBBtn
          block
          color="green"
          className="p-3 mb-2 align-left custom-btn-color"
          style={{ boxShadow: "none", border: "none" }}
        >
          <MDBIcon
            fas
            icon="tachometer-alt"
            className="me-2"
            style={{ boxShadow: "none", border: "none" }}
          />
          Dashboard
        </MDBBtn>
        <MDBBtn
          block
          color="green"
          className="p-3 mb-2 align-left"
          style={{ boxShadow: "none", border: "none" }}
        >
          <MDBIcon fas icon="box" className="me-2" />
          Products
        </MDBBtn>
        <MDBBtn
          block
          color="green"
          className="p-3 mb-2 align-left"
          style={{ boxShadow: "none", border: "none" }}
        >
          <MDBIcon fas icon="shopping-cart" className="me-2" />
          Orders
        </MDBBtn>
        <MDBBtn
          block
          color="green"
          className="p-3 mb-2 align-left"
          style={{ boxShadow: "none", border: "none" }}
        >
          <MDBIcon fas icon="users" className="me-2" />
          Customers
        </MDBBtn>
      </div>
      <div className="logout-section">
        <MDBBtn
          block
          color="green"
          className="p-3 mb-6 align-left"
          style={{ boxShadow: "none", border: "none" }}
        >
          <MDBIcon fas icon="sign-out-alt" className="me-2" />
          Log Out
        </MDBBtn>
      </div>
    </div>
  );
};

export default SidePanel;
