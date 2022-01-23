import { Language, NotificationsNone, Settings } from "@material-ui/icons";
import React from "react";
import "./topbar.scss";

export default function Topbar() {
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <span>Admin dashboard</span>
        </div>
        <div className="topRight">
          <div className="iconWrapper">
            <NotificationsNone />
            <span className="iconCount">1</span>
          </div>
          <div className="iconWrapper">
            <Language />
            <span className="iconCount">2</span>
          </div>
          <div className="iconWrapper">
            <Settings />
          </div>
          <img
            src="https://akm-img-a-in.tosshub.com/indiatoday/images/story/202001/black-1850812_960_720.jpeg?_OfKCScGsEG8xvi18KyRcglZ5elmw7Yb&size=770:433"
            alt=""
            className="profilePicture"
          />
        </div>
      </div>
    </div>
  );
}
