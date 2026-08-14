import GeneralInformationForm from './GeneralInformationForm';
import EducationForm from './EducationForm';
import ExperienceForm from './ExperienceForm';

function CVForm({
  generalInformation,
  onInformationChange,
  education,
  onEducationChange,
  experience,
  onExperienceChange,
  onFormSubmit,
}) {
  return (
    <form onSubmit={onFormSubmit}>
      <GeneralInformationForm
        generalInformation={generalInformation}
        onInformationChange={onInformationChange}
      />
      <EducationForm
        education={education}
        onEducationChange={onEducationChange}
      />
      <ExperienceForm
        experience={experience}
        onExperienceChange={onExperienceChange}
      />
      <button type="submit">Submit</button>
    </form>
  );
}

export default CVForm;
