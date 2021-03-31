import React from "react"
import Header from "./components/Header"
import GeneralInfoForm from "./components/GeneralInfoForm"
import ExperienceForm from "./components/ExperienceForm"
import CVInfoContextProvider from "./contexts/CVInfoContext"
import EducationForm from "./components/EducationForm"
import ExperienceList from "./components/ExperienceList"
import EducationList from "./components/EducationList"
import GeneralInfoList from "./components/GeneralInfoList"

function App() {
    return (
      <div className="app">
        <CVInfoContextProvider>
          <div id="form-container">
            <Header />
            <GeneralInfoForm />
            <ExperienceForm />
            <EducationForm />
          </div>
          <div id="A4-CV">
            <GeneralInfoList />
            <ExperienceList />
            <EducationList />
          </div>
        </CVInfoContextProvider>
      </div>
    );
}

export default App;


