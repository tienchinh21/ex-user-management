import React, { useState } from "react";
import Card from "../UI/Card";
const EmployeeList = (props) => {
    return (
        <Card>
            <div className="employee-list">
                <h2 className="title">Employee Form</h2>
                <ul className="list-item">
                    {props.employees.map((employee, index) => (
                        <li key={index}>
                            <p>Username: {employee.username}</p>
                            <p>Company: {employee.company}</p>
                            <p>Location: {employee.location}</p>
                            <p>URL: {employee.url}</p>
                            <p>Time: {employee.time.toString()}</p>
                            <p>Textarea: {employee.textarea}</p>
                            <button onClick={() => props.onEditEmployee(index)}>Edit</button>
                        </li>
                    ))}
                </ul>
            </div>
        </Card>
    );
};

export default EmployeeList;
