export default function ContactSection() {
  return (
    <section
      id="contact"
      className="bg-customBlue flex items-center justify-center py-5"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-12">
        <div className="border-t border-gray-300 my-12"></div>
        <h2 className="text-4xl font-bold text-center mb-12 text-white">
          Contact Me
        </h2>
        <p className="text-lg text-white text-center text-gray-600 mb-12">
          Feel free to reach out to me for collaborations, questions, or just to
          say hi!
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <form>
              <div className="mb-4">
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                  placeholder="Your name"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                  placeholder="Your email address"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                  placeholder="Your message..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-indigo-600 text-white py-2 px-4 rounded-lg shadow-md css-button-rounded--sky"
              >
                Send Message
              </button>
            </form>
          </div>
          <div className="flex flex-col justify-center">
            <div className="flex items-center mb-6">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-indigo-600 mr-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16.016 7.44l-4-4L4.44 11.016l4 4L16.016 7.44z"
                />
              </svg>
              <span className="text-lg text-white">+62 823 3025 5171</span>
            </div>
            <div className="flex items-center mb-6">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-indigo-600 mr-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 10h11m4 0h3m-6 0a2 2 0 100-4 2 2 0 000 4zm0 6h5m-10 0h1m4 0h3m-3 6a2 2 0 100-4 2 2 0 000 4zm0-10V4m0 14v-4"
                />
              </svg>
              <span className="text-lg text-white">gomelkevin@gmail.com</span>
            </div>
            <div className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-indigo-600 mr-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16 2a2 2 0 012 2v16a2 2 0 01-2 2H8a2 2 0 01-2-2V4a2 2 0 012-2h8z"
                />
              </svg>
              <span className="text-lg text-white">Surabaya, Indonesia</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
