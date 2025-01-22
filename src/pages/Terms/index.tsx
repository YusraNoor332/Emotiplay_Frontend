import React from "react";
import { motion } from "framer-motion";

const TermsAndConditionsPage: React.FC = () => {
  const sections = [
    {
      title: "Acceptance of Terms",
      content:
        "By accessing or using the Emotiplay application, you agree to be bound by these Terms and Conditions. If you disagree with any part of the terms, you may not access the service.",
    },
    {
      title: "Use of Service",
      content:
        "You must be at least 13 years old to use this service. You are responsible for maintaining the confidentiality of your account and password. You agree to accept responsibility for all activities that occur under your account.",
    },
    {
      title: "Content",
      content:
        "Our service allows you to post, link, store, share and otherwise make available certain information, text, graphics, videos, or other material. You are responsible for the content that you post to the service, including its legality, reliability, and appropriateness.",
    },
    {
      title: "Intellectual Property",
      content:
        "The service and its original content (excluding content provided by users), features and functionality are and will remain the exclusive property of Emotiplay and its licensors. The service is protected by copyright, trademark, and other laws.",
    },
    {
      title: "Termination",
      content:
        "We may terminate or suspend your account and bar access to the service immediately, without prior notice or liability, under our sole discretion, for any reason whatsoever and without limitation, including but not limited to a breach of the Terms.",
    },
    {
      title: "Limitation of Liability",
      content:
        "In no event shall Emotiplay, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your access to or use of or inability to access or use the service.",
    },
    {
      title: "Governing Law",
      content:
        "These Terms shall be governed and construed in accordance with the laws of [Your Country/State], without regard to its conflict of law provisions.",
    },
    {
      title: "Changes to Terms",
      content:
        "We reserve the right, at our sole discretion, to modify or replace these Terms at any time. What constitutes a material change will be determined at our sole discretion. By continuing to access or use our service after those revisions become effective, you agree to be bound by the revised terms.",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-100 to-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <motion.h1
          className="text-4xl font-bold text-center text-purple-800 mb-12"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Terms and Conditions
        </motion.h1>

        {sections.map((section, index) => (
          <motion.div
            key={index}
            className="mb-8"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <h2 className="text-2xl font-semibold text-purple-700 mb-2">
              {section.title}
            </h2>
            <p className="text-gray-600">{section.content}</p>
          </motion.div>
        ))}

        <motion.p
          className="text-sm text-gray-500 mt-12 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
        >
          Last Updated: {new Date().toLocaleDateString()}
        </motion.p>
      </div>
    </div>
  );
};

export default TermsAndConditionsPage;
