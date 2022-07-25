function Form() {
  return (
    <form
      id="formSubmit"
      name="contact"
      method="POST"
      data-netlify="true"
      // onSubmit={(e) => {
      //     handleSubmit(e);
      // }}
      onSubmit="submit"
    >
      <input type="hidden" name="form-name" value="contact" />
      <p>
        <label>Your Name:</label>
        <input type="text" name="name" />
      </p>
      <p>
        <label>Your Email:</label>
        <input type="email" name="email" />
      </p>
      <p>
        <label>
          Your Role:{' '}
          <select name="role[]" multiple>
            <option value="leader">Leader</option>
            <option value="follower">Follower</option>
          </select>
        </label>
      </p>
      <p>
        <label>Message:</label>
        <textarea name="message"></textarea>
      </p>
      <p>
        <button type="submit">Send</button>
      </p>
    </form>
  );
}

export default Form;
