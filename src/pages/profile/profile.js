import { useEffect, useState } from 'react';
import axios from 'axios';

const SERVER_URL = 'https://aplus-server-e829eb76cb64.herokuapp.com';

const ProfilePage = () => {
  const [isAuthenticating, setIsAuthenticating] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [profileData, setProfileData] = useState(null);

  useEffect(() => {
    axios
      .get(`${SERVER_URL}/auth/profile`, { withCredentials: true })  
      .then((res) => {
        // Check if the user is authenticated
        if (res.status === 200) {  // Check the response status
          setIsLoggedIn(true);
          setProfileData(res.data);
        }
        setIsAuthenticating(false);
      })
      .catch((err) => {
        if (err.response.status === 401) {
          setIsLoggedIn(false);
        } else {
          console.error('Error authenticating:', err);
        }
        setIsAuthenticating(false);
      });
  }, []);

  const formatDate = (date) => {
    return new Date(date).toLocaleDateString('en-US');
  };

  if (isAuthenticating) {
    return <p>Loading...</p>;
  }

  return (
    <section className="profile-page">
      <h1>Profile Page</h1>
      {isLoggedIn ? (
        profileData && (
          <>
            <h2>Hello, {profileData.username}</h2>
            <h3>Registered since: {formatDate(profileData.updated_at)}</h3>
            <img
              className="profile-page__avatar"
              src={profileData.avatar_url}
              alt={`${profileData.username} avatar`}
            />

<div className="profile-page__logout-wrapper">
              
              <LogoutButton />
            </div>
          </>
        )
      ) : (
        <p>
          <strong>This page requires authentication.</strong>
        </p>
        <LoginButton />
      )}
    </section>
  );
};

export default ProfilePage;
