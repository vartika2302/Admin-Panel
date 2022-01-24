import React from "react";
import "./product.scss";
import Chart from "../../components/chart/Chart";
import { productData } from "../../dummyData";
import { Publish } from "@material-ui/icons";

export default function Product() {
  return (
    <div className="product">
      <div className="productWrapper">
        <div className="productTop">
          <h2 className="productTopTitle">Product</h2>
          <button className="productTopBtn">Create</button>
        </div>
        <div className="productMid">
          <div className="productMidLeft">
            <Chart
              data={productData}
              dataKey="Sales"
              title="Sales Performance"
            />
          </div>
          <div className="productMidRight">
            <div className="productInfoTop">
              <img
                src="https://m.media-amazon.com/images/G/01/appcore/accy/V2-AirPods_Pro_Desktop_02._CB449710331_.jpg"
                alt=""
                className="productInfoTopImg"
              />
              <span className="productInfoTopName">Airpods</span>
            </div>
            <div className="productInfoBottom">
              <div className="productInfoItem">
                <span className="productInfoItemKey">Id:</span>
                <span className="productInfoItemValue">123</span>
              </div>
              <div className="productInfoItem">
                <span className="productInfoItemKey">Sales:</span>
                <span className="productInfoItemValue">5123</span>
              </div>
              <div className="productInfoItem">
                <span className="productInfoItemKey">Active:</span>
                <span className="productInfoItemValue">Yes</span>
              </div>
              <div className="productInfoItem">
                <span className="productInfoItemKey">In Stock:</span>
                <span className="productInfoItemValue">No</span>
              </div>
            </div>
          </div>
        </div>
        <div className="productBottom">
          <form className="productBottomForm">
            <div className="productFormLeft">
              <label className="productBottomFormLabel" for="productName">
                Product Name
              </label>
              <input
                className="productBottomFormInput"
                type="text"
                placeholder="Airpods"
                id="productName"
              />
              <label className="productBottomFormLabel" for="stock">
                In Stock
              </label>
              <select className="productSelectInput" name="stock" id="stock">
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>
              <label className="productBottomFormLabel" for="active">
                Active
              </label>
              <select className="productSelectInput" name="active" id="active">
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>
            </div>
            <div className="productFormRight">
              <div className="productImgUpload">
                <img
                  className="productImg"
                  src="https://m.media-amazon.com/images/G/01/appcore/accy/V2-AirPods_Pro_Desktop_02._CB449710331_.jpg"
                  alt=""
                />
                <input type="file" id="file" style={{ display: "none" }} />
                <label htmlFor="file">
                  <Publish className="productImgUploadIcon" />
                </label>
              </div>
              <button className="productUpdateBtn">Update</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
