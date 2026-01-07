import { DASHBOARD_ROUTES, PROFILE_ROUTES } from "@/constants/routes";
import Link from "next/link";

const UserPopup = ({ setShowPopup, user, logout }) => {
  return (
    <div className="absolute top-17 right-40">
      <div
        className="fixed top-0 left-0 h-full w-full bg-black/40 z-10"
        onClick={() => setShowPopup(false)}
      ></div>
      <div className="bg-white rounded-lg shadow-md px-4 py-2 min-w-50 flex flex-col items-start space-y-2 relative z-50">
        <h3 className="font-medium text-sm">{user.username}</h3>
        <p className="text-sm">{user.email}</p>
        <div className="w-full h-1 border-b border-gray-300"></div>

        <Link
          href={DASHBOARD_ROUTES}
          className="px-4 py-1 rounded-md bg-gray-100 w-full text-left hover:bg-primary hover:text-white"
        >
          dashboard
        </Link>
        <Link
          href={PROFILE_ROUTES}
          className="px-4 py-1 rounded-md bg-gray-100 w-full text-left hover:bg-primary hover:text-white"
        >
          profile
        </Link>
        <div className="w-full h-1 border-b border-gray-300"></div>

        <button
          className="px-2 py-1 w-full rounded-lg border border-gray-400 cursor-pointer hover:bg-secondary hover:text-white"
          onClick={logout}
        >
          logout
        </button>
      </div>
    </div>
  );
};

export default UserPopup;
