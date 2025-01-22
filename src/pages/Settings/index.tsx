import React, { useState } from "react";
import { FaUser, FaLock, FaBell } from "react-icons/fa";

interface SettingsState {
  email: string;
  password: string;
  profileVisibility: boolean;
  dataSharing: boolean;
  emailNotifications: boolean;
  pushNotifications: boolean;
}

const Settings: React.FC = () => {
  const [settings, setSettings] = useState<SettingsState>({
    email: "user@example.com",
    password: "",
    profileVisibility: true,
    dataSharing: false,
    emailNotifications: true,
    pushNotifications: false,
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setSettings((prev) => ({ ...prev, [name]: value }));
  };

  const handleToggle = (setting: keyof SettingsState) => {
    setSettings((prev) => ({ ...prev, [setting]: !prev[setting] }));
  };

  const ToggleSwitch: React.FC<{ enabled: boolean; onToggle: () => void }> = ({
    enabled,
    onToggle,
  }) => (
    <button
      onClick={onToggle}
      className={`${
        enabled ? "bg-purple-600" : "bg-gray-200"
      } relative inline-flex items-center h-6 rounded-full w-11 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500`}
    >
      <span className="sr-only">Toggle setting</span>
      <span
        className={`${
          enabled ? "translate-x-6" : "translate-x-1"
        } inline-block w-4 h-4 transform bg-white rounded-full transition-transform`}
      />
    </button>
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-100 to-white p-6">
      <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="px-4 py-5 sm:px-6">
          <h2 className="text-2xl font-bold text-gray-900">
            EmotiPlay Settings
          </h2>
          <p className="mt-1 text-sm text-gray-600">
            Manage your account and preferences
          </p>
        </div>
        <div className="border-t border-gray-200 px-4 py-5 sm:p-6">
          <div className="space-y-6">
            {/* Account Settings */}
            <div>
              <h3 className="text-lg font-medium leading-6 text-gray-900 flex items-center">
                <FaUser className="mr-2 text-purple-500" /> Account Settings
              </h3>
              <div className="mt-4 space-y-4">
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    value={settings.email}
                    onChange={handleInputChange}
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-sm"
                  />
                </div>
                <div>
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Change Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    value={settings.password}
                    onChange={handleInputChange}
                    placeholder="Enter new password"
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-sm"
                  />
                </div>
              </div>
            </div>

            {/* Privacy Settings */}
            <div className="pt-6 border-t border-gray-200">
              <h3 className="text-lg font-medium leading-6 text-gray-900 flex items-center">
                <FaLock className="mr-2 text-purple-500" /> Privacy Settings
              </h3>
              <div className="mt-4 space-y-4">
                <div className="flex items-center justify-between">
                  <span className="flex-grow flex flex-col">
                    <span className="text-sm font-medium text-gray-900">
                      Profile Visibility
                    </span>
                    <span className="text-sm text-gray-500">
                      Allow others to see your profile
                    </span>
                  </span>
                  <ToggleSwitch
                    enabled={settings.profileVisibility}
                    onToggle={() => handleToggle("profileVisibility")}
                  />
                </div>
                <div className="flex items-center justify-between">
                  <span className="flex-grow flex flex-col">
                    <span className="text-sm font-medium text-gray-900">
                      Data Sharing
                    </span>
                    <span className="text-sm text-gray-500">
                      Share usage data to improve EmotiPlay
                    </span>
                  </span>
                  <ToggleSwitch
                    enabled={settings.dataSharing}
                    onToggle={() => handleToggle("dataSharing")}
                  />
                </div>
              </div>
            </div>

            {/* Notification Settings */}
            <div className="pt-6 border-t border-gray-200">
              <h3 className="text-lg font-medium leading-6 text-gray-900 flex items-center">
                <FaBell className="mr-2 text-purple-500" /> Notification
                Settings
              </h3>
              <div className="mt-4 space-y-4">
                <div className="flex items-center justify-between">
                  <span className="flex-grow flex flex-col">
                    <span className="text-sm font-medium text-gray-900">
                      Email Notifications
                    </span>
                    <span className="text-sm text-gray-500">
                      Receive updates via email
                    </span>
                  </span>
                  <ToggleSwitch
                    enabled={settings.emailNotifications}
                    onToggle={() => handleToggle("emailNotifications")}
                  />
                </div>
                <div className="flex items-center justify-between">
                  <span className="flex-grow flex flex-col">
                    <span className="text-sm font-medium text-gray-900">
                      Push Notifications
                    </span>
                    <span className="text-sm text-gray-500">
                      Receive push notifications on your device
                    </span>
                  </span>
                  <ToggleSwitch
                    enabled={settings.pushNotifications}
                    onToggle={() => handleToggle("pushNotifications")}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
          <button
            type="submit"
            className="bg-purple-600 border border-transparent rounded-md shadow-sm py-2 px-4 inline-flex justify-center text-sm font-medium text-white hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
          >
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
};

export default Settings;
