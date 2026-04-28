import UsersTable from "@/components/admin/userManagement/UsersTable";
import React from "react";

const UserManagementPage = () => {
  return (
    <div className="mx-auto max-w-screen-2xl">
      <div className="mb-6">
        <p className="text-xs font-semibold tracking-widest uppercase text-primary mb-2">
          Users
        </p>
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
          User management
        </h1>
      </div>
      <UsersTable />
    </div>
  );
};

export default UserManagementPage;
