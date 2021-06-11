import React, { useEffect, useState } from "react";
import { Table, Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { alert, confirm } from "react-bootstrap-confirmation";
import ConstantsList from "../Constants/CustomerList";
import ServiceGetCustomer from "../Services/CustomerGet";
import ServiceDeleteCustomer from "../Services/Customerdelete";
import ServiceGetInfoById from "../Services/CustomerGetInfoById";
import ServiceEditCustomer from "../Services/CustomerEdit";
import "boxicons";
const CustomerList = () => {
  let history = useHistory();
  const [res, setRes] = useState(0);
  const [UserInfo, setCustomerUserInfo] = useState(0);
  async function OnClickEdit(id) {
  
    window.sessionStorage.setItem("id", id);
   const response = await ServiceGetInfoById(id);
   console.log("response");
   console.log(response);
  // setCustomerUserInfo(response);
   history.push({
     pathname: "/CustomerForm",
     state: response,
   });
  }

  async function OnClickDelete(id) {
    const confirmBox = window.confirm("Do you really want to delete ?");
    if (confirmBox === true) {
      ServiceDeleteCustomer(id);
      window.location.reload(false);
      console.log("True clicked");
    }
  }

  async function populateGetCustomer() {
    var response = await ServiceGetCustomer();
    //

    setRes(response);
  }
  useEffect(() => {
    //window.location.reload(false);
    populateGetCustomer();
  }, []);

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

  return (
    <div style={{ margin: 40 }}>
      {res.length > 0 && (
        <Table striped bordered hover size="sm-6">
          <thead>
            <tr>
              <th>#</th>
              <th>{ConstantsList.CAPTION_FIRSTNAME}</th>
              <th>{ConstantsList.CAPTION_LASTNAME}</th>
              <th>{ConstantsList.CAPTION_STATUS}</th>
              <th>{ConstantsList.CAPTION_OCCUPATION}</th>
              <th></th>
              <th></th>
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
                        <div>
                          <box-icon
                            name="edit"
                            color="blue"
                            onClick={() => OnClickEdit(item._id)}
                          ></box-icon>
                        </div>

                        <div>
                          <box-icon
                            type="solid"
                            name="trash"
                            color="red"
                            onClick={() => OnClickDelete(item._id)}
                          ></box-icon>
                        </div>
                      </div>
                    </td>
                    <td>
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "center",
                        }}
                      >
                        <box-icon
                          name="show"
                          color="green"
                          onClick={() => {
                            onclickCustomer(item._id);
                          }}
                        ></box-icon>
                      </div>
                    </td>
                  </tr>
                )
              )
            )}
          </tbody>
        </Table>
      )}
    </div>
  );
};

export default CustomerList;
