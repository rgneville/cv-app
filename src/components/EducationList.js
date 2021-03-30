import React, { useContext } from 'react';
import { CVInfoContext } from '../contexts/CVInfoContext';
import EducationInfo from './EducationInfo';

const EducationList = () => {
    console.log(CVInfoContext);
    const { qualifications } = useContext(CVInfoContext);
    return ( 
        <div id="education-list">
            {qualifications.map(certificate => {
            return (<EducationInfo certificate={certificate} key={certificate.id} />)
            })}
        </div>
     );
}
 
export default EducationList;