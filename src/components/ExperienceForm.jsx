function ExperienceForm({ experience, onExperienceChange }) {
  return (
    <section className="form-section">
      <h2>Experience</h2>

      <div className="form-field">
        <label htmlFor="company-name">Company name:</label>
        <input
          type="text"
          id="company-name"
          name="companyName"
          value={experience.companyName}
          onChange={onExperienceChange}
        />
      </div>

      <div className="form-field">
        <label htmlFor="position">Position:</label>
        <input
          type="text"
          id="position"
          name="position"
          value={experience.position}
          onChange={onExperienceChange}
        />
      </div>

      <div className="form-field">
        <label htmlFor="responsibilities">Main responsibilities:</label>
        <textarea
          id="responsibilities"
          name="responsibilities"
          rows={4}
          value={experience.responsibilities}
          onChange={onExperienceChange}
        ></textarea>
      </div>

      <div className="form-field">
        <label htmlFor="experience-start-date">Start date:</label>
        <input
          type="date"
          id="experience-start-date"
          name="experienceStartDate"
          value={experience.experienceStartDate}
          onChange={onExperienceChange}
        />
      </div>

      <div className="form-field">
        <label htmlFor="experience-end-date">End date:</label>
        <input
          type="date"
          id="experience-end-date"
          name="experienceEndDate"
          value={experience.experienceEndDate}
          onChange={onExperienceChange}
        />
      </div>
    </section>
  );
}

export default ExperienceForm;
