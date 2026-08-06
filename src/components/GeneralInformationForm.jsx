function GeneralInformationForm() {
  return (
    <section>
      <h2>General Information</h2>

      <div>
        <label htmlFor="full-name">Name:</label>
        <input type="text" id="full-name" name="fullName" />
      </div>

      <div>
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" />
      </div>

      <div>
        <label htmlFor="phone">Phone:</label>
        <input type="tel" id="phone" name="phone" />
      </div>
    </section>
  );
}

export default GeneralInformationForm;
