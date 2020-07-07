import React, { useState } from "react";
import { Field, reduxForm } from "redux-form";
import "./style.css";
import { Input, NameInput } from "../validations/input";
import {
    maxLengthCreater,
    requairedFild,
    minLengthCreater,
} from "../validations/validate";

//fields validations
const maxLength = maxLengthCreater(40);

// if an error occurs to disable the time field field, the program will 
// still not work and will inform the user that the minimum 
// length of the name field is at least 4 symbols
const minLength = minLengthCreater(4);

const TaskForm = (props) => {
    let [isInput, changeInput] = useState(props.user);
    const isChange = (e) => {
        changeInput((isInput = e.target.value));
    };
    return (
        <div>
            <form onSubmit={props.handleSubmit}>
                <Field
                    component={Input}
                    validate={[requairedFild, maxLength]}
                    name="addTask"
                    placeholder="Task"
                    className="input-title"
                />

                <div className="inputs">
                    <Field
                        onChange={isChange}
                        component={NameInput}
                        name="userName"
                        validate={[requairedFild, minLength]}
                        className="input-name"
                        placeholder="name"
                    />
{/* if the name field is less than 4 characters, the time field will be disabled */}
                    {isInput.length < 4 ? 
                        <Field
                            component="input"
                            name="time"
                            type="time"
                            className="time-input"
                            required
                            disabled={true}
                        />: 
                        <Field
                            component="input"
                            name="time"
                            type="time"
                            className="time-input"
                            required
                        />
                    }
                </div>

                <button className="btn-small">Add Task</button>
            </form>
        </div>
    );
};

const TaskFormHock = reduxForm({ form: "task" })(TaskForm);

export default TaskFormHock;
