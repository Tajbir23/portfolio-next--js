'use client'

const Contact = () => {
  const handleSubmit = async(e) => {
    e.preventDefault();

    // Get form values
    const subject = e.target.subject.value
    const email = e.target.email.value;
    const message = e.target.message.value;
    console.log(subject, email, message);

    const res = await fetch("/email", {
      method: "POST",
      body: JSON.stringify({
        subject: subject,
        email: email,
        message: message
      })
    });
    const data = res.json()
    console.log(data);
    // Send form data to server or use fetch API
    alert("Form submitted successfully!");
  }
  return (
    <div id="contact" className="min-h-screen mx-10 bg-black text-white flex items-center justify-center">
      <form onSubmit={handleSubmit} className="bg-gray-900 p-8 rounded-lg w-full shadow-lg">
        <h2 className="text-2xl mb-6 font-bold">Contact Me</h2>
        <div className="flex gap-5 w-full flex-col md:flex-row">
        <div className="flex flex-col mb-4 ">
          <label className="mb-2 text-gray-300" htmlFor="subject">Subject</label>
          <input
            className="p-3 bg-gray-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            type="text"
            id="subject"
            name="subject"
            placeholder="Your subject"
          />
        </div>
        <div className="flex flex-col mb-4">
          <label className="mb-2 text-gray-300" htmlFor="email">Email</label>
          <input
            className="p-3 bg-gray-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            type="email"
            id="email"
            placeholder="Your Email"
          />
        </div>
        </div>
        <div className="flex flex-col mb-6">
          <label className="mb-2 text-gray-300" htmlFor="message">Message</label>
          <textarea
            className="p-3 bg-gray-800 text-white rounded-lg h-32 focus:outline-none focus:ring-2 focus:ring-blue-500"
            id="message"
            placeholder="Your Message"
          ></textarea>
        </div>
        <button
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-lg transition duration-300"
          type="submit"
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default Contact;
