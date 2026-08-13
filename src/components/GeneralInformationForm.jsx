function GeneralInformationForm({ generalInformation, onInformationChange }) {
  return (
    <section>
      <h2>General Information</h2>

      <div>
        <label htmlFor="full-name">Name:</label>
        <input
          type="text"
          id="full-name"
          name="fullName"
          value={generalInformation.fullName}
          onChange={onInformationChange}
        />
      </div>

      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={generalInformation.email}
          onChange={onInformationChange}
        />
      </div>

      <div>
        <label htmlFor="phone">Phone:</label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={generalInformation.phone}
          onChange={onInformationChange}
        />
      </div>
    </section>
  );
}

export default GeneralInformationForm;
