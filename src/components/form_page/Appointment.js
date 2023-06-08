import React, { useState } from 'react';
import './style.css'
const Appointment = () => {
    const [consult, setConsult] = useState({
        patientName: "",
        age: "",
        disease: "",
        reason: "",
        appointmentDate: "",
        appointmentTime: ""

    })
    const handleChange = (e) => {
        let { name, value } = e.target;
        setConsult({ ...consult, [name]: value })
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const results = await consult;
            console.log(results)
        } catch (error) {
            console.log(error)
        }

    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor=''>Patient-Name</label>
                    <input type='text' id='' name='patientName' value={consult.patientName} onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor=''>Age</label>
                    <input type='number' id='' name='age' value={consult.age} onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor=''>Disease</label>
                    <input type='text' id='' name='disease' value={consult.disease} onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor=''>Reason</label>
                    <textarea id='' name='reason' value={consult.reason} onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor=''>Appointment-Date</label>
                    <input type='date' id='' name='appointmentDate' value={consult.appointmentDate} onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor=''>Appointment-Time</label>
                    <input type='time' id='' name='appointmentTime' value={consult.appointmentTime} onChange={handleChange} />
                </div>
                <div>
                    <button type='submit' >Save</button>
                </div>
            </form>
        </div>
    );
}

export default Appointment;
