import { VisibilityOutlined } from "@material-ui/icons";
import React from "react";
import "./widgetSm.scss";

export default function WidgetSm() {
  return (
    <div className="widgetSm">
      <div className="widgetSmWrapper">
        <h4 className="widgetSmTitle">New Join Members</h4>
        <ul className="widgetSmList">
          <li className="widgetSmListItem">
            <img
              src="https://i0.wp.com/www.hdwallpapers-free.com/wp-content/uploads/2021/06/cute-girl-love-whatsapp-dp.webp?w=1456&ssl=1"
              alt=""
              className="widgetSmListItemImg"
            />
            <div className="widgetSmListItemInfo">
              <span className="username">Allen Keller</span>
              <span className="position">Software Developer</span>
            </div>
            <button className="display">
              <VisibilityOutlined className="displayIcon"/>
              Display
            </button>
          </li>
          <li className="widgetSmListItem">
            <img
              src="https://i0.wp.com/www.hdwallpapers-free.com/wp-content/uploads/2021/06/cute-girl-love-whatsapp-dp.webp?w=1456&ssl=1"
              alt=""
              className="widgetSmListItemImg"
            />
            <div className="widgetSmListItemInfo">
              <span className="username">Allen Keller</span>
              <span className="position">Software Developer</span>
            </div>
            <button className="display">
              <VisibilityOutlined className="displayIcon"/>
              Display
            </button>
          </li>
          <li className="widgetSmListItem">
            <img
              src="https://i0.wp.com/www.hdwallpapers-free.com/wp-content/uploads/2021/06/cute-girl-love-whatsapp-dp.webp?w=1456&ssl=1"
              alt=""
              className="widgetSmListItemImg"
            />
            <div className="widgetSmListItemInfo">
              <span className="username">Allen Keller</span>
              <span className="position">Software Developer</span>
            </div>
            <button className="display">
              <VisibilityOutlined className="displayIcon" />
              Display
            </button>
          </li>
          <li className="widgetSmListItem">
            <img
              src="https://i0.wp.com/www.hdwallpapers-free.com/wp-content/uploads/2021/06/cute-girl-love-whatsapp-dp.webp?w=1456&ssl=1"
              alt=""
              className="widgetSmListItemImg"
            />
            <div className="widgetSmListItemInfo">
              <span className="username">Allen Keller</span>
              <span className="position">Software Developer</span>
            </div>
            <button className="display">
              <VisibilityOutlined className="displayIcon" />
              Display
            </button>
          </li>
          <li className="widgetSmListItem">
            <img
              src="https://i0.wp.com/www.hdwallpapers-free.com/wp-content/uploads/2021/06/cute-girl-love-whatsapp-dp.webp?w=1456&ssl=1"
              alt=""
              className="widgetSmListItemImg"
            />
            <div className="widgetSmListItemInfo">
              <span className="username">Allen Keller</span>
              <span className="position">Software Developer</span>
            </div>
            <button className="display">
              <VisibilityOutlined className="displayIcon" />
              Display
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
}
