import { useLocation } from "react-router-dom";

const UserProfile = () => {
  const { state } = useLocation();

  return (
    <div className="profile-container">
      {state ? (
        <>
          <h2>User Profile</h2>
          <div className="Profile-content">
            <p>
              <span className="profile-text">Name : </span>
              {state.name}
            </p>
            <p>
              <span className="profile-text">E-mail : </span>
              {state.email}
            </p>
            <p>
              <span className="profile-text">City :</span> {state.city}
            </p>
            <p>
              <span className="profile-text">Country :</span>
              {state.country}
            </p>
          </div>
        </>
      ) : (
        <p>No Profile exists</p>
      )}
    </div>
  );
};

export default UserProfile;
