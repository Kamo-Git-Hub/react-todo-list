import React from "react";
import "../Layouts/style.css";

//title input
export const Input = ({ input, meta, ...props }) => {
    return (
        <div>
            <input {...props} {...input} />
            <div className="error">
                {meta.error && meta.touched && meta.error}
            </div>
        </div>
    );
};


export const NameInput = ({ input, meta, ...props }) => {
    return (
        <div>
            <input {...props} {...input} />
            <div className="error">
                {meta.error && meta.touched && meta.error}
            </div>
        </div>
    );
};
