import React from "react";
import "./addUser.scss";

export default function AddUser() {
  return (
    <div className="addUser">
      <div className="addUserWrapper">
        <h2 className="addUserTitle">New User</h2>
        <form className="addUserForm">
          <div className="addUserFormItem">
            <label className="addUserFormLabel">Username</label>
            <input
              className="addUserFormInput"
              type="text"
              placeholder="anna"
            />
          </div>
          <div className="addUserFormItem">
            <label className="addUserFormLabel">Full Name</label>
            <input
              className="addUserFormInput"
              type="text"
              placeholder="Anna Becker"
            />
          </div>
          <div className="addUserFormItem">
            <label className="addUserFormLabel">Email</label>
            <input
              className="addUserFormInput"
              type="email"
              placeholder="anna@gmail.com"
            />
          </div>
          <div className="addUserFormItem">
            <label className="addUserFormLabel">Password</label>
            <input
              className="addUserFormInput"
              type="password"
              placeholder="password"
            />
          </div>
          <div className="addUserFormItem">
            <label className="addUserFormLabel">Phone</label>
            <input
              className="addUserFormInput"
              type="text"
              placeholder="+91 123 456 8919"
            />
          </div>
          <div className="addUserFormItem">
            <label className="addUserFormLabel">Address</label>
            <input
              className="addUserFormInput"
              type="text"
              placeholder="New York | USA"
            />
          </div>
          <div className="addUserFormItem">
            <label className="addUserFormLabel">Gender</label>
            <div className="radioItem">
              <input type="radio" name="gender" value="male" id="male" />
              <label for="male">Male</label>
            </div>
            <div className="radioItem">
              <input type="radio" name="gender" value="female" id="female" />
              <label for="male">Female</label>
            </div>
            <div className="radioItem">
              <input type="radio" name="gender" value="other" id="other" />
              <label for="other">Other</label>
            </div>
          </div>
          <div className="addUserFormItem">
            <label className="addUserFormLabel" for="status">
              Active
            </label>
            <select name="status" id="status">
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </div>
          <button type="submit" className="addUserCreateBtn">
            Create
          </button>
        </form>
      </div>
    </div>
  );
}
