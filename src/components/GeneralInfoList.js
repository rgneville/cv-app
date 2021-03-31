import React, { useContext } from 'react';
import { CVInfoContext } from '../contexts/CVInfoContext';

const GeneralInfoList = () => {
    const { contactInfo } = useContext(CVInfoContext);
    return ( 
        <div id="general-info-list">
            <p>{contactInfo.firstName}</p>
            <p>{contactInfo.lastName}</p>
            <p>{contactInfo.phone}</p>
            <p>{contactInfo.email}</p>
            <a href={contactInfo.LinkedIn}>LinkedIn</a>
            <hr />
        </div>
     );
}
 
export default GeneralInfoList;