import React, { useContext, useState } from 'react';
import { CVInfoContext } from '../contexts/CVInfoContext';

//editQualification = (qualification, institution, location, finished, id)

const EducationInfo = ({ certificate }) => {
    const { removeQualification, editQualification } = useContext(CVInfoContext);
    const [qualification, setQualification] = useState(certificate.qualification);
    const [institution, setInstitution] = useState(certificate.institution);
    const [location, setLocation] = useState(certificate.location);
    const [finished, setFinished] = useState(certificate.finished);
    const [formVisible, setFormVisible] = useState(false);
    const handleDelete = (e) => {
        e.preventDefault();
        removeQualification(certificate.id);
    }
    const handleStartEdit = (e) => {
        e.preventDefault();
        setFormVisible(!formVisible);
    }
    const handleSaveEdit = (e) => {
        e.preventDefault();
        editQualification(qualification, institution, location, finished, certificate.id);
        setFormVisible(!formVisible);
    }
    return (
        <div className="education-container">
            {/* info renders when form not visible, and vice versa - conditional rendering */}
            {formVisible ? null : 
            <div className="education-info">
                <h4>{certificate.qualification}</h4>
                <p>{certificate.institution}</p>
                <p>{certificate.location}</p>
                <p>Completed {certificate.finished}</p>
                <button onClick={handleDelete}>Delete</button>
                <button onClick={handleStartEdit}>Edit</button>
            </div>
            }
            {formVisible ?
            <div className="edit-form">
                <form>
                    <input
                            type="text"
                            value={qualification}
                            placeholder={certificate.qualification}
                            onChange={(e) => setQualification(e.target.value)}
                        />
                        <br />
                        <input
                            type="text"
                            value={institution}
                            placeholder={certificate.institution}
                            onChange={(e) => setInstitution(e.target.value)}
                        />
                        <br />
                        <input
                            type="text"
                            value={location}
                            placeholder={certificate.location}
                            onChange={(e) => setLocation(e.target.value)}
                        />
                        <br />
                        <input
                            type="text"
                            value={finished}
                            placeholder={certificate.finished}
                            onChange={(e) => setFinished(e.target.value)}
                        />
                        <br />
                        <button onClick={handleSaveEdit}>Save edits</button>
                    </form>
                </div>
                : null }
        </div>
     );
}
 
export default EducationInfo;