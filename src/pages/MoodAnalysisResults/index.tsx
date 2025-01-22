import React from "react";
import {
  FaSmile,
  FaSadTear,
  FaAngry,
  FaMeh,
  FaLaugh,
  FaQuestionCircle,
} from "react-icons/fa";
import { motion } from "framer-motion";

type Mood = "Happy" | "Sad" | "Angry" | "Neutral" | "Excited";

interface MoodData {
  mood: Mood;
  intensity: number;
}

interface MoodAnalysisResultsProps {
  moodData?: MoodData;
  onViewRecommendations?: () => void;
}

const moodConfig: Record<
  Mood | "Unknown",
  { icon: React.ElementType; color: string; textColor: string }
> = {
  Happy: {
    icon: FaSmile,
    color: "from-yellow-300 to-yellow-500",
    textColor: "text-yellow-800",
  },
  Sad: {
    icon: FaSadTear,
    color: "from-blue-300 to-blue-500",
    textColor: "text-blue-800",
  },
  Angry: {
    icon: FaAngry,
    color: "from-red-300 to-red-500",
    textColor: "text-red-800",
  },
  Neutral: {
    icon: FaMeh,
    color: "from-gray-300 to-gray-500",
    textColor: "text-gray-800",
  },
  Excited: {
    icon: FaLaugh,
    color: "from-green-300 to-green-500",
    textColor: "text-green-800",
  },
  Unknown: {
    icon: FaQuestionCircle,
    color: "from-purple-300 to-purple-500",
    textColor: "text-purple-800",
  },
};

const MoodAnalysisResults: React.FC<MoodAnalysisResultsProps> = ({
  moodData,
  onViewRecommendations,
}) => {
  const { mood = "Unknown", intensity = 0 } = moodData || {};
  const {
    icon: MoodIcon,
    color,
    textColor,
  } = moodConfig[mood] || moodConfig.Unknown;

  return (
    <div
      className={`min-h-screen bg-gradient-to-br ${color} flex flex-col items-center justify-center p-6`}
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="bg-white rounded-lg shadow-xl p-8 max-w-md w-full text-center"
      >
        <h1 className="text-3xl font-bold mb-6">Your Mood Analysis</h1>
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="mb-6"
        >
          <MoodIcon className={`w-24 h-24 mx-auto ${textColor}`} />
        </motion.div>
        <motion.h2
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className={`text-4xl font-bold mb-2 ${textColor}`}
        >
          {mood}
        </motion.h2>
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="w-full bg-gray-200 rounded-full h-2.5 mb-6"
        >
          <div
            className={`h-2.5 rounded-full ${color.split(" ")[1]}`}
            style={{ width: `${intensity}%` }}
          ></div>
        </motion.div>
        <p className="text-gray-600 mb-8">
          {mood === "Unknown"
            ? "We couldn't determine your mood. Try again?"
            : `Your current mood intensity is ${intensity}%`}
        </p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={onViewRecommendations}
          className="bg-purple-600 text-white font-bold py-3 px-6 rounded-full hover:bg-purple-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50"
        >
          {mood === "Unknown" ? "Try Again" : "View Recommendations"}
        </motion.button>
      </motion.div>
    </div>
  );
};

export default MoodAnalysisResults;
