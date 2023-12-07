import {useState} from "react";
import './App.css'

const Experience = () => {
    const [expData, setExpData] = useState({
        title:'',
        desc:'',
    })
    const handleExpChange = (e) => {
        const {name, value} = e.target;
        setExpData({
            ...expData,
            [name]:value,
        })
    }
    const handleReset = () => {
        setExpData({
            title:'',
            desc:''
        })
    }
    return (
        <div className="expDetails">
            <div className="expDetailsForm">
                <h1>Experience Details</h1>
                <form onSubmit={e => e.preventDefault()}>
                    <input 
                        type="text"
                        placeholder="Title"
                        name="title"
                        value={expData.title}
                        onChange={handleExpChange}
                    />
                    <br />
                    <textarea
                        placeholder="Description"
                        name="desc"
                        value={expData.desc}
                        onChange={handleExpChange}
                        rows={10}
                        cols={60}
                    />
                    <br />
                    <button type="reset" onClick={handleReset}>Reset</button>
                </form>
            </div>
            <div className="resumeDetails">
                    <h2>{expData.title}</h2>
                    <p>{expData.desc}</p>
                </div>
        </div>
    );
}
export default Experience;