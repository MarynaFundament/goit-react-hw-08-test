import { Formik, Form, Field, ErrorMessage } from "formik"
// import * as Yup from 'yup';

import styles from "./form.module.css"
import { useDispatch } from "react-redux"
import { logIn } from "../../redux/auth/operation";

export default function LoginForm(){
   
       const initialFormData = {
        email: "",
        password:"",
       }
    
        const dispatch = useDispatch()
        const handleSubmit = (values, actions) => {
        
            dispatch(logIn(values));
            actions.resetForm()
        }
    
                
        return (
            <Formik 
            initialValues = {initialFormData}
            // validationSchema = {UserSchema}
            onSubmit = {handleSubmit} >
    
               <Form> 
            
    
                <div className={styles.element}>
                    <label htmlFor="email"> Email </label>
                    <Field className={styles.field} type="email" name="email"></Field> 
                    {/* <ErrorMessage name="email"/> */}
    
                </div>
                     
                <div className={styles.element}>
                    <label htmlFor="password"> Password </label>
                    <Field className={styles.field} type="password" name="password"></Field> 
                    {/* <ErrorMessage name="password"/> */}
    
                </div>
    
                <button type="submit"> Login </button>
                </Form>
            </Formik>
        )
    }
    
    
    
        
    

