import React, { useState, useContext } from "react"
import { CVInfoContext } from "../contexts/CVInfoContext";

function GeneralInfoForm() {
    const { addContact } = useContext(CVInfoContext);
    //firstName, lastName, phone, email
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        addContact(firstName, lastName, phone, email);
    }
    return(
        <div>
            <form id="general-info-form" onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={firstName}
                    placeholder="First name"
                    onChange={(e) => setFirstName(e.target.value)}
                />
                <br />
                <input
                    type="text"
                    value={lastName}
                    placeholder="Last name"
                    onChange={(e) => setLastName(e.target.value)}
                />
                <br />
                <input
                    type="text"
                    value={phone}
                    placeholder="Phone number"
                    onChange={(e) => setPhone(e.target.value)}
                />
                <br />
                <input
                    type="text"
                    value={email}
                    placeholder="Email address"
                    onChange={(e) => setEmail(e.target.value)}
                />
                <br />
                <button>Save</button>
            </form>
        </div>
    )
}

export default GeneralInfoForm