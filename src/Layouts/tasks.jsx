import React from "react";

const Tasks = (props) => {
    // only if the task list is not empty display symbols for working with fields
    return (
        <div>
            {props.title? 
                <div className="tasks">
                    <table>
                        <tr>
                            <th className="title">{props.title}</th>
                            <th className="name">{props.userName}</th>
                            <th className="time">{props.time}</th>
                            <th>
                                <i
                                    className="material-icons delete"
                                    onClick={() => props.deleteTaskAC(props.id)}
                                >
                                    delete
                                </i>
                            </th>
                        </tr>
                    </table>
                </div>
             :null}
        </div>
    );
};

export default Tasks;
