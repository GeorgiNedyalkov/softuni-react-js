import { useState } from "react";

export const useForm = (initialValues, onSubmitHandler) => {
  const [values, setValues] = useState(initialValues);

  const changeHandler = (e) => {
    setValues((state) => ({ ...state, [e.target.name]: e.target.value }));
  };

  const onSubmit = (e) => {
    e.preventDefault();

    setValues(initialValues);

    onSubmitHandler(values);
  };

  const changeValues = (newValues) => {
    // TODO: validate new values shape (like initial values)
    setValues(newValues);
  };

  return { values, changeHandler, onSubmit, changeValues };
};
