import React, { useState, useRef, useCallback } from "react";
import Webcam from "react-webcam";
import { FaCamera, FaSync } from "react-icons/fa";

const MoodDetection: React.FC = () => {
  const [isDetecting, setIsDetecting] = useState(false);
  const [progress, setProgress] = useState(0);
  const webcamRef = useRef<Webcam>(null);

  const startDetection = useCallback(() => {
    setIsDetecting(true);
    setProgress(0);
    const interval = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress >= 100) {
          clearInterval(interval);
          setIsDetecting(false);
          // Here you would typically call your mood detection API
          console.log("Mood detection complete");
          return 100;
        }
        return prevProgress + 10;
      });
    }, 500);
  }, []);

  const retake = () => {
    setIsDetecting(false);
    setProgress(0);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-100 to-white p-6 flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Mood Detection</h1>

      <div className="w-full max-w-md bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="relative">
          <Webcam
            audio={false}
            ref={webcamRef}
            screenshotFormat="image/jpeg"
            className="w-full h-auto"
          />
          {!isDetecting && progress === 0 && (
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white">
              <div className="text-center">
                <FaCamera className="w-12 h-12 mx-auto mb-2" />
                <p>Align your face in the frame</p>
              </div>
            </div>
          )}
        </div>

        <div className="p-6">
          {!isDetecting && progress === 0 && (
            <button
              onClick={startDetection}
              className="w-full bg-purple-600 text-white rounded-lg py-3 px-4 font-medium hover:bg-purple-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
            >
              Start Mood Detection
            </button>
          )}

          {isDetecting && (
            <div className="space-y-4">
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div
                  className="bg-purple-600 h-2.5 rounded-full transition-all duration-500 ease-out"
                  style={{ width: `${progress}%` }}
                ></div>
              </div>
              <p className="text-center text-gray-600">
                Detecting your mood...
              </p>
            </div>
          )}

          {!isDetecting && progress === 100 && (
            <div className="space-y-4">
              <p className="text-center text-gray-800 font-medium">
                Mood detection complete!
              </p>
              <button
                onClick={retake}
                className="w-full bg-gray-200 text-gray-800 rounded-lg py-3 px-4 font-medium hover:bg-gray-300 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 flex items-center justify-center"
              >
                <FaSync className="mr-2" /> Retake
              </button>
            </div>
          )}
        </div>
      </div>

      <div className="mt-8 max-w-md text-center">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">
          Instructions
        </h2>
        <ol className="list-decimal text-left space-y-2 text-gray-600">
          <li>Ensure you're in a well-lit environment.</li>
          <li>Position your face within the frame.</li>
          <li>Keep a neutral expression when starting.</li>
          <li>Click "Start Mood Detection" when ready.</li>
          <li>Maintain your position until the process completes.</li>
        </ol>
      </div>
    </div>
  );
};

export default MoodDetection;
