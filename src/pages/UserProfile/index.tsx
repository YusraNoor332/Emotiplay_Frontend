import React, { useState } from "react";
import {
  FaEdit,
  FaCheck,
  FaTimes,
  FaMusic,
  FaHeart,
  FaPlayCircle,
} from "react-icons/fa";

interface UserData {
  name: string;
  username: string;
  email: string;
  bio: string;
  profilePicture: string;
  stats: {
    playlistsCreated: number;
    favoriteVideos: number;
    totalWatched: number;
  };
}

const UserProfile: React.FC = () => {
  const [userData, setUserData] = useState<UserData>({
    name: "Jane Doe",
    username: "jane_emotiplay",
    email: "jane@example.com",
    bio: "Music lover and mood enthusiast. Always looking for the perfect soundtrack to my emotions!",
    profilePicture: "/placeholder.svg?height=200&width=200",
    stats: {
      playlistsCreated: 12,
      favoriteVideos: 50,
      totalWatched: 200,
    },
  });

  const [isEditing, setIsEditing] = useState(false);
  const [editedData, setEditedData] = useState(userData);

  const handleEdit = () => {
    setIsEditing(true);
    setEditedData(userData);
  };

  const handleSave = () => {
    setUserData(editedData);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setIsEditing(false);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setEditedData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-100 to-white p-6">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="md:flex">
          <div className="md:flex-shrink-0">
            <img
              className="h-48 w-full object-cover md:w-48"
              src={userData.profilePicture}
              alt={userData.name}
            />
          </div>
          <div className="p-8 w-full">
            <div className="flex justify-between items-start">
              <div>
                {isEditing ? (
                  <input
                    type="text"
                    name="name"
                    value={editedData.name}
                    onChange={handleChange}
                    className="text-2xl font-bold text-gray-900 mb-2 border-b-2 border-purple-300 focus:outline-none focus:border-purple-500"
                  />
                ) : (
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">
                    {userData.name}
                  </h2>
                )}
                <p className="text-sm text-gray-600 mb-4">
                  @{userData.username}
                </p>
              </div>
              {!isEditing ? (
                <button
                  onClick={handleEdit}
                  className="bg-purple-600 text-white px-4 py-2 rounded-full hover:bg-purple-700 transition-colors duration-200 flex items-center"
                >
                  <FaEdit className="mr-2" /> Edit Profile
                </button>
              ) : (
                <div className="flex space-x-2">
                  <button
                    onClick={handleSave}
                    className="bg-green-500 text-white px-4 py-2 rounded-full hover:bg-green-600 transition-colors duration-200 flex items-center"
                  >
                    <FaCheck className="mr-2" /> Save
                  </button>
                  <button
                    onClick={handleCancel}
                    className="bg-red-500 text-white px-4 py-2 rounded-full hover:bg-red-600 transition-colors duration-200 flex items-center"
                  >
                    <FaTimes className="mr-2" /> Cancel
                  </button>
                </div>
              )}
            </div>
            {isEditing ? (
              <textarea
                name="bio"
                value={editedData.bio}
                onChange={handleChange}
                className="mt-2 w-full h-24 text-gray-700 border-2 border-purple-300 rounded-md p-2 focus:outline-none focus:border-purple-500"
              />
            ) : (
              <p className="mt-2 text-gray-700">{userData.bio}</p>
            )}
          </div>
        </div>
        <div className="border-t border-gray-200 px-4 py-5 sm:p-0">
          <dl className="sm:divide-y sm:divide-gray-200">
            <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">Email</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                {isEditing ? (
                  <input
                    type="email"
                    name="email"
                    value={editedData.email}
                    onChange={handleChange}
                    className="w-full border-b-2 border-purple-300 focus:outline-none focus:border-purple-500"
                  />
                ) : (
                  userData.email
                )}
              </dd>
            </div>
          </dl>
        </div>
        <div className="bg-gray-50 px-4 py-5 sm:p-6">
          <h3 className="text-lg font-medium leading-6 text-gray-900 mb-4">
            User Stats
          </h3>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
            <div className="bg-white overflow-hidden shadow rounded-lg">
              <div className="px-4 py-5 sm:p-6">
                <div className="flex items-center">
                  <div className="flex-shrink-0 bg-purple-500 rounded-md p-3">
                    <FaMusic className="h-6 w-6 text-white" />
                  </div>
                  <div className="ml-5 w-0 flex-1">
                    <dl>
                      <dt className="text-sm font-medium text-gray-500 truncate">
                        Playlists Created
                      </dt>
                      <dd className="text-lg font-medium text-gray-900">
                        {userData.stats.playlistsCreated}
                      </dd>
                    </dl>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white overflow-hidden shadow rounded-lg">
              <div className="px-4 py-5 sm:p-6">
                <div className="flex items-center">
                  <div className="flex-shrink-0 bg-purple-500 rounded-md p-3">
                    <FaHeart className="h-6 w-6 text-white" />
                  </div>
                  <div className="ml-5 w-0 flex-1">
                    <dl>
                      <dt className="text-sm font-medium text-gray-500 truncate">
                        Favorite Videos
                      </dt>
                      <dd className="text-lg font-medium text-gray-900">
                        {userData.stats.favoriteVideos}
                      </dd>
                    </dl>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white overflow-hidden shadow rounded-lg">
              <div className="px-4 py-5 sm:p-6">
                <div className="flex items-center">
                  <div className="flex-shrink-0 bg-purple-500 rounded-md p-3">
                    <FaPlayCircle className="h-6 w-6 text-white" />
                  </div>
                  <div className="ml-5 w-0 flex-1">
                    <dl>
                      <dt className="text-sm font-medium text-gray-500 truncate">
                        Total Videos Watched
                      </dt>
                      <dd className="text-lg font-medium text-gray-900">
                        {userData.stats.totalWatched}
                      </dd>
                    </dl>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
