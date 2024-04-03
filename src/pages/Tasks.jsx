import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";


export default function Tasks(){
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch()
    }, [dispatch])

return (
    <>
    <PageTitle>Your tasks</PageTitle>
    <TaskEditor/>
    <div>{isLoading && "Request in progress..."}</div>
    <TaskList />
    </>
)


}