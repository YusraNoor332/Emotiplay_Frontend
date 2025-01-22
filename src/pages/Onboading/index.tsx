import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaSmile, FaCamera, FaPlayCircle } from "react-icons/fa";
import { useNavigate } from "react-router";

const onboardingSteps = [
  {
    title: "Welcome to EmotiPlay",
    description:
      "Discover videos that match your mood and enhance your viewing experience.",
    icon: <FaSmile className="w-16 h-16 text-purple-500" />,
  },
  {
    title: "Mood-Based Recommendations",
    description:
      "Our AI analyzes your mood and suggests personalized content just for you.",
    icon: <FaPlayCircle className="w-16 h-16 text-purple-500" />,
  },
  {
    title: "OpenCV Scanning",
    description:
      "Use your camera to scan your facial expressions and get instant recommendations.",
    icon: <FaCamera className="w-16 h-16 text-purple-500" />,
  },
];

const Onboarding: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const navigate = useNavigate();

  const handleNext = () => {
    if (currentStep < onboardingSteps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleGetStarted = () => {
    // Navigate to Home screen
    navigate("/home");
    console.log("Navigating to Home screen");
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-100 to-white flex flex-col justify-between">
      <div className="flex-1 flex items-center justify-center p-4">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentStep}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.3 }}
            className="max-w-md w-full space-y-8 text-center"
          >
            {onboardingSteps[currentStep].icon}
            <h2 className="mt-6 text-3xl font-extrabold text-gray-900">
              {onboardingSteps[currentStep].title}
            </h2>
            <p className="mt-2 text-sm text-gray-600">
              {onboardingSteps[currentStep].description}
            </p>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="p-4 space-y-4">
        <div className="flex justify-between items-center">
          <button
            onClick={handlePrevious}
            className={`px-4 py-2 text-sm font-medium text-purple-600 ${
              currentStep === 0 ? "invisible" : ""
            }`}
          >
            Previous
          </button>
          {currentStep < onboardingSteps.length - 1 ? (
            <button
              onClick={handleNext}
              className="px-4 py-2 bg-purple-600 text-white rounded-md text-sm font-medium hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
            >
              Next
            </button>
          ) : (
            <button
              onClick={handleGetStarted}
              className="px-4 py-2 bg-purple-600 text-white rounded-md text-sm font-medium hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
            >
              Get Started
            </button>
          )}
        </div>
        <div className="flex justify-center space-x-2">
          {onboardingSteps.map((_, index) => (
            <div
              key={index}
              className={`w-2 h-2 rounded-full ${
                index === currentStep ? "bg-purple-600" : "bg-gray-300"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Onboarding;
