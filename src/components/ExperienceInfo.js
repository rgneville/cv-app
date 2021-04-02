import React, { useContext, useState } from 'react';
import { CVInfoContext } from '../contexts/CVInfoContext';

//editJob = (position, company, city, jobStart, jobEnd, id)

const ExperienceInfo = ({ job }) => {
    const { removeJob, editJob } = useContext(CVInfoContext);
    const [position, setPosition] = useState(job.position);
    const [company, setCompany] = useState(job.company);
    const [city, setCity] = useState(job.city);
    const [jobStart, setJobStart] = useState(job.jobStart);
    const [jobEnd, setJobEnd] = useState(job.jobEnd);
    const [formVisible, setFormVisible] = useState(false);
    const handleDelete = (e) => {
        e.preventDefault();
        removeJob(job.id);
    }
    const handleStartEdit = (e) => {
        e.preventDefault();
        setFormVisible(!formVisible);
    }
    const handleSaveEdit = (e) => {
        e.preventDefault();
        editJob(position, company, city, jobStart, jobEnd, job.id);
        setFormVisible(!formVisible);
    }
    return (
        <div className="experience-container">
            {/* info renders when form not visible, and vice versa - conditional rendering */}
            {formVisible ? null : 
            <div className="experience-info">
                <h4>{job.position}</h4>
                <p>{job.company}</p>
                <p>{job.city}</p>
                <p>{job.jobStart} to {job.jobEnd}</p>
                <button onClick={handleDelete}>Delete</button>
                <button onClick={handleStartEdit}>Edit</button>
            </div>
            }
            {formVisible ?
            <div className="edit-form">
            <form>
                <input
                        type="text"
                        value={position}
                        placeholder={job.position}
                        onChange={(e) => setPosition(e.target.value)}
                    />
                    <br />
                    <input
                        type="text"
                        value={company}
                        placeholder={job.company}
                        onChange={(e) => setCompany(e.target.value)}
                    />
                    <br />
                    <input
                        type="text"
                        value={city}
                        placeholder={job.city}
                        onChange={(e) => setCity(e.target.value)}
                    />
                    <br />
                    <input
                        type="text"
                        value={jobStart}
                        placeholder={job.jobStart}
                        onChange={(e) => setJobStart(e.target.value)}
                    />
                    <br />
                    <input
                        type="text"
                        value={jobEnd}
                        placeholder={job.jobEnd}
                        onChange={(e) => setJobEnd(e.target.value)}
                    />
                    <br />
                    <button onClick={handleSaveEdit}>Save edits</button>
                </form>
            </div>
            : null }
        </div>
     );
}
 
export default ExperienceInfo;