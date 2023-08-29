import React, { useState } from 'react';
import AddEmployeeForm from './components/EmployeeForm/AddEmployeeForm/AddEmployeeForm';
import EmployeeList from './components/EmployeeList/EmployeeList';
import './App.css';

function App() {
    const [employees, setEmployees] = useState([]);
    const [editingIndex, setEditingIndex] = useState(-1);

    const addEmployeeHandler = (newEmployee) => {
        setEmployees((prevEmployees) => [...prevEmployees, newEmployee]);
        setEditingIndex(-1);
    };
    const editEmployeeHandler = (index) => {
        setEditingIndex(index);
    };
    const saveEmployeeChangesHandler = (editedEmployee) => {
        const updatedEmployees = [...employees];
        updatedEmployees[editingIndex] = editedEmployee;
        setEmployees(updatedEmployees);
        setEditingIndex(-1);
    };
    return (
        <div className="App">
            <AddEmployeeForm
                onAddEmployee={addEmployeeHandler}
                onSaveChanges={saveEmployeeChangesHandler}
                employeeToEdit={editingIndex !== -1 ? employees[editingIndex] : null}
            />
            <EmployeeList employees={employees} onEditEmployee={editEmployeeHandler} />
        </div>
    );
}
export default App;
