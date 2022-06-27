import React from "react";

function ToDoItems(props){
    // const [isDone, setIsDOne] = useState(false)
    // function handleOnClick(){
    //     setIsDOne((preValue) =>{
    //         return !preValue;
    //     })
    // }

    return(
        <div onClick={() => {props.onChecked(props.id);}}>
            {/* <li style= {{textDecoration: isDone ? "line-through" : null }} >{props.text}</li> */}
            <li >{props.text}</li>
        </div>
    )
}

export default ToDoItems;