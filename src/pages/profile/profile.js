import { useEffect, useState } from "react";
import './profile.css';
import axios from "axios";
import needauth from "../../assets/Images/meme_sad_frog.png"

const SERVER_URL = "https://aplus-server-e829eb76cb64.herokuapp.com";

const ProfilePage = () => {
  const [isAuthenticating, setIsAuthenticating] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [profileData, setProfileData] = useState(null);

  useEffect(() => {
    axios
      .get(`${SERVER_URL}/auth/profile`, { withCredentials: true })
      .then((res) => {
        // Check if the user is authenticated
        if (res.status === 200) {
          // Check the response status
          setIsLoggedIn(true);
          setProfileData(res.data);
        }
        setIsAuthenticating(false);
      })
      .catch((err) => {
        if (err.response.status === 401) {
          setIsLoggedIn(false);
        } else {
          console.error("Error authenticating:", err);
        }
        setIsAuthenticating(false);
      });
  }, []);

  const formatDate = (date) => {
    return new Date(date).toLocaleDateString("en-US");
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

            
          </>
        )
      ) : (
        <>
          <p>
            <strong>This page requires authentication.</strong>
            <img alt="failed face" className="needauth" src={needauth}></img>
          </p>

        </>
      )}
    </section>
  );
};

export default ProfilePage;
