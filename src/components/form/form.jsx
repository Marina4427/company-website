import './style.css';

const Form = () => {
  return (
    <form className="formContact" id="contactUs">
      <h2 className="form_title">Let’s Talk 👋</h2>
      <p className="form_text">
        {" "}
        If you have any question or issue’s to use our product. Fill the form
        below. We’ll help you.
      </p>
      <div className="container__label">
        <label>
          Your name<span className="accent">*</span>
          <input
            type="text"
            className="contactForm_input"
            name="name"
            placeholder="Enter your name"
            required
          />
        </label>
        <label>
          Your email<span className="accent">*</span>
          <input
            type="email"
            className="contactForm_input"
            name="email"
            placeholder="Enter your email"
            required
          />
        </label>
      </div>
      <p>
        <label>
          Choose topic<span className="accent">*</span>
          <select id="topic" className="form__select" name="topic" required>
            <option value="" disabled selected>
              Select one topic*
            </option>
            <option value="lobor">Трудовые споры</option>
            <option value="family">Семейные споры</option>
          </select>
        </label>
      </p>
      <p>
        <div className="form_textarea">
          <label for="message">
            {" "}
            Message<span className="accent">*</span>
          </label>
          <textarea
            name="message"
            rows="7"
            placeholder="Write your message"
          ></textarea>
        </div>
      </p>
      <button type="submit" className="button form__button">
        {" "}
        Contact Us
      </button>
    </form>
  );
};

export default Form;
