import React from "react";
import {
  FaShoppingBasket,
  FaLuggageCart,
  FaUsers,
  FaChartLine,
} from "react-icons/fa";

const stats = [
  {
    label: "Total revenue",
    value: "Rs. 2,48,500",
    change: "+12.5%",
    icon: FaChartLine,
    color: "from-primary to-indigo-500",
  },
  {
    label: "Orders",
    value: "1,284",
    change: "+8.2%",
    icon: FaLuggageCart,
    color: "from-emerald-500 to-teal-500",
  },
  {
    label: "Products",
    value: "342",
    change: "+3",
    icon: FaShoppingBasket,
    color: "from-amber-500 to-orange-500",
  },
  {
    label: "Active users",
    value: "5,420",
    change: "+18.7%",
    icon: FaUsers,
    color: "from-pink-500 to-rose-500",
  },
];

const DashboardPage = () => {
  return (
    <div className="max-w-screen-2xl mx-auto">
      <div className="mb-8">
        <p className="text-xs font-semibold tracking-widest uppercase text-primary mb-2">
          Overview
        </p>
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
          Dashboard
        </h1>
        <p className="text-sm text-slate-500 dark:text-slate-400 mt-2">
          Welcome back. Here&apos;s what&apos;s happening today.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {stats.map((s) => (
          <div
            key={s.label}
            className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-sm hover:shadow-lg hover:-translate-y-0.5 transition"
          >
            <div className="flex items-start justify-between mb-4">
              <div
                className={`h-11 w-11 rounded-xl bg-gradient-to-br ${s.color} text-white flex items-center justify-center shadow-md`}
              >
                <s.icon />
              </div>
              <span className="text-xs font-semibold text-emerald-600 bg-emerald-50 dark:bg-emerald-900/30 dark:text-emerald-300 px-2 py-1 rounded-full">
                {s.change}
              </span>
            </div>
            <p className="text-xs uppercase tracking-widest text-slate-500 dark:text-slate-400 font-medium">
              {s.label}
            </p>
            <p className="text-2xl font-bold text-slate-900 dark:text-white mt-1">
              {s.value}
            </p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 mt-6">
        <div className="lg:col-span-2 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-base font-semibold text-slate-900 dark:text-white">
              Sales overview
            </h3>
            <span className="text-xs text-slate-500 dark:text-slate-400">
              Last 7 days
            </span>
          </div>
          <div className="h-56 flex items-end gap-3">
            {[40, 65, 50, 78, 60, 90, 72].map((h, i) => (
              <div key={i} className="flex-1 flex flex-col items-center gap-2">
                <div
                  className="w-full bg-gradient-to-t from-primary to-primary/40 rounded-t-lg"
                  style={{ height: `${h}%` }}
                />
                <span className="text-[10px] text-slate-400">
                  {["M", "T", "W", "T", "F", "S", "S"][i]}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-sm">
          <h3 className="text-base font-semibold text-slate-900 dark:text-white mb-5">
            Recent activity
          </h3>
          <ul className="space-y-4">
            {[
              { who: "Order #2342", what: "Confirmed", when: "2m ago" },
              { who: "User Jane D.", what: "Signed up", when: "12m ago" },
              { who: "Product 'Lens'", what: "Restocked", when: "1h ago" },
              { who: "Order #2341", what: "Delivered", when: "3h ago" },
            ].map((a, i) => (
              <li key={i} className="flex items-start gap-3">
                <div className="mt-1 h-2 w-2 rounded-full bg-primary" />
                <div className="flex-1">
                  <p className="text-sm font-medium text-slate-900 dark:text-white">
                    {a.who}
                  </p>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    {a.what} · {a.when}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
