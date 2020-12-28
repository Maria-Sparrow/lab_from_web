import * as Yup from "yup";

const yup = require("yup");

const Validation = yup.object().shape({
    firstName: Yup.string()
    .min(2, "Must be at least 3 letters!")
    .max(30, "Too long!")
    .required("Required"),
    lastName: Yup.string()
    .min(2, "Must be at least 3 letters!")
    .max(30, "Too long!")
    .required("Required"),
    email: Yup.string()
    .email("Invalid email")
    .required("Required"),
    phone: Yup.string()
        .matches(
        /^((\+38)?\(?\d{3}\)?[\s-]?(\d{7}|\d{3}[\s-]\d{2}[\s-]\d{2}|\d{3}-\d{4}))$/g,"Invalid phone number")
    .required("phone"),
    address: Yup.string()
    .min(2, "Too short name of city!")
    .max(100, "Too long!")
    .required("Required"),
    
    cardNumber: Yup.string()
    .matches(/^(\d{16})$/g, "invalid card number")
    .required("Required"),

    cvvCode: Yup.string()
    .matches(/^(\d{3})$/g, "invalid card cvv")
    .required("Required"),
});

export default Validation;