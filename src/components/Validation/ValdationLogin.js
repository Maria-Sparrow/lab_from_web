import * as Yup from "yup";

const yup = require("yup");

const ValidationLogin = yup.object().shape({
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
    password: Yup.string()
    .min(4, "Vust have at least 8 letters!")
    .max(23, "Too long!")
    .required("Required"),
    age: Yup.number()
    .required("Required"),

}); 

export default ValidationLogin;