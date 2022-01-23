import { ArrowDownward, ArrowUpward } from "@material-ui/icons";
import React from "react";
import "./featuredInfo.scss";

export default function FeaturedInfo() {
  return (
    <div className="featured">
      <div className="featuredItem">
        <div className="featuredTitle">Revenue</div>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">$2,415</span>
          <span className="featuredMoneyRate">
            -11.4
            <ArrowDownward className="featuredMoneyRateIcon negative" />
          </span>
        </div>
        <span className="featuredSubTitle">Compared to last month</span>
      </div>
      <div className="featuredItem">
        <div className="featuredTitle">Sales</div>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">$1,415</span>
          <span className="featuredMoneyRate">
            -1.4
            <ArrowDownward className="featuredMoneyRateIcon negative" />
          </span>
        </div>
        <span className="featuredSubTitle">Compared to last month</span>
      </div>
      <div className="featuredItem">
        <div className="featuredTitle">Cost</div>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">$1,515</span>
          <span className="featuredMoneyRate">
            +2.4
            <ArrowUpward className="featuredMoneyRateIcon positive" />
          </span>
        </div>
        <span className="featuredSubTitle">Compared to last month</span>
      </div>
    </div>
  );
}
