import React, { useState } from "react";
import TaskFormHock from "./task-form";


//window for filling in fields, open / close
const CreateTodo = (props) => {
    const [editMode, setEditMode] = useState(false);

    const open = () => {
        setEditMode(true);
    };

    const cancel = () => {
        setEditMode(false);
    };


    //form fields
    const createTask = (value) => {
        props.addTaskAC(value.addTask, value.userName, value.time);

        setEditMode(false);
    };

    return (
        <div>
            <h1 className="project-name"> {props.name}</h1>
            {editMode ? 
                <center>
                    <TaskFormHock onSubmit={createTask} user={props.user} />
                    <i
                        className="material-icons"
                        title="Сancell"
                        onClick={cancel}
                    >
                        close
                    </i>
                </center>: 
                <div onClick={open}>
                    <div className="for-add-btn">
                        <i className="material-icons" title="Add Task">
                            add_circle
                        </i>
                    </div>
                </div>
            }
        </div>
    );
};

export default CreateTodo;
