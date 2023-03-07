import { useState } from "react";

const INITIAL_FORM = {
  firstName: "",
  lastName: "",
  email: "",
  imageUrl: "",
  phoneNumber: "",
  address: {
    country: "",
    city: "",
    street: "",
    streetNumber: "",
  },
};

const EditUser = ({ setIsEdittingUser }) => {
  const [form, setForm] = useState(INITIAL_FORM);
  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name.includes(".")) {
      const [parent, child] = name.split(".");
      setForm({
        ...form,
        address: {
          ...form.address,
          [parent]: {
            ...form.address[parent],
            [child]: value,
          },
        },
      });
    } else {
      setForm({
        ...form,
        [name]: value,
      });
    }
  };

  return (
    <div className="overlay">
      <div className="backdrop"></div>
      <div className="modal">
        <div className="user-container">
          <header className="headers">
            <h2>Edit User</h2>

            <CloseButton setIsEdittingUser={setIsEdittingUser} />
          </header>
          <form>
            <div className="form-row">
              <FormGroup
                label="First Name"
                name="firstName"
                error="First name should be at least 3 characters long!"
                icon="fa-solid fa-user"
                value={form.firstName}
                handleChange={handleChange}
              />
              <FormGroup
                label="Last Name"
                name="lastName"
                error="Last name should be at least 3 characters long!"
                icon="fa-solid fa-user"
                value={form.lastName}
                handleChange={handleChange}
              />
            </div>
            <div className="form-row">
              <FormGroup
                label="Email"
                name="email"
                error="Email is not valid!"
                icon="fa-solid fa-envelope"
                value={form.email}
                handleChange={handleChange}
              />
              <FormGroup
                label="Image Url"
                name="imageUrl"
                icon="fa-solid fa-image"
                error="ImageUrl is not valid!"
                value={form.imageUrl}
                handleChange={handleChange}
              />
            </div>
            <div className="form-row">
              <FormGroup
                label="Country"
                name="country"
                icon="fa-solid fa-map"
                error="Country should be at least 2 characters long!"
                value={form.address.country}
                handleChange={handleChange}
              />
              <FormGroup
                label="City"
                name="city"
                icon="fa-solid fa-city"
                error="City should be at least 3 characters long!"
                value={form.address.city}
                handleChange={handleChange}
              />
            </div>
            <div className="form-row">
              <FormGroup
                label="Street"
                name="street"
                icon="fa-solid fa-map"
                error="Street should be at least 3 characters long!"
                value={form.address.street}
                handleChange={handleChange}
              />
              <FormGroup
                label="Street Number"
                name="streetNumber"
                icon="fa-solid fa-house-chimney"
                error="Street number should be a positive number!"
                value={form.address.streetNumber}
                handleChange={handleChange}
              />
            </div>
            <div id="form-actions">
              <button id="action-save" className="btn" type="submit">
                Save
              </button>
              <button
                onClick={() => setIsEdittingUser(false)}
                id="action-cancel"
                className="btn"
                type="button"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditUser;

const FormGroup = ({ label, name, error, icon, handleChange, value }) => {
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <div className="input-wrapper">
        <span>
          <i className={icon}></i>
        </span>
        <input
          value={value}
          onChange={handleChange}
          id={name}
          name={name}
          type="text"
        />
      </div>
      <p className="form-error">{error}</p>
    </div>
  );
};

const CloseButton = ({ setIsEdittingUser }) => {
  return (
    <button onClick={() => setIsEdittingUser(false)} className="btn close">
      <svg
        aria-hidden="true"
        focusable="false"
        data-prefix="fas"
        data-icon="xmark"
        className="svg-inline--fa fa-xmark"
        role="img"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 320 512"
      >
        <path
          fill="currentColor"
          d="M310.6 361.4c12.5 12.5 12.5 32.75 0 45.25C304.4 412.9 296.2 416 288 416s-16.38-3.125-22.62-9.375L160 301.3L54.63 406.6C48.38 412.9 40.19 416 32 416S15.63 412.9 9.375 406.6c-12.5-12.5-12.5-32.75 0-45.25l105.4-105.4L9.375 150.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 210.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-105.4 105.4L310.6 361.4z"
        ></path>
      </svg>
    </button>
  );
};
