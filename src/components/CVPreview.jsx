function CVPreview({ generalInformation }) {
  return (
    <section>
      <h2>CV Preview</h2>

      <article>
        <header>
          <h3>{generalInformation.name}</h3>
          <p>{generalInformation.email}</p>
          <p>{generalInformation.phone}</p>
        </header>

        <section>
          <h3>Education</h3>
          <p>Example University</p>
          <p>Example Degree</p>
          <p>Example Start Date – Example End Date</p>
        </section>

        <section>
          <h3>Experience</h3>
          <p>Example Company</p>
          <p>Example Position</p>
          <p>Example Start Date – Example End Date</p>
          <p>Example responsibilities</p>
        </section>
      </article>

      <button type="button">Edit</button>
    </section>
  );
}

export default CVPreview;
