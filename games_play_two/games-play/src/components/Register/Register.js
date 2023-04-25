import { Link } from "react-router-dom";

import { useForm } from "../../hooks/useForm";
import { useAuthContext } from "../../contexts/AuthContext";

export const Register = () => {
  const { onRegisterSubmit } = useAuthContext();
  const { values, changeHandler, onSubmit } = useForm(
    {
      email: "",
      password: "",
      confirmPassword: "",
    },
    onRegisterSubmit
  );

  return (
    <section id="register-page" className="content auth">
      <form onSubmit={onSubmit} method="POST" id="register">
        <div className="container">
          <div className="brand-logo"></div>
          <h1>Register</h1>

          <label htmlFor="email">Email:</label>
          <input
            value={values.email}
            onChange={changeHandler}
            type="email"
            id="email"
            name="email"
            placeholder="maria@email.com"
          />

          <label htmlFor="pass">Password:</label>
          <input
            value={values.password}
            onChange={changeHandler}
            type="password"
            name="password"
            id="register-password"
          />

          <label htmlFor="con-pass">Confirm Password:</label>
          <input
            value={values.confirmPassword}
            onChange={changeHandler}
            type="password"
            name="confirmPassword"
            id="confirmPassword"
          />

          <input className="btn submit" type="submit" value="Register" />

          <p className="field">
            <span>
              If you already have profile click <Link to="/login">here</Link>
            </span>
          </p>
        </div>
      </form>
    </section>
  );
};
