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
        jobEnd: "01/04/2021",
        id: 1 }
    ])

    const [ qualifications, setQualifications ] = useState([
        { qualification: "BA Economics", 
        institution: "University of Sussex", 
        location: "Brighton", 
        finished: "17/07/2013",
        id: 1 }
    ])

    const addContact = ( firstName, lastName, phone, email, linkedIn ) => {
        setContactInfo({ firstName, lastName, phone, email, linkedIn, id: uuid()})
    }

    const addJob =  ( position, company, city, jobStart, jobEnd ) => {
        setExperience([...experience, {position, company, city, jobStart, jobEnd, id: uuid()}])
    }

    const addQualification = ( qualification, institution, location, finished ) => {
        setQualifications([...qualifications, {qualification, institution, location, finished, id: uuid()}])
    }

    const removeJob = (id) => {
        setExperience(experience.filter(job => job.id !== id))
    }

    const removeQualification = (id) => {
        setQualifications(qualifications.filter(certificate => certificate.id !== id))
    }

    return ( 
        <CVInfoContext.Provider value={{ contactInfo, experience, qualifications, addContact, addJob, removeJob, addQualification, removeQualification }}>
            {props.children}
        </CVInfoContext.Provider>
     );
}
 
export default CVInfoContextProvider;