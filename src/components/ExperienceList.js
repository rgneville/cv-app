import React, { useContext } from 'react';
import { CVInfoContext } from '../contexts/CVInfoContext';
import ExperienceInfo from './ExperienceInfo';

const ExperienceList = () => {
    const { experience } = useContext(CVInfoContext);
    return ( 
        <div id="experience-list">
            {experience.map(job => {
            return (<ExperienceInfo job={job} key={job.id} />)
            })}
        </div>
     );
}
 
export default ExperienceList;