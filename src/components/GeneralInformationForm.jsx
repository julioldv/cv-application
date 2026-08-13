function GeneralInformationForm({ generalInformation, setGeneralInformation }) {
  return (
    <section>
      <h2>General Information</h2>

      <div>
        <label htmlFor="full-name">Name:</label>
        <input
          type="text"
          id="full-name"
          name="fullName"
          value={generalInformation.name}
          onChange={(e) => {
            setGeneralInformation((prev) => ({
              ...prev,
              name: e.target.value,
            }));
          }}
        />
      </div>

      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={generalInformation.email}
          onChange={(e) => {
            setGeneralInformation((prev) => ({
              ...prev,
              email: e.target.value,
            }));
          }}
        />
      </div>

      <div>
        <label htmlFor="phone">Phone:</label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={generalInformation.phone}
          onChange={(e) => {
            setGeneralInformation((prev) => ({
              ...prev,
              phone: e.target.value,
            }));
          }}
        />
      </div>
    </section>
  );
}

export default GeneralInformationForm;
