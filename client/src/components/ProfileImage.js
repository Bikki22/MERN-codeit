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
    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5 pb-5 border-b border-slate-200 dark:border-slate-700">
      {user?.profileImageUrl ? (
        <Image
          src={user.profileImageUrl}
          alt="profile"
          height={80}
          width={80}
          className="h-20 w-20 rounded-2xl object-cover ring-2 ring-slate-200 dark:ring-slate-700"
        />
      ) : (
        <div className="h-20 w-20 rounded-2xl bg-gradient-to-br from-primary to-primary-dark text-white flex items-center justify-center ring-2 ring-slate-200 dark:ring-slate-700">
          <FaUser className="text-2xl" />
        </div>
      )}

      <form
        className="flex flex-col sm:flex-row items-start sm:items-center gap-3 flex-1"
        onSubmit={updateImage}
      >
        <input
          type="file"
          accept="image/png,image/jpeg,image/jpg"
          className="block text-sm text-slate-700 dark:text-slate-200 file:mr-3 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-medium file:bg-primary/10 file:text-primary hover:file:bg-primary/20 cursor-pointer"
          required
          onChange={(e) => {
            const file = e.target.files[0];
            setProfileImage(file);
          }}
        />

        <button
          type="submit"
          disabled={loading}
          className="bg-primary text-white text-sm font-medium px-5 py-2 rounded-xl hover:bg-primary-dark hover:shadow-md hover:shadow-primary/20 cursor-pointer transition disabled:opacity-60"
        >
          {loading ? "Uploading..." : "Upload"}
        </button>
      </form>
    </div>
  );
};

export default ProfileImage;
