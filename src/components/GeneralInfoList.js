import React, { useContext } from 'react';
import { CVInfoContext } from '../contexts/CVInfoContext';

const GeneralInfoList = () => {
    const { contactInfo } = useContext(CVInfoContext);
    return ( 
        <div id="general-info-list">
            <div id="namebox">
                <h2>{contactInfo.firstName} {contactInfo.lastName}</h2>
                <h4>{contactInfo.jobTitle}</h4>
            </div>
            <div id="contact">
            <h5>Contact information:</h5>
                <p>{contactInfo.phone}</p>
                <p>{contactInfo.email}</p>
            </div>
        </div>
     );
}
 
export default GeneralInfoList;