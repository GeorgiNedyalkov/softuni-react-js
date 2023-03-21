import { useState } from "react";

export const useForm = (initialValues, onSubmitHandler) => {
  const [values, setFormValues] = useState(initialValues);

  const changeHandler = (e) => {
    setFormValues((state) => ({ ...state, [e.target.name]: e.target.value }));
  };

  const onSubmit = (e) => {
    e.preventDefault();

    onSubmitHandler(values);
  };

  return { values, changeHandler, onSubmit };
};
