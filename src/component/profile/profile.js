import React from "react";
import Navigation from "../navigation/nav";
import { useSelector } from "react-redux";
import { Selectuser } from "../../features/userSlice";
import { auth } from "../../firebase";
import "../profile/profile.css";

function Profile() {
  const user = useSelector(Selectuser);
  return (
    <div className="ProfileScreen">
      <Navigation />
      <div className="profilescreen_body">
        <h1>Edit screen</h1>
        <div className="profilescreen_info">
          <img
            src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/366be133850498.56ba69ac36858.png"
            alt=""
          />
          <div className="profilescreen_detail">
            <h2>{user?.email}</h2>
            <div className="profilescreen_plan">
              <h2>Plans(Current Plan: premium)</h2>
              <h3>Renewal date: -/--/---- </h3>
              <div className="netflix_standard">
                <div className="netflix__standard_word">
                  <h3>Netflix standard</h3>
                  <h4>1080px</h4>
                </div>
                <button>Subscribe</button>
              </div>
              <div className="netflix_basic">
                <div className="netflix__basic_word">
                  <h3>Netflix Basic</h3>
                  <h4>480px</h4>
                </div>
                <button>Subscribe</button>
              </div>
              <div className="netflix_premium">
                <div className="netflix__premium_word">
                  <h3>Netflix premium</h3>
                  <h4>480px</h4>
                </div>
                <button>Current Package</button>
              </div>
              <button
                className="profilescreen_signout"
                onClick={() => auth.signOut()}
              >
                Sign Out
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
