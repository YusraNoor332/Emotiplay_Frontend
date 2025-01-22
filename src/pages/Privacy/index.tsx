import React from "react";
import { motion } from "framer-motion";

const PrivacyPolicyPage: React.FC = () => {
  const sections = [
    {
      title: "Introduction",
      content:
        "At Emotiplay, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our Emotiplay application.",
    },
    {
      title: "Information We Collect",
      content:
        "We collect information that you provide directly to us, such as when you create an account, use our mood detection feature, or submit feedback. This may include your name, email address, and facial expression data.",
    },
    {
      title: "How We Use Your Information",
      content:
        "We use the information we collect to provide, maintain, and improve our services, to develop new features, and to protect Emotiplay and our users. This includes using your mood data to provide personalized video recommendations.",
    },
    {
      title: "Data Security",
      content:
        "We implement a variety of security measures to maintain the safety of your personal information. Your mood data and personal information are encrypted and stored securely.",
    },
    {
      title: "Data Sharing and Disclosure",
      content:
        "We do not sell, trade, or otherwise transfer your personally identifiable information to third parties. This does not include trusted third parties who assist us in operating our application, so long as these parties agree to keep this information confidential.",
    },
    {
      title: "Your Choices",
      content:
        "You can choose not to provide certain information, but this may limit your ability to use some features of Emotiplay. You can also opt-out of mood detection at any time through your account settings.",
    },
    {
      title: "Changes to This Policy",
      content:
        "We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the 'Last Updated' date.",
    },
    {
      title: "Contact Us",
      content:
        "If you have any questions about this Privacy Policy, please contact us at privacy@emotiplay.com.",
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
          Privacy Policy
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

export default PrivacyPolicyPage;
