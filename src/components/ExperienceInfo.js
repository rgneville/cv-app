import React, { useContext } from 'react';
import { CVInfoContext } from '../contexts/CVInfoContext';

//position, company, city, jobStart, jobEnd

const ExperienceInfo = ({ job }) => {
    const { removeJob } = useContext(CVInfoContext);
    const handleClick = (e) => {
        e.preventDefault();
        removeJob(job.id);
    }
    return ( 
        <div className="experience-info">
            <p>{job.position}</p>
            <p>{job.company}</p>
            <p>{job.city}</p>
            <p>{job.jobStart}</p>
            <p>{job.jobEnd}</p>
            <button onClick={handleClick}>Delete</button>
            <hr />
        </div>
     );
}
 
export default ExperienceInfo;