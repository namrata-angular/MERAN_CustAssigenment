import React, { useEffect, useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { Form, Button, Toast,Card } from "react-bootstrap";
import ConstantsCustomerForm from "../Constants/CustomerForm";
import Datetime from "react-datetime";
import "react-datetime/css/react-datetime.css";
import ServiceCustomerAdd from "../Services/CustomerAdd";
import ServiceCustomerGetEditinfo from "../Services/CustomerEdit";
import ServiceCustomerGetinfo from "../Services/CustomerGetInfoById";
import { useHistory,useParams } from "react-router-dom";
import { useLocation } from "react-router-dom";

const CustomerForm = () => {
  const  { id } =useParams();
  console.log("params id---------------");
  console.log(id);
  var idUser = window.sessionStorage.getItem("id");
  console.log("idUser" + idUser);
  let history = useHistory();
  const { register, handleSubmit } = useForm();
  const [res, setRes] = useState(0);
  const [show, setShow] = useState(false);
  const location = useLocation();
  console.log("location");
  console.log(location.state);
  var data = location.state[0];
  console.log("DATTATATAT");
  console.log(data);
  console.log(data.firstName);
  //console.log(location.state[0].profilePicture);
   console.log(" outside else" + show);
  const onSubmit = (data) => {
    // console.log("DATA");
    // console.log(data);
     setShow(true);
    console.log(" inside else"+show);
     ServiceCustomerGetEditinfo(data, idUser);
    // history.push("/CustomerList");
  };

  function changeDate(event) {
    console.log("date");
    console.log(event.toDate());
  }

  async function populateGetCustomerInfo(idUser) {
    var response = await ServiceCustomerGetinfo(idUser);
    console.log("response");
    console.log(response[0]);
    console.log(response[0].firstName);
    setRes(response[0]);
  }

  // const OnClickEdit = (data) => {
  //    console.log("data");
  //    console.log(data);
  //    console.log("on click on edit");
  //     // ServiceCustomerGetEditinfo(data, idUser);
  //  // history.push("/CustomerList");
  // };

  // function OnClickEdit() {
  // console.log("data");
  // //console.log(data);
  // console.log("on click on edit");
  // ServiceCustomerGetEditinfo(data, idUser);
  // history.push("/CustomerList");

  // }

  const OnClickEdit = (data) => {
    console.log("data");
    console.log(data);
    console.log("on click on edit");
    //ServiceCustomerGetEditinfo(data, idUser);
    //history.push("/CustomerList");
  };

  function OnClickDisplayList() {
    console.log("Display list clicked");
    history.push("/CustomerList");
  }
  useEffect(() => {
    populateGetCustomerInfo(idUser);
  }, []);
  console.log("data.profilePicture");
  console.log(data.profilePicture);
  // console.log(res[0].firstName);const [startDate, setStartDate] = useState(new Date());
  const [startDate, setStartDate] = useState(new Date());
  return (
    <div style={{ margin: "10%", marginTop: "2%" }}>
      <Card style={{padding:20}}>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              fontWeight: "bold",
            }}
          >
            Customer Form
          </div>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>{ConstantsCustomerForm.CAPTION_FIRSTNAME}</Form.Label>
            <Form.Control
              defaultValue={data.firstName}
              type="name"
              required={true}
              placeholder={ConstantsCustomerForm.CAPTION_PLACEHOLDER_FIRSTNAME}
              {...register("firstName")}
            />
          </Form.Group>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>{ConstantsCustomerForm.CAPTION_LASTNAME}</Form.Label>
            <Form.Control
              defaultValue={data.lastName}
              required={true}
              type="name"
              placeholder={ConstantsCustomerForm.CAPTION_PLACEHOLDER_LASTNAME}
              {...register("lastName")}
            />
          </Form.Group>
          <Form.Label
            className="my-1 mr-2"
            htmlFor="inlineFormCustomSelectPref"
          >
            {ConstantsCustomerForm.CAPTION_OCCUPATION}
          </Form.Label>
          <Form.Control
            required={true}
            as="select"
            className="my-1 mr-sm-2"
            id="inlineFormCustomSelectPref"
            custom
            {...register("occupation")}
            defaultValue={data.occupation}
          >
            <option value="0">Choose...</option>
            <option value={ConstantsCustomerForm.CAPTION_OCCUPATION_EMPLOYED}>
              {ConstantsCustomerForm.CAPTION_OCCUPATION_EMPLOYED}
            </option>
            <option value={ConstantsCustomerForm.CAPTION_OCCUPATION_BUSINESS}>
              {ConstantsCustomerForm.CAPTION_OCCUPATION_BUSINESS}
            </option>
            <option value={ConstantsCustomerForm.CAPTION_OCCUPATION_STUDENT}>
              {ConstantsCustomerForm.CAPTION_OCCUPATION_STUDENT}
            </option>
          </Form.Control>

          <Form.Group controlId="formBasicEmail" {...register("dob")}>
            <Form.Label>{ConstantsCustomerForm.CAPTION_DOB}</Form.Label>
            <Datetime
              selected={startDate}
              onChange={(date) => setStartDate(date)}
              value={startDate}
            />
          </Form.Group>

          <Form.Group controlId="formBasicEmail" defaultValue={data.status}>
            <Form.Label>{ConstantsCustomerForm.CAPTION_STATUS}</Form.Label>
            {["radio"].map((type) => (
              <div key={`inline-${type}`} className="mb-3">
                <Form.Check
                  inline
                  label={ConstantsCustomerForm.CAPTION_STATUS_ACTIVE}
                  value={ConstantsCustomerForm.CAPTION_STATUS_ACTIVE}
                  name="group1"
                  type={type}
                  id={`inline-${type}-1`}
                  {...register("status")}
                  required={true}
                  defaultValue={data.status}
                  defaultChecked={data.status === "Active" ? true : false}
                />
                <Form.Check
                  inline
                  label={ConstantsCustomerForm.CAPTION_STATUS_INACTIVE}
                  value={ConstantsCustomerForm.CAPTION_STATUS_INACTIVE}
                  name="group1"
                  type={type}
                  id={`inline-${type}-2`}
                  {...register("status")}
                  required={true}
                  defaultChecked={data.status === "Inactive" ? true : false}
                  //   defaultValue={data.status}
                />
              </div>
            ))}
          </Form.Group>

          <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Label>{ConstantsCustomerForm.CAPTION_BIO}</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              {...register("bio")}
              defaultValue={data.bio}
              required={true}
            />
          </Form.Group>

          <Form.Group>
            <div>
              <Form.Label>
                {ConstantsCustomerForm.CAPTION_PROFILEPICTURE}
              </Form.Label>
              <Form.File
                // required={true}
                id="ProfilePicture"
                label="Upload File here"
                {...register("ProfilePicture")}
                // value={data.profilePicture}
              />
            </div>
          </Form.Group>
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
              <Toast.Header style={{ color: "green", fontWeight: "bold" }}>
                <img
                  src="holder.js/20x20?text=%20"
                  className="rounded mr-2"
                  alt=""
                />
                <strong className="mr-auto">Success</strong>
                {/* <small>11 mins ago</small> */}
              </Toast.Header>
              <Toast.Body style={{ color: "green", fontWeight: "bold" }}>
                Customer Edited Details Successfully!
              </Toast.Body>
            </Toast>
          </div>

          <div
            style={{
              justifyContent: "space-between",
              alignItems: "center",
              display: "flex",
            }}
          >
            <div>
              <Button variant="primary" type="submit">
                {ConstantsCustomerForm.CAPTION_BUTTON_EDIT}
              </Button>
            </div>

            <div>
              <Button
                variant="primary"
                // type="submit"
                onClick={() => OnClickDisplayList()}
                //onClick={OnClickEdit() }
              >
                {ConstantsCustomerForm.CAPTION_BUTTON_SHOW_CUSTOMERLIST}
              </Button>
            </div>
          </div>
        </Form>
      </Card>
    </div>
  );
};

export default CustomerForm;
