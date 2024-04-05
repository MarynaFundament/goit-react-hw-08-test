import { Formik, Form, Field, ErrorMessage } from "formik"
import * as Yup from 'yup';
import { nanoid } from 'nanoid'

import styles from "./form.module.css"
import { useDispatch } from "react-redux"
import { addContact } from "../../redux/contactsOps"
import { register } from "../../redux/auth/operation";

const initialFormData = {
    name: "",
    number: "",
    password:"",
    id: nanoid()
   }


const UserSchema = Yup.object().shape({
    name: Yup.string()
    .min(3, "Too short!")
    .max(50, "Too long!")
    .required("Name is required"), 

    number: Yup.string()
    .min(3, "Too short!")
    .max(50, "Too long!")
    .required("Number id required"), 
})

export default function RegistrationForm(){
    const dispatch = useDispatch()

    const handleSubmit = (values, actions) => {
        // console.log(values)
        dispatch(register(values));
        actions.resetForm()
    }

            
    return (
        <Formik 
        initialValues = {initialFormData}
        validationSchema = {UserSchema}
        onSubmit = {handleSubmit} >

           <Form> 
            <div className={styles.element}>
                <label htmlFor="name"> Username </label>
                <Field className={styles.field} type="text" name="name"></Field>
                <ErrorMessage name="name"/>
               
            </div>

            <div className={styles.element}>
                <label htmlFor="number"> Email </label>
                <Field className={styles.field} type="text" name="number"></Field> 
                <ErrorMessage name="number"/>

            </div>
                 
            <div className={styles.element}>
                <label htmlFor="password"> Password </label>
                <Field className={styles.field} type="password" name="password"></Field> 
                <ErrorMessage name="password"/>

            </div>

            <button type="submit"> Add contact </button>
            </Form>
        </Formik>
    )
}



    
