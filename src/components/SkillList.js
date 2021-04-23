import React, { useContext } from 'react';
import { CVInfoContext } from '../contexts/CVInfoContext';

const SkillList = () => {
    const { skills, clearSkills } = useContext(CVInfoContext);
    const handleDelete = (e) => {
        e.preventDefault();
        clearSkills();
    }
    return ( 
        <div id="skill-list">
            <h3 id="skills-title">Skills</h3>
            <ul>
                {skills.map(ability => {
                return (<li key={ability.id} id="skill-info">{ability.skill}</li>)
                })}
            </ul>
            <button onClick={handleDelete} className="bottomSpace">Clear skills</button>
        </div>
     );
}
 
export default SkillList;