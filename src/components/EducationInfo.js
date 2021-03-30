import React from 'react';

//qualification, institution, location, finished

const EducationInfo = ({ certificate }) => {
    return ( 
        <div className="experience-info">
            <p>{certificate.qualification}</p>
            <p>{certificate.institution}</p>
            <p>{certificate.location}</p>
            <p>{certificate.finished}</p>
        </div>
     );
}
 
export default EducationInfo;