import React, { useState } from "react";
import "./productsList.scss";
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { productRows } from "../../dummyData";
import { Link } from "react-router-dom";

export default function ProductsList() {
  const [data, setData] = useState(productRows);

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };
  const columns = [
    { field: "id", headerName: "ID", width: 100 },
    {
      field: "product",
      headerName: "Product",
      width: 180,
      renderCell: (params) => {
        return (
          <div className="productListProduct">
            <img src={params.row.img} className="productListProductImg" alt="" />
            {params.row.productname}
          </div>
        );
      },
    },
    {
      field: "stock",
      headerName: "Stock",
      width: 160,
    },
    {
      field: "status",
      headerName: "Status",
      width: 170,
    },
    {
      field: "price",
      headerName: "Price",
      width: 220,
    },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={"/product/" + params.row.id}>
              <button className="productListEditBtn">Edit</button>
            </Link>

            <DeleteOutline
              className="productListDeleteBtn"
              onClick={() => handleDelete(params.row.id)}
            />
          </>
        );
      },
    },
  ];

  return (
    <div className="productsList">
      <DataGrid
        rows={data}
        columns={columns}
        pageSize={8}
        rowsPerPageOptions={[5]}
        checkboxSelection
        disableSelectionOnClick
      />
    </div>
  );
}
