import React, { useContext, useState } from 'react';
import { CVInfoContext } from '../contexts/CVInfoContext';

const SkillForm = () => {
    const { addSkill } = useContext(CVInfoContext);
    const [ skill, setSkill ] = useState('');
    const handleSave = (e) => {
        e.preventDefault();
        addSkill(skill);
        setSkill('');
    }
    return ( 
        <div id="skill-form">
            <form>
            <label>Add a skill:</label>
            <br />
                <input
                    type="text"
                    value={skill}
                    placeholder="Skill name"
                    onChange={(e) => setSkill(e.target.value)}
                />
                <br />
                <button onClick={handleSave}>Add</button>
            </form>
        </div>
     );
}
 
export default SkillForm;