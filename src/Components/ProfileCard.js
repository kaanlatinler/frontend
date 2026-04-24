import React from "react";

const ProfileCard = ({ profile }) => {
  return (
    <div className="col-12 col-lg-3 col-md-3">
      <div className="card">
        <div className="card-body py-4 px-5">
          <div className="d-flex align-items-center">
            <div className="avatar avatar-xl">
              <img src="/assets/images/faces/1.jpg" alt="Face 1" />
            </div>
            <div className="ms-3 name">
              <h5 className="font-bold">{`${profile?.Name} ${profile?.LastName}`}</h5>
              <h6 className="text-muted mb-0">{profile.Email}</h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
