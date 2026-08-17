function EducationForm({ education, onEducationChange }) {
  return (
    <section className="form-section">
      <h2>Educational Information</h2>

      <div className="form-field">
        <label htmlFor="school-name">School name:</label>
        <input
          type="text"
          id="school-name"
          name="schoolName"
          value={education.schoolName}
          onChange={onEducationChange}
        />
      </div>

      <div className="form-field">
        <label htmlFor="degree">Degree:</label>
        <input
          type="text"
          id="degree"
          name="degree"
          value={education.degree}
          onChange={onEducationChange}
        />
      </div>

      <div className="form-field">
        <label htmlFor="education-start-date">Start date:</label>
        <input
          type="date"
          id="education-start-date"
          name="educationStartDate"
          value={education.educationStartDate}
          onChange={onEducationChange}
        />
      </div>

      <div className="form-field">
        <label htmlFor="education-end-date">End date:</label>
        <input
          type="date"
          id="education-end-date"
          name="educationEndDate"
          value={education.educationEndDate}
          onChange={onEducationChange}
        />
      </div>
    </section>
  );
}

export default EducationForm;
