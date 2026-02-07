import React, { useEffect, useState } from "react";
import { Users_URL } from "../constants";
import InputForm from "./InputForm";

export default function UsersDashboard() {
  const [users, setUsers] = useState(null);
  const [renderForm, setRenderForm] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [userDetails, setUserDetails] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        setIsLoading(true);
        const res = await fetch(Users_URL);
        const data = await res.json();
        setUsers(data.users);
      } catch (err) {
        console.log("Error fetching users data :", err);
      } finally {
        setIsLoading(false);
      }
    };
    fetchUsers();
  }, []);
  const addNewUser = () => {
    setRenderForm(true);
  };

  const editUser = (id) => {
    const user = users.find((u) => u.id === id);
    setUserDetails(user);
    setRenderForm(true);
    setIsEdit(true);
  };
  const deleteUser = (id) => {
    const filteredUsers = users.filter((u) => u.id !== id);
    setUsers(filteredUsers);
  };
  return isLoading ? (
    <div>Loading Users</div>
  ) : (
    <div className="dashboard-container">
      <button onClick={addNewUser} className="btn">
        Add User
      </button>
      {renderForm && (
        <InputForm
          userDetails={userDetails}
          setUserDetails={setUserDetails}
          users={users}
          setUsers={setUsers}
          isEdit={isEdit}
          setIsEdit={setIsEdit}
          setRenderForm={setRenderForm}
        />
      )}
      <div className="table-container">
        <table className="user-table">
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Phone</th>
              <th>Email</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {users?.map((user) => (
              <tr key={user.id}>
                <td title={user.firstName}>{user.firstName}</td>
                <td title={user.lastName}>{user.lastName}</td>
                <td title={user.phone}>{user.phone}</td>
                <td title={user.email}>{user.email}</td>
                <td>
                  <div className="form-btns">
                    <button
                      onClick={() => editUser(user.id)}
                      style={{ width: "50px" }}
                    >
                      Edit
                    </button>
                    <button onClick={() => deleteUser(user.id)}>Delete</button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
