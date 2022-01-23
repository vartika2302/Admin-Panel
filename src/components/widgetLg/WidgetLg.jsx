import React from "react";
import "./widgetLg.scss";

export default function WidgetLg() {
  const Button =({type})=>{
    return <button className={`widgetLgButton ${type}`}>{type}</button>
  }
  return (
    <div className="widgetLg">
      <div className="widgetLgWrapper">
        <h4 className="widgetLgTitle">Latest Transactions</h4>
        <table className="widgetLgTable">
          <tr className="widgetLgTableHeader">
            <th className="widgetLgTableHeading">Customer</th>
            <th className="widgetLgTableHeading">Date</th>
            <th className="widgetLgTableHeading">Amount</th>
            <th className="widgetLgTableHeading">Status</th>
          </tr>
          <tr className="widgetLgTableRow">
            <td className="widgetLgTableUser">
              <img
                src="https://images.unsplash.com/photo-1536063211352-0b94219f6212?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YmVhdXRpZnVsJTIwZ2lybHxlbnwwfHwwfHw%3D&w=1000&q=80"
                alt=""
                className="widgetLgTableUserImg"
              />
              <span className="widgetLgTableUsername">Susan Carol</span>
            </td>
            <td className="widgetLgDate">24 Jan 2022</td>
            <td className="widgetLgAmount">$122.00</td>
            <td className="widgetLgStatus"><Button type="Approved"/></td>
          </tr>
          <tr className="widgetLgTableRow">
            <td className="widgetLgTableUser">
              <img
                src="https://images.unsplash.com/photo-1536063211352-0b94219f6212?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YmVhdXRpZnVsJTIwZ2lybHxlbnwwfHwwfHw%3D&w=1000&q=80"
                alt=""
                className="widgetLgTableUserImg"
              />
              <span className="widgetLgTableUsername">Susan Carol</span>
            </td>
            <td className="widgetLgDate">24 Jan 2022</td>
            <td className="widgetLgAmount">$122.00</td>
            <td className="widgetLgStatus"><Button type="Declined"/></td>
          </tr>
          <tr className="widgetLgTableRow">
            <td className="widgetLgTableUser">
              <img
                src="https://images.unsplash.com/photo-1536063211352-0b94219f6212?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YmVhdXRpZnVsJTIwZ2lybHxlbnwwfHwwfHw%3D&w=1000&q=80"
                alt=""
                className="widgetLgTableUserImg"
              />
              <span className="widgetLgTableUsername">Susan Carol</span>
            </td>
            <td className="widgetLgDate">24 Jan 2022</td>
            <td className="widgetLgAmount">$122.00</td>
            <td className="widgetLgStatus"><Button type="Pending"/></td>
          </tr>
          <tr className="widgetLgTableRow">
            <td className="widgetLgTableUser">
              <img
                src="https://images.unsplash.com/photo-1536063211352-0b94219f6212?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YmVhdXRpZnVsJTIwZ2lybHxlbnwwfHwwfHw%3D&w=1000&q=80"
                alt=""
                className="widgetLgTableUserImg"
              />
              <span className="widgetLgTableUsername">Susan Carol</span>
            </td>
            <td className="widgetLgDate">24 Jan 2022</td>
            <td className="widgetLgAmount">$122.00</td>
            <td className="widgetLgStatus"><Button type="Approved"/></td>
          </tr>
        </table>
      </div>
    </div>
  );
}
