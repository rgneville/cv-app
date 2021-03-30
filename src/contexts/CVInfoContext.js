import React, { createContext, useState } from 'react';
import { v4 as uuid } from 'uuid';

export const CVInfoContext = createContext();

const CVInfoContextProvider = (props) => {
    const [ contactInfo, setContactInfo ] = useState([]);

    const [ experience, setExperience ] = useState([
        { position: "Development Underwriter", 
        company: "SSR", 
        city: "Bristol", 
        jobStart: "23/09/2013", 
        jobEnd: "n/a",
        id: 1 }
    ])

    const [ qualifications, setQualifications ] = useState([
        { qualification: "BA Economics", 
        institution: "University of Sussex", 
        location: "Brighton", 
        finished: "17/07/2013",
        id: 1 }
    ])

    const addContact = ( firstName, lastName, phone, email ) => {
        setContactInfo({ firstName, lastName, phone, email, id: uuid()})
    }

    const addJob =  ( position, company, city, jobStart, jobEnd ) => {
        setExperience([...experience, {position, company, city, jobStart, jobEnd, id: uuid()}])
    }

    const addQualification = ( qualification, institution, location, finished ) => {
        setQualifications([...qualifications, {qualification, institution, location, finished, id: uuid()}])
    }

    return ( 
        <CVInfoContext.Provider value={{ contactInfo, experience, qualifications, addContact, addJob, addQualification }}>
            {props.children}
        </CVInfoContext.Provider>
     );
}
 
export default CVInfoContextProvider;