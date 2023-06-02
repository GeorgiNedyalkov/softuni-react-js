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
    // TODO: validate the shape of new values: if new values are like initial values

    setValues(newValues);
  };

  return {
    values,
    onSubmit,
    changeValues,
    changeHandler,
  };
};
