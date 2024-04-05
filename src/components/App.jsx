import ContactForm from "./ContactForm/ContactForm"
import SearchBox from "./SearchBox/SearchBox"
import ContactList from "./ContactList/ContactList"

import { useEffect } from "react";
import { Route, Routes} from "react-router-dom";
import { lazy, Suspense } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { fetchContacts } from "../redux/contactsOps";
import { selectError, selectLoading } from "../redux/contactsSlice";
import Layout from "./Layout";

const HomePage = lazy(() => import("../pages/Home"));
const RegisterPage = lazy(() => import("../pages/Register"));
const LoginPage = lazy(() => import("../pages/Login"));
const TasksPage = lazy(() => import("../pages/Tasks"));

export const App = () => {

  const dispatch = useDispatch()
  const loading = useSelector(selectLoading)
  const error = useSelector(selectError)

  useEffect(() => {

    dispatch(fetchContacts())
  }, [dispatch])

  return (
    <div>


<Layout>

<Suspense fallback={<div>Loading...</div>}>

   <Routes>

   <Route path="/" element = {<RegisterPage/>}/>
   <Route path="/register" element = {<RegisterPage/> }/>
   <Route path="/login" element = {<LoginPage/> }/>
   <Route path="/tasks" element = { <TasksPage/> }/>

  
      </Routes>
      </ Suspense>

      </Layout>
    </div>
  );
};


export default App

