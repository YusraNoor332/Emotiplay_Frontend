import React, { useState, useRef } from "react";
import { FaPlay, FaPause, FaVolumeUp, FaVolumeMute } from "react-icons/fa";

interface RelatedVideo {
  id: string;
  title: string;
  thumbnail: string;
  mood: string;
}

const VideoPlayer: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const relatedVideos: RelatedVideo[] = [
    {
      id: "1",
      title: "Happy Moments Compilation",
      thumbnail: "/placeholder.svg?height=90&width=160",
      mood: "Happy",
    },
    {
      id: "2",
      title: "Relaxing Nature Sounds",
      thumbnail: "/placeholder.svg?height=90&width=160",
      mood: "Calm",
    },
    {
      id: "3",
      title: "Motivational Speech",
      thumbnail: "/placeholder.svg?height=90&width=160",
      mood: "Inspired",
    },
  ];

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-100 to-white p-6">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="relative">
            <video
              ref={videoRef}
              className="w-full h-auto"
              src="/placeholder.mp4"
              poster="/placeholder.svg?height=480&width=640"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
              <div className="flex items-center justify-between">
                <button
                  onClick={togglePlay}
                  className="text-white hover:text-purple-300 transition-colors duration-200"
                >
                  {isPlaying ? <FaPause size={24} /> : <FaPlay size={24} />}
                </button>
                <button
                  onClick={toggleMute}
                  className="text-white hover:text-purple-300 transition-colors duration-200"
                >
                  {isMuted ? (
                    <FaVolumeMute size={24} />
                  ) : (
                    <FaVolumeUp size={24} />
                  )}
                </button>
              </div>
            </div>
          </div>
          <div className="p-4">
            <h1 className="text-2xl font-bold text-gray-800 mb-2">
              Current Video Title
            </h1>
            <p className="text-gray-600">
              Video description goes here. This video is perfect for your
              current mood.
            </p>
          </div>
        </div>

        <div className="mt-8">
          <h2 className="text-xl font-bold text-gray-800 mb-4">
            Related Videos
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {relatedVideos.map((video) => (
              <div
                key={video.id}
                className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-200 hover:scale-105"
              >
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-full h-24 object-cover"
                />
                <div className="p-2">
                  <h3 className="text-sm font-semibold text-gray-800 mb-1 truncate">
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
    </div>
  );
};

export default VideoPlayer;
