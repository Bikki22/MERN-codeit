import { updateProfileImage } from "@/api/users";
import { updateUser } from "@/redux/auth/authSlice";
import Image from "next/image";
import React, { useState } from "react";
import { FaUser } from "react-icons/fa";
import { useDispatch } from "react-redux";

const ProfileImage = ({ user }) => {
  const [profileImage, setProfileImage] = useState(null);
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();

  function updateImage(e) {
    e.preventDefault();
    setLoading(true);
    const formdata = new FormData();

    formdata.append("profileImage", profileImage);

    updateProfileImage(user._id, formdata)
      .then((response) => {
        dispatch(updateUser(response.data.profileImageUrl));

        setProfileImage(null);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => setLoading(false));
  }

  return (
    <div className="flex items-center gap-5">
      {user?.profileImageUrl ? (
        <Image
          src={user.profileImageUrl}
          alt="profile"
          height={64}
          width={64}
          className="h-16 w-16 rounded-full object-cover"
        />
      ) : (
        <FaUser className="h-16 w-16  rounded-full p-3 bg-gray-200 text-gray-700" />
      )}

      <form className="flex flex-col items-start gap-3" onSubmit={updateImage}>
        <input
          type="file"
          accept="image/png,image/jpeg,image/jpg"
          className="border border-gray-400 rounded-md px-3 py-1"
          required
          onChange={(e) => {
            const file = e.target.files[0];
            setProfileImage(file);
          }}
        />

        <button
          type="submit"
          disabled={loading}
          className="border border-gray-40 px-5 py-1 rounded-md bg-gray-200 cursor-pointer"
        >
          {loading ? "uplodaing..." : "Upload Image"}
        </button>
      </form>
    </div>
  );
};

export default ProfileImage;
