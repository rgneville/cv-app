import React from 'react';

//position, company, city, jobStart, jobEnd

const ExperienceInfo = ({ job }) => {
    return ( 
        <div className="experience-info">
            <p>{job.position}</p>
            <p>{job.company}</p>
            <p>{job.city}</p>
            <p>{job.jobStart}</p>
            <p>{job.jobEnd}</p>
        </div>
     );
}
 
export default ExperienceInfo;