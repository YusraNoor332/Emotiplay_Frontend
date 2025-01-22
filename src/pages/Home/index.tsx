import axios from "axios";
import { Loader2 } from "lucide-react";
import React, { useState, useCallback, useRef, useEffect } from "react";
import toast from "react-hot-toast";
import {
  FaSmile,
  FaSadTear,
  FaAngry,
  FaMeh,
  FaLaugh,
  FaSync,
} from "react-icons/fa";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import Modal from "react-modal";

Modal.setAppElement("#root");

interface MoodCategory {
  name: string;
  icon: React.ReactNode;
  color: string;
}

const server = import.meta.env.VITE_SERVER_URL;

const moodCategories: MoodCategory[] = [
  {
    name: "Happy",
    icon: <FaSmile className="w-8 h-8" />,
    color: "bg-yellow-400",
  },
  {
    name: "Sad",
    icon: <FaSadTear className="w-8 h-8" />,
    color: "bg-blue-400",
  },
  { name: "Angry", icon: <FaAngry className="w-8 h-8" />, color: "bg-red-400" },
  {
    name: "Neutral",
    icon: <FaMeh className="w-8 h-8" />,
    color: "bg-gray-400",
  },
  {
    name: "Excited",
    icon: <FaLaugh className="w-8 h-8" />,
    color: "bg-green-400",
  },
  {
    name: "Fear",
    icon: <FaLaugh className="w-8 h-8" />,
    color: "bg-purple-400",
  },
];

const Home: React.FC = () => {
  const [userName, setUserName] = useState("John");
  const [selectedMood, setSelectedMood] = useState<string>("Happy");
  const [videoRecommendations, setVideoRecommendations] = useState<string[]>(
    []
  );
  const [videos, setVideos] = useState([]);
  const [isRefreshing, setIsRefreshing] = useState<boolean>(false);
  const [currentMood, setCurrentMood] = useState<string>("neutral");
  const [isLoading, setIsLoading] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);
  const photoRef = useRef(null);
  const videoRef = useRef(null);

  const navigate = useNavigate();
  const user = useSelector((state) => state.user.user);

  const openModal = (videoUrl: string) => {
    setSelectedVideo(videoUrl);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setSelectedVideo(null);
  };

  const takePicture = () => {
    const width = 500;
    const height = width / (16 / 9);
    const photo = photoRef.current;
    const video = videoRef.current;
    photo.width = width;
    photo.height = height;

    const ctx = photo.getContext("2d");
    if (ctx) {
      ctx.drawImage(video, 0, 0, photo.width, photo.height);
      const imageBase64 = photo.toDataURL("image/png");
      getMoodFromImage(imageBase64);
    }
  };

  const base64ToBlob = (base64: string, mimeType: string): Blob => {
    const byteCharacters = atob(base64.split(",")[1]); // Remove the "data:image/png;base64," part
    const byteArrays = [];

    for (let offset = 0; offset < byteCharacters.length; offset++) {
      const byte = byteCharacters.charCodeAt(offset);
      byteArrays.push(byte);
    }

    return new Blob([new Uint8Array(byteArrays)], { type: mimeType });
  };

  const getMoodFromImage = async (imageBase64: string) => {
    const mimeType = "image/png";
    const blob = base64ToBlob(imageBase64, mimeType);
    try {
      setIsRefreshing(true);
      const formData = new FormData();
      formData.append("image", blob, "selfie.png");
      const resp = await axios.post(`${server}/api/v1/mood/upload`, formData);
      if (resp) {
        const { mood } = resp.data;
        setCurrentMood(mood);
        getVideos(mood);
        setSelectedMood(mood.replace(/\b\w/g, (char) => char.toUpperCase()));
        console.log(resp.data);
      }
    } catch (error) {
      if (error.status === 406) {
        toast.error("Your visual was not clear refresh you mood again!");
      }
      console.log("Error", error);
    } finally {
      setIsRefreshing(false);
    }
  };

  const getUserCamera = () => {
    navigator.mediaDevices
      .getUserMedia({
        video: true,
      })
      .then((stream) => {
        let video = videoRef.current;

        video.srcObject = stream;
        video.play();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const getVideos = async (mood: string) => {
    try {
      setIsLoading(true);
      const resp = await axios.post(`${server}/api/v1/video/`, {
        mood: mood,
        max_count: 50,
      });
      if (resp) {
        setVideos(resp.data?.videos ?? []);
      }
    } catch (error) {
      console.log("Error:", error);
      toast.error("Failed to get videos. Please try again later!");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    const recommendations = {
      Happy: ["Happy Video 1", "Happy Video 2", "Happy Video 3"],
      Sad: ["Sad Video 1", "Sad Video 2", "Sad Video 3"],
      Angry: ["Angry Video 1", "Angry Video 2", "Angry Video 3"],
      Neutral: ["Neutral Video 1", "Neutral Video 2", "Neutral Video 3"],
      Excited: ["Excited Video 1", "Excited Video 2", "Excited Video 3"],
      Fear: ["Fear Video 1", "Fear Video 2", "Fear Video 3"],
    };
    setVideoRecommendations(recommendations[selectedMood]);
  }, [selectedMood]);

  useEffect(() => {
    getUserCamera();
  }, [videoRef]);

  useEffect(() => {
    if (videoRef) {
      takePicture();
    }
  }, [videoRef]);

  useEffect(() => {
    if (user) {
      setUserName(`${user.first_name} ${user.last_name}`);
    } else {
      navigate("/login");
    }
  }, [user]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-100 to-white p-6">
      <header className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800">
          Welcome back, <span className="text-purple-600">{userName}</span>!
        </h1>
        <p className="text-gray-600 mt-2">How are you feeling today?</p>
      </header>

      <div className="py-2">
        <button
          onClick={takePicture}
          className="mt-4 px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700"
        >
          {isRefreshing && <FaSync className="w-6 h-6 animate-spin" />}
          {!isRefreshing && "Refresh Mood"}
        </button>
      </div>

      {/* Mood Overlay Section */}
      <div
        className={`mb-8 text-white text-center p-4 rounded-lg shadow-lg ${
          moodCategories.find((category) => category.name === selectedMood)
            ?.color
        }`}
      >
        <h2 className="text-xl font-semibold">
          Your Current Mood: {selectedMood}
        </h2>
        <p className="mt-2">
          Based on this mood, we recommend the following videos:
        </p>
      </div>

      <div>
        <video className=" hidden" ref={videoRef}></video>
        <canvas className="hidden" ref={photoRef}></canvas>
      </div>

      {/* Video Recommendations Section */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">
          Recommended Videos for {selectedMood}
        </h2>
        {isLoading && (
          <div className="min-h-screen w-full flex items-center justify-center">
            <Loader2 className="w-12 h-12 animate-spin" />
          </div>
        )}
        {!isLoading && (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {videos.map((video, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-200"
                onClick={() => openModal(video.video_url)}
              >
                <img
                  src={video?.thumbnail}
                  alt={video?.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold">{video?.title}</h3>
                  <p className="text-sm text-gray-600">{video?.description}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="YouTube Video"
        className="fixed inset-0 flex items-center justify-center p-4 bg-black bg-opacity-50"
        overlayClassName="fixed inset-0 bg-black bg-opacity-50"
      >
        <div className="bg-white relative p-8 rounded-lg shadow-lg w-full max-w-2xl">
          <button
            onClick={closeModal}
            className="absolute top-2 right-2 text-gray-600 hover:text-gray-900"
          >
            ✖
          </button>
          {selectedVideo && (
            <iframe
              src={`https://www.youtube.com/embed/${
                selectedVideo.split("=")[1]
              }`}
              title="YouTube Video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-96"
            ></iframe>
          )}
        </div>
      </Modal>
    </div>
  );
};

export default Home;
