export default function ContactPage() {
  return (
    <div className="container mx-auto py-10">
      <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
      <p className="text-lg text-gray-300">
        Feel free to get in touch with us via the form below or reach us
        directly via email at{" "}
        <a
          href="mailto:support@vehiquik.com"
          className="text-primary hover:underline"
        >
          support@vehiquik.com
        </a>
        .
      </p>
      <form className="mt-8 space-y-6">
        <div>
          <label className="block text-lg font-semibold text-gray-400">
            Name
          </label>
          <input
            type="text"
            className="w-full px-4 py-2 mt-1 bg-gray-800 text-gray-300 rounded-md focus:ring-primary"
          />
        </div>
        <div>
          <label className="block text-lg font-semibold text-gray-400">
            Email
          </label>
          <input
            type="email"
            className="w-full px-4 py-2 mt-1 bg-gray-800 text-gray-300 rounded-md focus:ring-primary"
          />
        </div>
        <div>
          <label className="block text-lg font-semibold text-gray-400">
            Message
          </label>
          <textarea
            className="w-full px-4 py-2 mt-1 bg-gray-800 text-gray-300 rounded-md focus:ring-primary"
            rows="4"
          ></textarea>
        </div>
        <button
          type="submit"
          className="px-6 py-3 bg-primary text-white rounded-md hover:bg-secondary"
        >
          Send Message
        </button>
      </form>
    </div>
  );
}
