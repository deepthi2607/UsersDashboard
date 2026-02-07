import { useState } from "react";

export default function InputForm({
  userDetails,
  setUserDetails,
  users,
  setUsers,
  isEdit,
  setIsEdit,
  setRenderForm,
}) {
  const initialFormValues = {
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
  };
  const [errors, setErrors] = useState(initialFormValues);
  const handleChange = (e) => {
    setUserDetails({ ...userDetails, [e.target.name]: e.target.value });
  };
  const onClose = () => {
    setRenderForm(false);
    setIsEdit(false);
    setErrors(initialFormValues);
    setUserDetails(initialFormValues);
  };
  const validateUser = (user) => {
    const { firstName, lastName, email, phone } = user;
    const formErrors = initialFormValues;
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[A-Za-z]{2,}$/;
    const phoneRegex = /^\+?[1-9]\d{6,14}$/;

    if (firstName.length <= 3) {
      formErrors.firstName = "First name should be minimum of 3 characters";
    }
    if (lastName.length <= 3) {
      formErrors.lastName = "Last name should be minimum of 3 characters";
    }
    if (!phoneRegex.test(phone)) {
      formErrors.phone = "Invalid phone number";
    }
    if (!emailRegex.test(email)) {
      formErrors.email = "Invalid email";
    }
    setErrors(formErrors);
    return Object.values(formErrors).every((err) => !err);
  };
  const addUser = () => {
    const isValid = validateUser(userDetails);
    if (!isValid) return;
    setUsers((users) => [
      { ...userDetails, id: crypto.randomUUID() },
      ...users,
    ]);
    onClose();
  };
  const editUser = () => {
    const isValid = validateUser(userDetails);
    if (!isValid) return;
    const updatedUsers = users.map((user) =>
      user.id === userDetails.id ? userDetails : user
    );
    setUsers(updatedUsers);
    onClose();
  };
  const isFormInvalid = () => {
    const { firstName, lastName, email, phone } = userDetails;
    return firstName === "" || lastName === "" || email === "" || phone === "";
  };
  return (
    <div className="overlay">
      <div className="modal">
        <div>
          <h3 style={{ margin: "0px" }}>{isEdit ? "Edit User" : "Add User"}</h3>
          <form className="form">
            <div className="input-container">
              <label className="label">First Name</label>
              <input
                className="input"
                type="text"
                value={userDetails.firstName}
                name="firstName"
                onChange={handleChange}
              />
              {errors.firstName && (
                <span className="error-text">{errors.firstName}</span>
              )}
            </div>
            <div className="input-container">
              <label className="label">Last Name</label>
              <input
                className="input"
                type="text"
                value={userDetails.lastName}
                name="lastName"
                onChange={handleChange}
              />
              {errors.lastName && (
                <span className="error-text">{errors.lastName}</span>
              )}
            </div>
            <div className="input-container">
              <label className="label">Phone Number </label>
              <input
                className="input"
                type="text"
                value={userDetails.phone}
                name="phone"
                onChange={handleChange}
              />
              {errors.phone && (
                <span className="error-text">{errors.phone}</span>
              )}
            </div>
            <div className="input-container">
              <label className="label">Email Address</label>
              <input
                className="input"
                type="email"
                value={userDetails.email}
                name="email"
                onChange={handleChange}
              />
              {errors.email && (
                <span className="error-text">{errors.email}</span>
              )}
            </div>
          </form>
          <div className="form-btns">
            <button onClick={onClose}>Close</button>
            <span
              title={isFormInvalid() ? "Please fill all mandatory fields" : ""}
            >
              <button
                onClick={isEdit ? editUser : addUser}
                style={{ width: "60px" }}
                disabled={isFormInvalid()}
              >
                {isEdit ? "Update" : "Add"}
              </button>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
