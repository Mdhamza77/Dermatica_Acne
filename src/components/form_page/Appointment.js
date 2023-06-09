import React, { useRef, useState } from 'react';
import emailjs from 'emailjs-com'
import './style.css'
const Appointment = () => {
    const form = useRef()
    const [consult, setConsult] = useState({
        patientName: "",
        age: "",
        disease: "",
        reason: "",
        appointmentDate: "",
        appointmentTime: "",
        email: ""

    })
    const handleChange = (e) => {
        let { name, value } = e.target;
        setConsult({ ...consult, [name]: value })
    }

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_bzo552l', 'template_5vavcj7', form.current, 'Sn1qIin4_PHwVP_5o')
            .then((result) => {
                console.log(result);
                console.log(result.status)
                setConsult({
                    patientName: "",
                    age: "",
                    disease: "",
                    reason: "",
                    appointmentDate: "",
                    appointmentTime: "",
                    email: ""

                })
            }, (error) => {
                console.log(error.text);
            });
    };
    return (
        <div className='form-f1'>
            <form ref={form} onSubmit={sendEmail} className='appoint-form'>
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
                    <div>
                    <div className='col25'>
                        <label htmlFor=''>Disease</label>
                    </div>
                        <select onChange={handleChange} name='disease'>

                            <optgroup >
                                <option defaultValue=''>select From</option>
                                <option>Acne</option>
                                <option>PSoriasis</option>
                                <option>Pemphigus</option>
                                <option>Alopecia Areata</option>
                                <option>Atopic Dermatitis</option>
                                <option>Raynaud’s Phenomenon</option>
                            </optgroup>
                        </select>
                    </div>
                </div>
                <div>
                    <div className='col25'>
                        <label htmlFor=''>Email</label>
                        <div className='col75'>
                            <input type='email' id='' name='email' value={consult.email} onChange={handleChange} />
                        </div>
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
