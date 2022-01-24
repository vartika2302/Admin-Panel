import {
  CalendarToday,
  Email,
  LocalActivityOutlined,
  PermIdentity,
  PhoneAndroid,
  Publish,
} from "@material-ui/icons";
import React from "react";
import { Link } from "react-router-dom";
import "./user.scss";

export default function User() {
  return (
    <div className="user">
      <div className="userWrapper">
        <div className="userTop">
          <h3 className="userTitle">Edit User</h3>
          <Link to="/addUser">
            <button className="userCreateBtn">Create</button>
          </Link>
        </div>
        <div className="userBottom">
          <div className="userInfo">
            <div className="userInfoTop">
              <img
                src="https://media.istockphoto.com/photos/portrait-of-smiling-mixed-race-woman-looking-at-camera-picture-id1319763830?b=1&k=20&m=1319763830&s=170667a&w=0&h=wE44n9yP1nrefeqv5DCl5mE3ouU01FNNHeZPR0yDCWA="
                alt=""
                className="userInfoImg"
              />
              <div className="userInfoUser">
                <span className="userInfoUsername">Anna Becker</span>
                <span className="userInfoPosition">Software Engineer</span>
              </div>
            </div>
            <div className="userInfoBottom">
              <div className="userInfoBottomItem">
                <span className="userInfoBottomTitle">Account Details</span>
                <div className="userInfoBottomData">
                  <PermIdentity className="userInfoIcon" />
                  <span className="userInfoBottomDataUser">annabeck99</span>
                </div>
                <div className="userInfoBottomData">
                  <CalendarToday className="userInfoIcon" />
                  <span className="userInfoBottomDataUser">24.01.2022</span>
                </div>
              </div>
              <div className="userInfoBottomItem">
                <span className="userInfoBottomTitle">Contact Details</span>
                <div className="userInfoBottomData">
                  <PhoneAndroid className="userInfoIcon" />
                  <span className="userInfoBottomDataUser">
                    +91 123 567 8919
                  </span>
                </div>
                <div className="userInfoBottomData">
                  <Email className="userInfoIcon" />
                  <span className="userInfoBottomDataUser">
                    annabeck99@gmail.com
                  </span>
                </div>
                <div className="userInfoBottomData">
                  <LocalActivityOutlined className="userInfoIcon" />
                  <span className="userInfoBottomDataUser">New York | USA</span>
                </div>
              </div>
            </div>
          </div>

          <div className="userEdit">
            <h4 className="userEditTitle">Edit</h4>
            <div className="userEditInfo">
              <form className="userEditForm">
                <div className="userEditFormItem">
                  <label className="userEditFormLabel" for="username">
                    Username
                  </label>
                  <input
                    className="userEditFormInput"
                    type="text"
                    placeholder="annabeck99"
                    id="username"
                  />
                </div>
                <div className="userEditFormItem">
                  <label className="userEditFormLabel" for="fullname">
                    Full Name
                  </label>
                  <input
                    className="userEditFormInput"
                    type="text"
                    placeholder="Anna Becker"
                    id="fullname"
                  />
                </div>
                <div className="userEditFormItem">
                  <label className="userEditFormLabel" for="email">
                    Email
                  </label>
                  <input
                    className="userEditFormInput"
                    type="email"
                    placeholder="annabeck99@gmail.com"
                    id="email"
                  />
                </div>
                <div className="userEditFormItem">
                  <label className="userEditFormLabel" for="phone">
                    Phone
                  </label>
                  <input
                    className="userEditFormInput"
                    type="tel"
                    placeholder="+91 123 567 8919"
                    id="phone"
                  />
                </div>
                <div className="userEditFormItem">
                  <label className="userEditFormLabel" for="address">
                    Address
                  </label>
                  <input
                    className="userEditFormInput"
                    type="text"
                    placeholder="New York | USA"
                    id="address"
                  />
                </div>
              </form>
              <div className="userEditUpdate">
                <div className="userEditUpload">
                  <img
                    src="https://media.istockphoto.com/photos/portrait-of-smiling-mixed-race-woman-looking-at-camera-picture-id1319763830?b=1&k=20&m=1319763830&s=170667a&w=0&h=wE44n9yP1nrefeqv5DCl5mE3ouU01FNNHeZPR0yDCWA="
                    alt=""
                    className="userUploadImg"
                  />
                  <input type="file" id="file" style={{ display: "none" }} />
                  <label htmlFor="file">
                    <Publish className="userUploadIcon" />
                  </label>
                </div>
                <button className="updateBtn">Update</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
