function ExperienceForm() {
  return (
    <section>
      <h2>Experience</h2>

      <div>
        <label htmlFor="company-name">Company name:</label>
        <input type="text" id="company-name" name="companyName" />
      </div>

      <div>
        <label htmlFor="position">Position:</label>
        <input type="text" id="position" name="position" />
      </div>

      <div>
        <label htmlFor="responsibilities">Main responsibilities:</label>
        <textarea
          id="responsibilities"
          name="responsibilities"
          rows={4}
        ></textarea>
      </div>

      <div>
        <label htmlFor="experience-start-date">Start date:</label>
        <input
          type="date"
          id="experience-start-date"
          name="experienceStartDate"
        />
      </div>

      <div>
        <label htmlFor="experience-end-date">End date:</label>
        <input type="date" id="experience-end-date" name="experienceEndDate" />
      </div>
    </section>
  );
}

export default ExperienceForm;
