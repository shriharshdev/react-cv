import { useState } from "react";
import './App.css'

const BasicDetails = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        pno: '',
        dob: ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleReset = () => {
        setFormData({
            name: '',
            email: '',
            pno: '',
            dob: ''
        });
    };
    return ( 
        <div className="basicDetails">
            <div className="personDetailForm">
                <h1>Personal Details</h1>
                <form onSubmit={e => e.preventDefault()}>
                    <input
                        type="text"
                        placeholder="Name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                    />
                    <br />
                    <input
                        type="email"
                        placeholder="Email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                    />
                    <br />
                    <input 
                        type="tel"
                        placeholder="Number"
                        name="pno"
                        value={formData.pno}
                        onChange={handleInputChange}
                    />
                    <br />
                    <input 
                        type="date"
                        placeholder="Date of Birth"
                        name="dob"
                        value={formData.dob}
                        onChange={handleInputChange}
                    />
                </form>
                <button type="reset" onClick={handleReset}>Reset</button>
            </div>
            <div className="resumeDetails">
                <h2>{formData.name}</h2>
                <h3>{formData.email}</h3>
                <h3>{formData.pno}</h3>
                <h3>{formData.dob}</h3>
            </div>
        </div>
    );
}

 
export default BasicDetails;