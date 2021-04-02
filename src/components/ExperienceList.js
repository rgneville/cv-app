import React, { useContext } from 'react';
import { CVInfoContext } from '../contexts/CVInfoContext';
import ExperienceInfo from './ExperienceInfo';

const ExperienceList = () => {
    const { experience } = useContext(CVInfoContext);
    return ( 
        <div id="experience-list">
            <h3>Employment History</h3>
            {experience.map(job => {
            return (<ExperienceInfo job={job} key={job.id} />)
            })}
        <hr />
        </div>
     );
}
 
export default ExperienceList;