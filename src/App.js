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
          <Header />
          <GeneralInfoForm />
          <ExperienceForm />
          <EducationForm />
          <GeneralInfoList />
          <ExperienceList />
          <EducationList />
        </CVInfoContextProvider>
      </div>
    );
}

export default App;


