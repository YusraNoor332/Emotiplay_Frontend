import React, { useState } from "react";
import { FaPaperPlane, FaExclamationCircle, FaComments } from "react-icons/fa";

interface FeedbackForm {
  type: "comment" | "issue";
  subject: string;
  message: string;
}

const Feedback: React.FC = () => {
  const [form, setForm] = useState<FeedbackForm>({
    type: "comment",
    subject: "",
    message: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the feedback to your backend
    console.log("Feedback submitted:", form);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-purple-100 to-white p-6 flex items-center justify-center">
        <div className="bg-white rounded-lg shadow-lg p-8 max-w-md w-full text-center">
          <FaPaperPlane className="text-purple-600 text-5xl mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Thank You!</h2>
          <p className="text-gray-600">
            Your feedback has been submitted successfully. We appreciate your
            input!
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-100 to-white p-6">
      <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="px-4 py-5 sm:px-6">
          <h2 className="text-2xl font-bold text-gray-900">
            EmotiPlay Feedback
          </h2>
          <p className="mt-1 text-sm text-gray-600">
            We value your input to improve our service
          </p>
        </div>
        <form onSubmit={handleSubmit} className="px-4 py-5 sm:p-6">
          <div className="space-y-6">
            <div>
              <label
                htmlFor="type"
                className="block text-sm font-medium text-gray-700"
              >
                Feedback Type
              </label>
              <select
                id="type"
                name="type"
                value={form.type}
                onChange={handleInputChange}
                className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-sm rounded-md"
              >
                <option value="comment">Comment</option>
                <option value="issue">Report an Issue</option>
              </select>
            </div>
            <div>
              <label
                htmlFor="subject"
                className="block text-sm font-medium text-gray-700"
              >
                Subject
              </label>
              <input
                type="text"
                name="subject"
                id="subject"
                value={form.subject}
                onChange={handleInputChange}
                className="mt-1 focus:ring-purple-500 focus:border-purple-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                required
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                value={form.message}
                onChange={handleInputChange}
                className="mt-1 focus:ring-purple-500 focus:border-purple-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                required
              ></textarea>
            </div>
          </div>
          <div className="mt-6">
            <button
              type="submit"
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
            >
              <FaPaperPlane className="mr-2" />
              Submit Feedback
            </button>
          </div>
        </form>
        <div className="px-4 py-5 bg-gray-50 sm:px-6">
          <div className="flex items-center justify-center space-x-4">
            <div className="flex items-center">
              <FaComments className="text-purple-600 mr-2" />
              <span className="text-sm text-gray-500">Share your thoughts</span>
            </div>
            <div className="flex items-center">
              <FaExclamationCircle className="text-purple-600 mr-2" />
              <span className="text-sm text-gray-500">Report issues</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feedback;
