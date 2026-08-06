import GeneralInformationForm from './GeneralInformationForm';
import EducationForm from './EducationForm';
import ExperienceForm from './ExperienceForm';

function CVForm() {
  return (
    <form>
      <GeneralInformationForm />
      <EducationForm />
      <ExperienceForm />
      <button type="submit">Submit</button>
    </form>
  );
}

export default CVForm;
