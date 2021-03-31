import React, { useContext } from 'react';
import { CVInfoContext } from '../contexts/CVInfoContext';

//qualification, institution, location, finished

const EducationInfo = ({ certificate }) => {
    const { removeQualification } = useContext(CVInfoContext);
    const handleClick = (e) => {
        e.preventDefault();
        removeQualification(certificate.id);
    }
    return ( 
        <div className="experience-info">
            <p>{certificate.qualification}</p>
            <p>{certificate.institution}</p>
            <p>{certificate.location}</p>
            <p>{certificate.finished}</p>
            <button onClick={handleClick}>Delete</button>
            <hr />
        </div>
     );
}
 
export default EducationInfo;