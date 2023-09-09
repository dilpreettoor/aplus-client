import { useEffect, useState } from 'react';
import axios from 'axios';
import LoginButton from '../../components/button/LoginButton';
import LogoutButton from '../../components/button/LogoutButton';

const SERVER_URL = process.env.REACT_APP_SERVER_URL;

const ProfilePage = () => {

  const [isAuthenticating, setIsAuthenticating] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [profileData, setProfileData] = useState(null);

  useEffect(() => {
   
    axios
      .get(`${SERVER_URL}/auth/profile`, { withCredentials: true })
      .then((res) => {
        // Update the state: done authenticating, user is logged in, set the profile data
        setIsAuthenticating(false);
        setIsLoggedIn(true);
        setProfileData(res.data);
      })
      .catch((err) => {
        if (err.response.status === 401) {
          setIsAuthenticating(false);
          setIsLoggedIn(false);
        } else {
          console.log('Error authenticating', err);
        }
      });
  }, []);

  const formatDate = (date) => {
    return new Date(date).toLocaleDateString('en-US');
  };

  if (isAuthenticating) return null;

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
        <>
          <p>
            <strong>This page requires authentication.</strong>
          </p>
          <LoginButton />
        </>
      )}
    </section>
  );
};

export default ProfilePage;
