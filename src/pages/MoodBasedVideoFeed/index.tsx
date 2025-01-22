import React, { useState } from "react";
import { FaSync, FaPlay } from "react-icons/fa";

interface Video {
  id: string;
  title: string;
  thumbnail: string;
  mood: string;
}

interface MoodBasedVideoFeedProps {
  currentMood?: string;
}

const MoodBasedVideoFeed: React.FC<MoodBasedVideoFeedProps> = ({
  currentMood = "Happy",
}) => {
  const [videos, setVideos] = useState<Video[]>([
    {
      id: "1",
      title: "Happy Moments Compilation",
      thumbnail: "/placeholder.svg?height=180&width=320",
      mood: "Happy",
    },
    {
      id: "2",
      title: "Relaxing Nature Sounds",
      thumbnail: "/placeholder.svg?height=180&width=320",
      mood: "Calm",
    },
    {
      id: "3",
      title: "Motivational Speech",
      thumbnail: "/placeholder.svg?height=180&width=320",
      mood: "Inspired",
    },
    {
      id: "4",
      title: "Funny Cat Videos",
      thumbnail: "/placeholder.svg?height=180&width=320",
      mood: "Happy",
    },
    {
      id: "5",
      title: "Soothing Piano Music",
      thumbnail: "/placeholder.svg?height=180&width=320",
      mood: "Relaxed",
    },
    {
      id: "6",
      title: "Epic Movie Scenes",
      thumbnail: "/placeholder.svg?height=180&width=320",
      mood: "Excited",
    },
  ]);

  const refreshVideos = () => {
    // In a real application, this would fetch new videos from an API
    const newVideos: Video[] = [
      {
        id: "7",
        title: "Peaceful Ocean Waves",
        thumbnail: "/placeholder.svg?height=180&width=320",
        mood: "Calm",
      },
      {
        id: "8",
        title: "Upbeat Dance Music",
        thumbnail: "/placeholder.svg?height=180&width=320",
        mood: "Energetic",
      },
      {
        id: "9",
        title: "Inspirational Success Stories",
        thumbnail: "/placeholder.svg?height=180&width=320",
        mood: "Motivated",
      },
    ];
    setVideos([...newVideos, ...videos.slice(0, 3)]);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-100 to-white p-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold text-gray-800">
            Videos for your{" "}
            <span className="text-purple-600">{currentMood}</span> mood
          </h1>
          <button
            onClick={refreshVideos}
            className="flex items-center bg-purple-600 text-white px-4 py-2 rounded-full hover:bg-purple-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50"
          >
            <FaSync className="mr-2" />
            Refresh
          </button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {videos.map((video) => (
            <div
              key={video.id}
              className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-200 hover:scale-105"
            >
              <div className="relative">
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-200">
                  <FaPlay className="text-white text-4xl" />
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  {video.title}
                </h3>
                <span className="inline-block bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded-full">
                  {video.mood}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MoodBasedVideoFeed;
