import GeneralInformationForm from './GeneralInformationForm';
import EducationForm from './EducationForm';
import ExperienceForm from './ExperienceForm';

function CVForm({ generalInformation, setGeneralInformation }) {
  return (
    <form>
      <GeneralInformationForm
        generalInformation={generalInformation}
        setGeneralInformation={setGeneralInformation}
      />
      <EducationForm />
      <ExperienceForm />
      <button type="submit">Submit</button>
    </form>
  );
}

export default CVForm;
