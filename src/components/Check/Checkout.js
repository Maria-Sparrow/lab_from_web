import { Formik, Form, useField} from "formik";
import { Link } from "react-router-dom";
import Validation from "../Validation/Validation";
import "./Checkout.css"

const CustomInput = ({ label, ...props }) => {
    const [field, meta] = useField(props)
    return (
        <>
            <label htmlFor={props.id || props.name}>{label}</label>
            <input className="file_input" {...field}{...label} placeholder={props.placeholder} />
            {meta.touched && meta.error ? (<div className="text-error">{meta.error}</div>) : null}
        </>
    )
}
function Checkout (){
    return (
        <div className="checkout">
      <Formik
        initialValues={{
          firstName: "",
          lastName:"",
          email: "",
          phone: "",
          address: "",
          cardNumber: "",
          cvvCode: "",
        }}
        validationSchema={Validation}
        onSubmit={(fields) => {
          console.log(fields);
        }}>
            {

        <Form>
        <div className="sectionOfDenys">
        <h1 className="mainTextSection">
        Checkout
      </h1>

        <div className="firstLastName">
        <CustomInput name = "firstName" type="text" placeholder="First name:" />
    
        <CustomInput name="lastName" type="text" placeholder="Last name:" />
           
        </div>
        <div className="emailPhone">
        <CustomInput name="email" type="email" placeholder="Email:" />

        <CustomInput name="phone" type="number" placeholder="Phone number:" />
        
        </div>
        <div className="adressCard">
        <CustomInput name="address" type="text" placeholder="Address:" />
       
        <CustomInput  name="cardNumber" type="number" placeholder="Card number:" />
      
            </div>
          <div className="cvvCode">
          <CustomInput  name="cvvCode" type="number" placeholder="Cvv:" />
          <Link to="/success">
          <button className="buttonSubmit" type="submit">Submit</button>
          </Link>
          </div>
          </div>
        </Form>
}
      </Formik>
    </div>
        
    )
}
export default Checkout