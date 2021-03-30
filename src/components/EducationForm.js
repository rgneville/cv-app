import React, { useState, useContext } from "react"
import { CVInfoContext } from "../contexts/CVInfoContext";

function EducationForm() {
    const { addQualification } = useContext(CVInfoContext);
    //qualification, institution, location, finished
    const [qualification, setQualification] = useState('');
    const [institution, setInstitution] = useState('');
    const [location, setLocation] = useState('');
    const [finished, setFinished] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        addQualification(qualification, institution, location, finished);
        setQualification('');
        setInstitution('');
        setLocation('');
        setFinished('');
    }
    return(
        <div>
            <form id="education-form" onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={qualification}
                    placeholder="Qualification name"
                    onChange={(e) => setQualification(e.target.value)}
                />
                <br />
                <input
                    type="text"
                    value={institution}
                    placeholder="Insitution of qualification"
                    onChange={(e) => setInstitution(e.target.value)}
                />
                <br />
                <input
                    type="text"
                    value={location}
                    placeholder="Location"
                    onChange={(e) => setLocation(e.target.value)}
                />
                <br />
                <input
                    type="text"
                    value={finished}
                    placeholder="Finish date"
                    onChange={(e) => setFinished(e.target.value)}
                />
                <br />
                <button>Save</button>
            </form>
        </div>
    )
}

export default EducationForm