import { Formik, Form, useField } from "formik";
import { Link } from "react-router-dom";
import Validation from "../Validation/ValdationLogin";
import "./Login.css"
const CustomInput = ({ label, ...props }) => {
    const [field, meta] = useField(props)
    return (
        <>
            <label htmlFor={props.id || props.name}>{label}</label>
            <input className="file_input_second" {...field}{...label} placeholder={props.placeholder} />
            {meta.touched && meta.error ? (<div className="text-error-second">{meta.error}</div>) : null}
        </>
    )
}
function Login (){
    return (
        <div className="Login">
          <h1 className="mainTitleSecond"> Login Page </h1>
    
          <Formik
            initialValues={{
              firstName: "",
              lastName: "",
              email: "",
              password: "",
              birthDate: "",
              age: "",
            }}
            validationSchema={Validation}
            onSubmit={(fields) => {
              console.log(fields);
            }}>
                
            <Form style={{ display: "flex", flexDirection: "column" }}>
             <div className="firstLastSecond">
             <CustomInput name="firstName" type="text" placeholder="First Name" />
             <CustomInput name="lastName" type="text" placeholder="Last Name" />
             </div>
             <div className="emailPasswdSecond">
             <CustomInput name="email" type="email" placeholder="Email"  />
             <CustomInput name="password" type="text" placeholder="Password"  />
                 </div>

                 <div className="birthdAgeSecond">
    
                 <CustomInput name="age" type="number" placeholder="Age" />
                 <Link to="/">
              <button className="buttonSubmitSecond" type="submit">Send</button>
            </Link>
              </div>
            
            </Form>
          </Formik>
        </div>
      );
    }
export default Login