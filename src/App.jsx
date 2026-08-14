import { useState } from 'react';
import CVForm from './components/CVForm';
import CVPreview from './components/CVPreview';
import './App.css';

function App() {
  const [isEditing, setIsEditing] = useState(true);

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

  function handleGeneralInformationChange(event) {
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

  function handleFormSubmit(event) {
    event.preventDefault();
    setIsEditing(false);
  }

  function handleEditRequest() {
    setIsEditing(true);
  }

  return (
    <div>
      <h1>CV Application</h1>
      {isEditing ? (
        <CVForm
          generalInformation={generalInformation}
          onInformationChange={handleGeneralInformationChange}
          education={education}
          onEducationChange={handleEducationChange}
          experience={experience}
          onExperienceChange={handleExperienceChange}
          onFormSubmit={handleFormSubmit}
        />
      ) : (
        <CVPreview
          generalInformation={generalInformation}
          education={education}
          experience={experience}
          onEditRequest={handleEditRequest}
        />
      )}
    </div>
  );
}

export default App;
