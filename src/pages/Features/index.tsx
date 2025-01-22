import React from "react";
import { motion } from "framer-motion";
import { Lightbulb, Video, Heart, Zap, Shield, Users } from "lucide-react";

const FeatureCard: React.FC<{
  icon: React.ReactNode;
  title: string;
  description: string;
}> = ({ icon, title, description }) => (
  <motion.div
    className="bg-white rounded-lg shadow-lg p-6"
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    whileHover={{ scale: 1.05 }}
  >
    <motion.div
      className="text-purple-600 mb-4"
      initial={{ scale: 0 }}
      whileInView={{ scale: 1 }}
      transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
    >
      {icon}
    </motion.div>
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </motion.div>
);

const FeaturesPage: React.FC = () => {
  const features = [
    {
      icon: <Lightbulb size={40} />,
      title: "Mood Detection",
      description:
        "Our advanced AI analyzes your facial expressions and body language to accurately detect your current mood.",
    },
    {
      icon: <Video size={40} />,
      title: "Personalized Content",
      description:
        "Based on your mood, we curate a selection of videos tailored to enhance or complement your emotional state.",
    },
    {
      icon: <Heart size={40} />,
      title: "Emotional Wellness",
      description:
        "Track your mood patterns over time and receive insights to improve your emotional well-being.",
    },
    {
      icon: <Zap size={40} />,
      title: "Real-time Recommendations",
      description:
        "As your mood changes, our system adapts in real-time to provide the most relevant content.",
    },
    {
      icon: <Shield size={40} />,
      title: "Privacy First",
      description:
        "Your emotional data is encrypted and never shared, ensuring your privacy is always protected.",
    },
    {
      icon: <Users size={40} />,
      title: "Community Sharing",
      description:
        "Optionally share your favorite mood-boosting content with the Emotiplay community.",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-100 to-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.h1
          className="text-4xl font-bold text-center text-purple-800 mb-12"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Emotiplay Features
        </motion.h1>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </motion.div>

        <motion.div
          className="mt-16 bg-purple-600 rounded-lg shadow-lg p-8 text-white"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-semibold mb-4">How It Works</h2>
          <ol className="list-decimal list-inside space-y-4">
            <motion.li
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              Open the Emotiplay app and allow camera access for mood detection.
            </motion.li>
            <motion.li
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              Our AI analyzes your facial expressions and body language.
            </motion.li>
            <motion.li
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
            >
              Based on your detected mood, we curate a personalized video feed.
            </motion.li>
            <motion.li
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8, duration: 0.5 }}
            >
              Enjoy content that resonates with your current emotional state.
            </motion.li>
            <motion.li
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 1, duration: 0.5 }}
            >
              Rate videos to help improve future recommendations.
            </motion.li>
          </ol>
        </motion.div>
      </div>
    </div>
  );
};

export default FeaturesPage;
