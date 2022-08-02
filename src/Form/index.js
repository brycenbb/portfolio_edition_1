//Form to be used in the Contact Me section
//test
function Form() {
  return (
    <form id="formSubmit" name="contact" method="POST" data-netlify="true">
      <input type="hidden" name="form-name" value="contact" />
      <p>
        <label htmlFor="name">Full Name:</label>
        <input type="text" name="name" required />
      </p>
      <p>
        <label htmlFor="email">Email:</label>
        <input type="email" name="email" required />
      </p>
      <p>
        <label htmlFor="message">Message:</label>
        <textarea name="message" required></textarea>
      </p>
      <p>
        <button type="submit">Send</button>
      </p>
    </form>
  );
}

export default Form;
