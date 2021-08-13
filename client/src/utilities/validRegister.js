import * as yup from "yup";

function validLogin(data) {
  const schema = yup.object().shape({
    email: yup.string().trim().email().required(),
    password: yup.string().min(8).required(),
  });

  return schema.validate(data);
}

function validRegister(data) {
  const schema = yup.object().shape({
    username: yup.string().min(8).required(),
    email: yup.string().trim().email().required(),
    password: yup.string().min(8).required(),
  });

  return schema.validate(data);
}

export {validLogin, validRegister};
