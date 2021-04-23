import React from "react"
import Header from "./components/Header"
import GeneralInfoForm from "./components/GeneralInfoForm"
import ExperienceForm from "./components/ExperienceForm"
import CVInfoContextProvider from "./contexts/CVInfoContext"
import EducationForm from "./components/EducationForm"
import ExperienceList from "./components/ExperienceList"
import EducationList from "./components/EducationList"
import GeneralInfoList from "./components/GeneralInfoList"
import SkillForm from "./components/SkillForm"
import SkillList from "./components/SkillList"
import PrintButton from "./components/PrintButton"

function App() {
    return (
      <div className="app">
        <CVInfoContextProvider>
          <div id="form-container">
            <Header />
            <GeneralInfoForm />
            <ExperienceForm />
            <EducationForm />
            <SkillForm />
          </div>
          <div id="CV">
            <GeneralInfoList />
            <ExperienceList />
            <EducationList />
            <SkillList />
          </div>
          <PrintButton />
        </CVInfoContextProvider>
      </div>
    );
}

export default App;


