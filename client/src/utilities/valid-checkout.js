import * as yup from "yup";

function validCheckout(data) {
  let schema = yup.object().shape({
    fullName: yup.string().min(8).required(),
    phoneNumber: yup.string().min(8).required(),
    address: yup.string().min(8).required(),
  });

  return schema.isValid(data);
}

export {validCheckout};
