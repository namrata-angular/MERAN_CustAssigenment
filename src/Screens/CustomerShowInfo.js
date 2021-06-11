import React from 'react';
import {useLocation} from 'react-router-dom';
import {Card} from 'react-bootstrap';
import ConstantCustomerList from '../Constants/CustomerList';
import LogoImg from "../Backend/public/ping/beach.jpg";
const CustomerShowInfo=(props)=>{

    const location=useLocation();
    console.log("location");
    console.log(location.state);
    console.log(location.state[0].profilePicture);

    const photo =
      require(`../Backend/public/ping/${location.state[0].profilePicture}`).default;
    return (
      <div style={{ display: "flex", justifyContent: "center",margin:40 }}>
        <Card bg="Info" text={"dark"} style={{height:"60%",width:'60%'}}>
          <Card.Header style={{fontWeight:'bold'}}>Customer Information</Card.Header>
          <Card.Body>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Card.Title>Profile Picture</Card.Title>

              <img
                style={{ height: "30%", width: "30%" }}
                src={photo}
                alt="user_photo"
              />
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
                alignItems: "center",
                margin:20
              }}
            >
              <Card.Title>
                Name- {location.state[0].firstName} {location.state[0].lastName}
              </Card.Title>

              <Card.Text>
                {ConstantCustomerList.CAPTION_STATUS} -
                {location.state[0].status}
              </Card.Text>
              <Card.Text>
                {ConstantCustomerList.CAPTION_OCCUPATION} -
                {location.state[0].occupation}
              </Card.Text>
            </div>
          </Card.Body>
        </Card>
      </div>
    );
}

export default CustomerShowInfo;

