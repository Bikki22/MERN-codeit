"use client";

import { profile } from "@/api/auth";
import React from "react";

const ProfilePage = () => {
  try {
    profile().then((response) => console.log("response:", response));
  } catch (error) {
    console.log(error.message);
  }

  return (
    <div>
      <h1>Profile Page</h1>
      {/* {user ? <pre>{JSON.stringify(user, null, 2)}</pre> : "Loading..."} */}
    </div>
  );
};

export default ProfilePage;
