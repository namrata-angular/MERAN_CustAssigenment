import React, { useEffect, useState } from "react";
import { Table, Button,Toast } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { alert, confirm } from "react-bootstrap-confirmation";
import ConstantsList from "../Constants/CustomerList";
import ServiceGetCustomer from "../Services/CustomerGet";
import ServiceDeleteCustomer from "../Services/Customerdelete";
import ServiceGetInfoById from "../Services/CustomerGetInfoById";
import ServiceEditCustomer from "../Services/CustomerEdit";
import { Form } from "react-bootstrap";
import "boxicons";
import ConstantsCustomerForm from '../Constants/CustomerForm';
const CustomerList = () => {
  let history = useHistory();
  const [res, setRes] = useState(0);
  const [UserInfo, setCustomerUserInfo] = useState(0);
  const [show, setShow] = useState(false);
  async function OnClickEdit(id) {
  
    window.sessionStorage.setItem("id", id);
   const response = await ServiceGetInfoById(id);
   console.log("response");
   console.log(response);
  // setCustomerUserInfo(response);
   history.push({
     pathname: `/CustomerEditForm/${id}`,
    // search: id,
     state: response,
   });
  }

  async function OnClickDelete(id) {
    const confirmBox = window.confirm("Do you really want to delete ?");
    if (confirmBox === true) {
      setShow(true);
      ServiceDeleteCustomer(id);
      //window.location.reload(false);
      console.log("True clicked");
    }
  }

  async function populateGetCustomer() {
    var response = await ServiceGetCustomer();
    setRes(response);
  }
  useEffect(() => {
    console.log("Inside use");
    //window.location.reload(false);
    populateGetCustomer();
  });

  async function onclickCustomer(id) {
    const response = await ServiceGetInfoById(id);
    console.log("response");
    console.log(response);
    setCustomerUserInfo(response);
    history.push({
      pathname: "/CustomerShowInfo",
      state: response,
    });
  }

  async function OnclickForm(){
    console.log("FOrm button clicked");
    history.push("/CustomerForm");
  }
  return (
    <div style={{ margin: "10%", marginTop: "2%" }}>
      {res.length > 0 && (
        <div>
          <div
            style={{
              position: "relative",
              display: "flex",
              justifyContent: "center",
              //  minHeight: "200px",
            }}
          >
            <Toast
              onClose={() => setShow(false)}
              show={show}
              delay={3000}
              autohide
            >
              <Toast.Header style={{ color: "red", fontWeight: "bold" }}>
                <img
                  src="holder.js/20x20?text=%20"
                  className="rounded mr-2"
                  alt=""
                />
                <strong className="mr-auto">Success</strong>
                {/* <small>11 mins ago</small> */}
              </Toast.Header>
              <Toast.Body style={{ color: "red", fontWeight: "bold" }}>
                Customer Details Deleted Successfully!
              </Toast.Body>
            </Toast>
          </div>

          <Table striped bordered hover size="sm-6">
            <thead>
              <tr>
                <th>#</th>
                <th>{ConstantsList.CAPTION_FIRSTNAME}</th>
                <th>{ConstantsList.CAPTION_LASTNAME}</th>
                <th>{ConstantsList.CAPTION_STATUS}</th>
                <th>{ConstantsList.CAPTION_OCCUPATION}</th>
                <th></th>
                {/* <th></th> */}
              </tr>
            </thead>
            <tbody>
              {res.map(
                (item, i) => (
                  (i = `${i + 1}`),
                  (
                    <tr key={item._id}>
                      <td
                        onClick={() => {
                          onclickCustomer(item._id);
                        }}
                      >
                        {i}
                      </td>
                      <td
                        onClick={() => {
                          onclickCustomer(item._id);
                        }}
                      >
                        {item.firstName}
                      </td>
                      <td
                        onClick={() => {
                          onclickCustomer(item._id);
                        }}
                      >
                        {item.lastName}
                      </td>
                      <td
                        onClick={() => {
                          onclickCustomer(item._id);
                        }}
                      >
                        {item.status}
                      </td>
                      <td
                        onClick={() => {
                          onclickCustomer(item._id);
                        }}
                      >
                        {item.occupation}
                      </td>
                      <td>
                        {/* <Button variant="" type="submit">
                    <box-icon name="edit" color="blue"></box-icon>
                  </Button> */}
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "space-around",
                          }}
                        >
                          <div style={{ cursor: "pointer" }}>
                            <box-icon
                              name="edit"
                              color="blue"
                              onClick={() => OnClickEdit(item._id)}
                            ></box-icon>
                          </div>

                          <div style={{ cursor: "pointer" }}>
                            <box-icon
                              type="solid"
                              name="trash"
                              color="red"
                              onClick={() => OnClickDelete(item._id)}
                            ></box-icon>
                          </div>

                          {/* </td>
                    <td> */}
                          <div style={{ cursor: "pointer" }}>
                            <box-icon
                              name="show"
                              color="green"
                              onClick={() => {
                                onclickCustomer(item._id);
                              }}
                            ></box-icon>
                          </div>
                        </div>
                      </td>
                    </tr>
                  )
                )
              )}
            </tbody>
          </Table>
        </div>
      )}
      <div
        style={{
          alignSelf: "center",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Button variant="primary" type="submit" onClick={() => OnclickForm()}>
          {ConstantsCustomerForm.CAPTION_BUTTON_CREATE}
        </Button>
      </div>
    </div>
  );
};

export default CustomerList;
