import { DASHBOARD_ROUTES, PROFILE_ROUTES } from "@/constants/routes";
import Link from "next/link";

const UserPopup = ({ setShowPopup, user, logout }) => {
  return (
    <>
      <div
        className="fixed inset-0 z-40"
        onClick={() => setShowPopup(false)}
      ></div>
      <div className="absolute top-14 right-4 sm:right-8 z-50 animate-fade-in">
        <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-700 p-2 min-w-[220px]">
          <div className="px-3 py-3 border-b border-slate-100 dark:border-slate-700">
            <h3 className="font-semibold text-sm text-slate-900 dark:text-white truncate">
              {user.username}
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 truncate">
              {user.email}
            </p>
          </div>
          <div className="py-1.5">
            <Link
              href={DASHBOARD_ROUTES}
              onClick={() => setShowPopup(false)}
              className="block px-3 py-2 rounded-lg text-sm text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-700 transition"
            >
              Dashboard
            </Link>
            <Link
              href={PROFILE_ROUTES}
              onClick={() => setShowPopup(false)}
              className="block px-3 py-2 rounded-lg text-sm text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-700 transition"
            >
              Profile
            </Link>
          </div>
          <div className="border-t border-slate-100 dark:border-slate-700 pt-1.5">
            <button
              className="block w-full text-left px-3 py-2 rounded-lg text-sm font-medium text-secondary hover:bg-secondary/10 cursor-pointer transition"
              onClick={logout}
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserPopup;
