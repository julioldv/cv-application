function CVPreview({ generalInformation, education, experience }) {
  return (
    <section>
      <h2>CV Preview</h2>

      <article>
        <header>
          <h3>{generalInformation.fullName}</h3>
          <p>{generalInformation.email}</p>
          <p>{generalInformation.phone}</p>
        </header>

        <section>
          <h3>Education</h3>
          <p>{education.schoolName}</p>
          <p>{education.degree}</p>
          <p>
            {education.educationStartDate} – {education.educationEndDate}
          </p>
        </section>

        <section>
          <h3>Experience</h3>
          <p>{experience.companyName}</p>
          <p>{experience.position}</p>
          <p>
            {experience.experienceStartDate} – {experience.experienceEndDate}
          </p>
          <p>{experience.responsibilities}</p>
        </section>
      </article>

      <button type="button">Edit</button>
    </section>
  );
}

export default CVPreview;
