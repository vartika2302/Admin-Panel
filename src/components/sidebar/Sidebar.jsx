import {
  LineStyle,
  TrendingUp,
  Timeline,
  PersonOutlined,
  AttachMoney,
  Poll,
  IndeterminateCheckBox,
  Email,
  Feedback,
  Message,
  Report,
  BusinessCenter,
} from "@material-ui/icons";
import "./sidebar.scss";
import React from "react";
import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarItemContainer">
          <h3 className="sidebarTitle">Dashboard</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem active">
              <Link to="/" className="sidebarLink active">
                <LineStyle className="sidebarListItemIcon" />
                Home
              </Link>
            </li>

            <li className="sidebarListItem">
              <Timeline className="sidebarListItemIcon" />
              Analytics
            </li>
            <li className="sidebarListItem">
              <TrendingUp className="sidebarListItemIcon" />
              Sales
            </li>
          </ul>
        </div>
        <div className="sidebarItemContainer">
          <h3 className="sidebarTitle">Quick Menu</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem">
              <Link to="/users" className="sidebarLink">
                <PersonOutlined className="sidebarListItemIcon" />
                Users
              </Link>
            </li>

            <li className="sidebarListItem">
              <Link to="/products" className="sidebarLink">
                <IndeterminateCheckBox className="sidebarListItemIcon" />
                Products
              </Link>
            </li>
            <li className="sidebarListItem">
              <AttachMoney className="sidebarListItemIcon" />
              Transactions
            </li>
            <li className="sidebarListItem">
              <Poll className="sidebarListItemIcon" />
              Reports
            </li>
          </ul>
        </div>
        <div className="sidebarItemContainer">
          <h3 className="sidebarTitle">Notifications</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem">
              <Email className="sidebarListItemIcon" />
              Mail
            </li>
            <li className="sidebarListItem">
              <Feedback className="sidebarListItemIcon" />
              Feedback
            </li>
            <li className="sidebarListItem">
              <Message className="sidebarListItemIcon" />
              Messages
            </li>
          </ul>
        </div>
        <div className="sidebarItemContainer">
          <h3 className="sidebarTitle">Staff</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem">
              <BusinessCenter className="sidebarListItemIcon" />
              Manage
            </li>
            <li className="sidebarListItem">
              <Timeline className="sidebarListItemIcon" />
              Analytics
            </li>
            <li className="sidebarListItem">
              <Report className="sidebarListItemIcon" />
              Reports
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
