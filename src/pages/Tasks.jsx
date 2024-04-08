import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { TaskEditor } from "../components/TaskEditor/TaskEditor";
import { TaskList } from "../components/TaskList/TaskList";

export default function Tasks(){
    const dispatch = useDispatch();


return (
    <>
    <p>Your tasks</p>
    <TaskEditor/>
    <TaskList />
    </>
)


}