import { useState, useEffect } from 'react';
import { getUserProfile, updateUserProfile } from '../../utils/api';

const UserProfile = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [statusMessage, setStatusMessage] = useState('');

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const userProfile = await getUserProfile();
        const { name, email } = userProfile;
        setName(name);
        setEmail(email);
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchUserProfile();
  }, []);

  const handleUpdateProfile = async (e) => {
    e.preventDefault();

    try {
      const updatedProfile = await updateUserProfile({ name, email });

      if (updatedProfile) {
        setStatusMessage('Profile update successful');
      } else {
        setStatusMessage('Profile update failed');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-8">
      <h2 className="text-2xl font-semibold mb-4">User Profile</h2>
      {statusMessage && <p>{statusMessage}</p>}
      <form onSubmit={handleUpdateProfile}>
        <div className="mb-4">
          <label htmlFor="name" className="block mb-2 font-medium">
            Name
          </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block mb-2 font-medium">
            Email
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none"
            required
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded"
        >
          Update Profile
        </button>
      </form>
    </div>
  );
};

export default UserProfile;
