import React, { useState, useEffect } from "react";
import Datetime from "react-datetime";
import './AddEmployeeForm.css'
import Card from "../../UI/Card";

const AddEmployeeForm = (props) => {
    const [inputUser, setInputUser] = useState('');
    const [selectedCompany, setSelectedCompany] = useState('facebook');
    const [selectedLocation, setSelectedLocation] = useState('ninhthuan');
    const [inputUrl, setInputUrl] = useState('');
    const [selectedTime, setSelectedTime] = useState(new Date());
    const [textareaValue, setTextareaValue] = useState('');

    useEffect(() => {
        if (props.employeeToEdit) {
            const { username, company, location, url, time, textarea } = props.employeeToEdit;
            setInputUser(username || '');
            setSelectedCompany(company || 'facebook');
            setSelectedLocation(location || 'ninhthuan');
            setInputUrl(url || '');
            setSelectedTime(new Date(time));
            setTextareaValue(textarea || '');
        }
    }, [props.employeeToEdit]);

    const resetForm = () => {
        setInputUser('');
        setSelectedCompany('facebook');
        setSelectedLocation('ninhthuan');
        setInputUrl('');
        setSelectedTime(new Date());
        setTextareaValue('');
    }

    const handleSaveChange = (e) => {
        e.preventDefault();
        const editedEmployee = {
            username: inputUser,
            company: selectedCompany,
            location: selectedLocation,
            url: inputUrl,
            time: selectedTime,
            textarea: textareaValue,
        };
        if (props.employeeToEdit) {
            props.onSaveChanges(editedEmployee);
        } else {
            props.onAddEmployee(editedEmployee);
        }
        resetForm();
    }

    const timeChangHandler = (newTime) => {
        setSelectedTime(newTime);
    }

    return (
        <Card>
            <div className="form-wrapper">
                <form action="" className="form-employee" onSubmit={handleSaveChange}>
                    <div className="input-user">
                        <label htmlFor="user">Enter Your Name</label>
                        <input type="text" name="user" id="user" value={inputUser} onChange={(e) => setInputUser(e.target.value)} />
                    </div>
                    <div className="select-wrapper">
                        <div className="select-item">
                            <label htmlFor="company">Choose Your Company</label>
                            <select name="company" id="company" className="" value={selectedCompany} onChange={(e) => setSelectedCompany(e.target.value)}>
                                <option value="facebook">facebook</option>
                                <option value="google">google</option>
                                <option value="github">github</option>
                                <option value="netflix">netflix</option>
                            </select>
                        </div>
                        <div className="select-time">
                            <label htmlFor="location">Choose Your Location</label>
                            <select name="location" id="location" value={selectedLocation} onChange={(e) => setSelectedLocation(e.target.value)}>
                                <option value="ninhthuan">Ninh Thuận</option>
                                <option value="khanhhoa">Khánh Hòa</option>
                                <option value="hcm">TP Hồ Chí Minh</option>
                                <option value="binhthuan">Bình Thuận</option>
                            </select>
                        </div>
                    </div>
                    <div className="input-info">
                        <div className="url">
                            <label htmlFor="url">Url</label>
                            <input type="text" id="url" value={inputUrl} onChange={(e) => setInputUrl(e.target.value)} />
                        </div>
                        <div className="time">
                            <label htmlFor="time">Time</label>
                            <Datetime
                                value={selectedTime}
                                onChange={timeChangHandler}
                            >
                            </Datetime>
                        </div>
                        <textarea name="" id="" cols="30" rows="5" value={textareaValue} onChange={(e) => setTextareaValue(e.target.value)}></textarea>
                    </div>
                    <button type="submit">
                        {props.employeeToEdit ? 'Save Change' : 'Add Employee'}
                    </button>
                </form>
            </div>
        </Card>
    )
}

export default AddEmployeeForm;
