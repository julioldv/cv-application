import { useState } from 'react';
import CVForm from './components/CVForm';
import CVPreview from './components/CVPreview';
import './App.css';

function App() {
  const [generalInformation, setGeneralInformation] = useState({
    fullName: '',
    email: '',
    phone: '',
  });

  const [education, setEducation] = useState({
    schoolName: '',
    degree: '',
    educationStartDate: '',
    educationEndDate: '',
  });

  const [experience, setExperience] = useState({
    companyName: '',
    position: '',
    responsibilities: '',
    experienceStartDate: '',
    experienceEndDate: '',
  });

  function handleInformationChange(event) {
    const { name, value } = event.target;

    setGeneralInformation((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  function handleEducationChange(event) {
    const { name, value } = event.target;
    setEducation((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  function handleExperienceChange(event) {
    const { name, value } = event.target;

    setExperience((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  return (
    <div>
      <h1>CV Application</h1>
      <CVForm
        generalInformation={generalInformation}
        onInformationChange={handleInformationChange}
        education={education}
        onEducationChange={handleEducationChange}
        experience={experience}
        onExperienceChange={handleExperienceChange}
      />
      <CVPreview
        generalInformation={generalInformation}
        education={education}
        experience={experience}
      />
    </div>
  );
}

export default App;
