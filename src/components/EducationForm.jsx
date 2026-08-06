function EducationForm() {
  return (
    <section>
      <h2>Educational Information</h2>

      <div>
        <label htmlFor="school-name">School name:</label>
        <input type="text" id="school-name" name="schoolName" />
      </div>

      <div>
        <label htmlFor="degree">Degree:</label>
        <input type="text" id="degree" name="degree" />
      </div>

      <div>
        <label htmlFor="education-start-date">Start date:</label>
        <input
          type="date"
          id="education-start-date"
          name="educationStartDate"
        />
      </div>

      <div>
        <label htmlFor="education-end-date">End date:</label>
        <input type="date" id="education-end-date" name="educationEndDate" />
      </div>
    </section>
  );
}

export default EducationForm;
