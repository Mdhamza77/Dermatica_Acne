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
            setConsult({
                patientName : "" ,
                age : "" ,
                disease : "" ,
                reason : "" ,
                appointmentDate : "" ,
                appointmentTime : "" 
            })
            console.log(results)
        } catch (error) {
            console.log(error)
        }

    }
    return (
        <div className='form-f1'>
            <form onSubmit={handleSubmit} className='appoint-form'>
                <div>
                    <div className='col25'>
                        <label htmlFor=''>Patient-Name</label>
                    </div>
                    <div className='col75'>
                        <input type='text' id='' name='patientName' value={consult.patientName} onChange={handleChange} />
                    </div>
                </div>
                <div>
                    <div className='col25'>
                        <label htmlFor=''>Age</label>
                        <div className='col75'>
                            <input type='number' id='' name='age' value={consult.age} onChange={handleChange} />
                        </div>
                    </div>
                    <div className='col25'>
                        <label htmlFor=''>Disease</label>
                    </div>
                    <div className='col75'>
                        <input type='text' id='' name='disease' value={consult.disease} onChange={handleChange} />
                    </div>
                </div>
                <div>
                    <div className='col25'>

                        <label htmlFor=''>Reason</label>
                    </div>
                    <div className='col75'>
                        <textarea id='' name='reason' value={consult.reason} onChange={handleChange} />
                    </div>
                </div>
                <div>
                    <div className='col25'>
                        <label htmlFor=''>Appointment-Date</label>
                    </div>
                    <div className='col75'>
                        <input type='date' id='' name='appointmentDate' value={consult.appointmentDate} onChange={handleChange} />
                    </div>
                </div>
                <div>
                    <div className='col25'>
                        <label htmlFor=''>Appointment-Time</label> </div>
                    <div className='col75'>
                        <input type='time' id='' name='appointmentTime' value={consult.appointmentTime} onChange={handleChange} />
                    </div>
                </div>
                <div>
                    <button className='buttons' type='submit' >Save</button>
                </div>
            </form>
        </div>
    );
}

export default Appointment;
